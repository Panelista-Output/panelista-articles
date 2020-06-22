var validLanguages = ['en', 'sv'];

var language = window.location.pathname.substring(1, 3);

if (validLanguages.indexOf(language) === -1) {
  language = 'sv';
}

var translations = {
  aboutPanelista: {
    en: 'About Panelista',
    sv: 'Om Panelista'
  },
  signUpForNewsletter: {
    en: 'Sign up for the newsletter',
    sv: 'Prenumerera på nyhetsbrevet'
  },
  allArticles: {
    en: 'All articles',
    sv: 'Alla artiklar'
  },
  signIn: {
    en: 'Sign in',
    sv: 'Logga in'
  },
  contactUs: {
    en: 'Contact us',
    sv: 'Kontakta oss'
  },
  pricing: {
    en: 'Pricing',
    sv: 'Priser'
  },
  bookDemo: {
    en: 'Book demo',
    sv: 'Boka demo'
  },
  articles: {
    en: 'Articles',
    sv: 'Artiklar'
  }
}

function addTranslation(selector, translationKey, href) {
  var elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    el.appendChild(document.createTextNode(translations[translationKey][language]));

    if (href) {
      el.setAttribute('href', href);
    }
  })
}

addTranslation('[data-trans="about-panelista-menu-item"]', 'aboutPanelista');
addTranslation('[data-trans="subscribe-for-newsletter-menu-item"]', 'signUpForNewsletter', 'https://panelista.com/' + language + '?openNewsletterSignup=1');
addTranslation('[data-trans="book-demo-menu-item"]', 'bookDemo', 'https://panelista.com/' + language + '/demo');
addTranslation('[data-trans="articles-menu-item"]', 'articles', '/' + language);
addTranslation('[data-trans="pricing-menu-item"]', 'pricing', 'https://panelista.com/' + language + '#pricing');
addTranslation('[data-trans="contact-us-menu-item"]', 'contactUs', 'https://panelista.com/' + language + '?openContactUs=1');
addTranslation('[data-trans="sign-in-menu-item"]', 'signIn', 'https://panelista.com/signin');

var allArticlesFooterLink = document.getElementById('all-articles-footer-link');
if (allArticlesFooterLink) {
  allArticlesFooterLink.appendChild(document.createTextNode(translations.allArticles[language]));

  allArticlesFooterLink.setAttribute('href', '/' + language);
}
