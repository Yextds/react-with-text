import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// if (typeof window !== "undefined") {
//   // browser code
//   console.log(window.location.href, "/????????????");
// }

const resources = {
  en: {
    translation: {
      "FAVORITE CHICKEN & RIBS": "FAVORITE CHICKEN & RIBS",
      "Open now": "Open now",
      "closes at": "closes at",
      "Store Info": "Store Info",
      "Store Timing": "Store Timing",
      "Near By Charging Station": "Near By Charging Station",
      "Favorite is a family business, as are the majority of our franchise stores":
        "Favorite is a family business, as are the majority of our franchise stores",
      "Get Directions": "Get Directions",
      "Join us on Facebook": "Join us on Facebook",
      "In-Store": "In-Store",
      "View Details": "View Details",
    },
  },
  fr: {
    translation: {
      "FAVORITE CHICKEN & RIBS": "POULET ET CÔTES FAVORIS",
      "Open now": "Ouvert maintenant",
      "closes at": "ferme à",
      "Store Info": "Informations sur le magasin",
      "Store Timing": "Calendrier du magasin",
      "Near By Charging Station": "Station de recharge à proximité",
      "Favorite is a family business, as are the majority of our franchise stores":
        "Favorite est une entreprise familiale, tout comme la majorité de nos magasins franchisés",
      "Get Directions": "Obtenir des directions",
      "Join us on Facebook": "Rejoignez nous sur facebook",
      "In-Store": "En magasin",
      "View Details": "Voir les détails",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
