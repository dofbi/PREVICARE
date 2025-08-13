import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

function NotificationList() {
  const notifications = [
    {
      id: 1,
      title: "Nouvelle mise à jour IPRES",
      message: "Votre cotisation de mars 2025 a été enregistrée avec succès.",
      time: "Il y a 2 heures",
      type: "info",
      isNew: true
    },
    {
      id: 2,
      title: "Document ajouté",
      message: "Votre bulletin de paie de février 2025 a été archivé.",
      time: "Il y a 1 jour",
      type: "document",
      isNew: false
    },
    {
      id: 3,
      title: "Rappel consultation",
      message: "N'oubliez pas votre rendez-vous juridique demain à 14h.",
      time: "Il y a 2 jours",
      type: "reminder",
      isNew: false
    }
  ];
  const getIcon = (type) => {
    switch (type) {
      case "info":
        return "💡";
      case "document":
        return "📄";
      case "reminder":
        return "⏰";
      default:
        return "📢";
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: notifications.map((notification) => /* @__PURE__ */ jsxs("div", { className: `flex items-start space-x-3 p-4 border rounded-lg ${notification.isNew ? "bg-blue-50 border-blue-200" : "bg-white"}`, children: [
    /* @__PURE__ */ jsx("div", { className: "text-xl", children: getIcon(notification.type) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: notification.title }),
        notification.isNew && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800", children: "Nouveau" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: notification.message }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-2", children: notification.time })
    ] })
  ] }, notification.id)) });
}

export { NotificationList as N };
