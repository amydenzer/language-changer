const translations = {
    'en': {
        'welcome': 'Welcome',
        'description': 'This is a sample text in English.'
    },
    'es': {
        'welcome': 'Bienvenido',
        'description': 'Este es un texto de ejemplo en español.'
    },
    'de': {
        'welcome': 'Willkommen',
        'description': 'Dies ist ein Beispieltext auf Deutsch.'
    },
    'it': {
        'welcome': 'Benvenuto',
        'description': 'Questo è un testo di esempio in italiano.'
    },
    'fr': {
        'welcome': 'Bienvenue',
        'description': 'Ceci est un texte d\'exemple en français.'
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(function(element) {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
}

document.getElementById('switchToEnglish').addEventListener('click', function() {
    switchLanguage('en');
});

document.getElementById('switchToSpanish').addEventListener('click', function() {
    switchLanguage('es');
});

document.getElementById('switchToGerman').addEventListener('click', function() {
    switchLanguage('de');
});

document.getElementById('switchToItalian').addEventListener('click', function() {
    switchLanguage('it');
});

document.getElementById('switchToFrench').addEventListener('click', function() {
    switchLanguage('fr');
});
