let currentLanguage = "de"; // Default language

function switchLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  updateContent();
  localStorage.setItem("preferredLanguage", lang);
}

function updateContent() {
  const elements = document.querySelectorAll("[data-i18n]");
  for (const element of elements) {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  }

  // Update meta tags
  document.title = translations[currentLanguage].title;
  document.querySelector('meta[name="description"]').content =
    translations[currentLanguage].description;
  // Update other meta tags as needed
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    document.documentElement.lang = currentLanguage;
  }
  updateContent();
});
