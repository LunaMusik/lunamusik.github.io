var dict = {
  "Language selection:": {
    de: "Sprach Auswahl:",
    fr: "Sélection de la langue:"
  },
  "CREDIT": {
    de: "Anerkennung",
    fr: "Le crédit"
  },
  "AROUND THE WEB": {
    de: "RUND UM DAS WEB",
    fr: "AUTOUR DU WEB"
  },
  "GOT QUESTION?": {
    de: "HABEN SIE FRAGEN?",
    fr: "VOUS AVEZ UNE QUESTION?"
  },
  "Contact us on Discord": {
    de: "Kontaktieren Sie uns auf Discord",
    fr: "Contactez-nous sur Discord"
  },
  "Availability": {
    de: "Verfügbarkeit",
    fr: "Disponibilité"
  },
  "User data including Server Data may be deleted at any time.": {
    de: "Benutzerdaten einschließlich Serverdaten können jederzeit gelöscht werden.",
    fr: "Les données de l'utilisateur, y compris les données du serveur, peuvent être supprimées à tout moment."
  }
}

//init translator with default language
var translator = $('body').translate({ lang: "en", t: dict });