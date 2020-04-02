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
    en: 'Sign up for newsletter',
    sv: 'Prenumerera på nyhetsbrevet'
  },
  allArticles: {
    en: 'All articles',
    sv: 'Alla artiklar'
  }
}

var aboutPanelistaMenuLink = document.getElementById('about-panelista-menu-item');
if (aboutPanelistaMenuLink) {
  aboutPanelistaMenuLink.appendChild(document.createTextNode(translations.aboutPanelista[language]));
}

var signUpForNewsletterMenuLink = document.getElementById('subscribe-for-newsletter-menu-item');
if (signUpForNewsletterMenuLink) {
  signUpForNewsletterMenuLink.appendChild(document.createTextNode(translations.signUpForNewsletter[language]));

  signUpForNewsletterMenuLink.setAttribute('href', 'https://panelista.com/' + language + '/?openNewsletterSignup=1');
}

var signUpForNewsletterMenuIcon = document.getElementById('subscribe-for-newsletter-menu-icon');
if (signUpForNewsletterMenuIcon) {
  signUpForNewsletterMenuIcon.setAttribute('href', 'https://panelista.com/' + language + '/?openNewsletterSignup=1');
}

var allArticlesFooterLink = document.getElementById('all-articles-footer-link');
if (allArticlesFooterLink) {
  allArticlesFooterLink.appendChild(document.createTextNode(translations.allArticles[language]));

  allArticlesFooterLink.setAttribute('href', '/' + language);
}
