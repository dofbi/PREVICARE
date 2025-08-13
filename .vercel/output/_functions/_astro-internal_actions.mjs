import './chunks/_astro_actions_DK20husH.mjs';
import * as z from 'zod';
import { c as createClient } from './chunks/supabase_DDs4uLxJ.mjs';
import { a as defineAction } from './chunks/index_BCAuoY3S.mjs';

const emailSignUp = async ({
  email,
  password,
  firstName,
  lastName,
  userType,
  isExpatriate,
  terms
}, context) => {
  console.log("=== DÉBUT ACTION D'INSCRIPTION ===");
  console.log("Email:", email);
  console.log("Type d'utilisateur:", userType);
  console.log("Statut expatrié:", isExpatriate);
  console.log("Terms:", terms);
  const termsAccepted = terms === true || terms === "true" || terms === "on" || terms === void 0;
  console.log("Terms acceptés (par défaut):", termsAccepted);
  try {
    console.log("Configuration Supabase...");
    console.log("SUPABASE_URL:", undefined                            );
    console.log("SUPABASE_KEY présente:", !!undefined                            );
    const supabase = createClient({
      request: context.request,
      cookies: context.cookies
    });
    const expatriateStatus = isExpatriate === true || isExpatriate === "true" || isExpatriate === "on";
    console.log("Statut expatrié converti:", expatriateStatus);
    console.log("Tentative d'inscription avec Supabase...");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          role: userType,
          is_expatriate: expatriateStatus
        }
      }
    });
    if (error) {
      console.error("=== ERREUR D'INSCRIPTION ===");
      console.error("Code d'erreur:", error.code);
      console.error("Message d'erreur:", error.message);
      console.error("Détails complets:", error);
      let userMessage = "Une erreur est survenue lors de l'inscription.";
      if (error.message.includes("User already registered") || error.message.includes("already registered")) {
        userMessage = "Cette adresse email est déjà utilisée. Essayez de vous connecter ou utilisez une autre adresse.";
      } else if (error.message.includes("Invalid email") || error.message.includes("invalid email")) {
        userMessage = "L'adresse email fournie n'est pas valide.";
      } else if (error.message.includes("Password should be at least") || error.message.includes("weak password")) {
        userMessage = "Le mot de passe est trop faible. Il doit contenir au moins 6 caractères.";
      } else if (error.message.includes("signup disabled") || error.code === "signup_disabled") {
        userMessage = "L'inscription est temporairement désactivée. Veuillez réessayer plus tard.";
      } else if (error.code === "email_already_confirmed") {
        userMessage = "Cette adresse email est déjà confirmée. Vous pouvez vous connecter.";
      } else if (error.message.includes("Email rate limit exceeded")) {
        userMessage = "Trop de tentatives d'inscription. Veuillez patienter quelques minutes avant de réessayer.";
      }
      return {
        success: false,
        message: userMessage
      };
    } else {
      console.log("=== INSCRIPTION RÉUSSIE ===");
      console.log("Utilisateur créé:", data.user?.id);
      console.log("Email envoyé:", data.user?.email_confirmed_at ? "Confirmé" : "En attente de confirmation");
      console.log("Données complètes:", data);
      return {
        success: true,
        message: "Votre compte a été créé avec succès ! Un email de confirmation vous a été envoyé. Veuillez vérifier votre boîte de réception et cliquer sur le lien de validation pour activer votre compte.",
        data: {
          userId: data.user?.id,
          email: data.user?.email,
          confirmationSent: !data.user?.email_confirmed_at
        }
      };
    }
  } catch (err) {
    console.error("=== ERREUR INATTENDUE ===");
    console.error("Type d'erreur:", typeof err);
    console.error("Message:", err instanceof Error ? err.message : String(err));
    console.error("Stack:", err instanceof Error ? err.stack : "Pas de stack trace");
    console.error("Objet complet:", err);
    return {
      success: false,
      message: "Une erreur technique inattendue s'est produite. Veuillez réessayer dans quelques instants."
    };
  }
};

const emailSignIn = async ({ email, password }, context) => {
  console.log("Action de connexion");
  try {
    const supabase = createClient({
      request: context.request,
      cookies: context.cookies
    });
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.error("Erreur de connexion", error);
      return {
        success: false,
        message: error.message === "Invalid login credentials" ? "Email ou mot de passe incorrect. Veuillez vérifier vos informations." : error.message
      };
    } else {
      console.log("Connexion réussie", data);
      const userRole = data.user?.user_metadata?.role;
      let redirectUrl = "/";
      if (userRole === "employee") {
        redirectUrl = "/espace-employes";
      } else if (userRole === "employer") {
        redirectUrl = "/espace-employeurs";
      } else if (userRole === "delegate") {
        redirectUrl = "/espace-delegues";
      }
      return {
        success: true,
        redirectUrl,
        user: data.user
      };
    }
  } catch (err) {
    console.error("Erreur de connexion", err);
    return {
      success: false,
      message: "Erreur inattendue lors de la connexion. Veuillez réessayer."
    };
  }
};

const auth = {
  signIn: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6)
    }),
    handler: async (input, context) => {
      return emailSignIn(input, context);
    }
  }),
  signUp: defineAction({
    accept: "form",
    input: z.object({
      firstName: z.string().min(1, "Le prénom est requis"),
      lastName: z.string().min(1, "Le nom est requis"),
      email: z.string().email("Email invalide"),
      userType: z.enum(["employee", "employer", "delegate"]),
      password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
      confirmPassword: z.string(),
      phone: z.string().optional(),
      company: z.string().optional(),
      isExpatriate: z.boolean().default(false),
      terms: z.union([z.boolean(), z.string()]).optional()
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Les mots de passe ne correspondent pas",
      path: ["confirmPassword"]
    }),
    handler: async (input, context) => {
      return emailSignUp(input, context);
    }
  }),
  signOut: defineAction({
    handler: async (_, context) => {
      const supabase = createClient({
        request: context.request,
        cookies: context.cookies
      });
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Erreur de déconnexion", error);
        return {
          success: false,
          message: error.message
        };
      }
      return {
        success: true,
        message: "Déconnexion réussie"
      };
    }
  })
};

const server = {
  auth
};

export { server };
