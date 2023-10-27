const lang = navigator.language.toLowerCase();
if (lang.startsWith('fr')) {}
else if (lang.startsWith('ru')) {window.location.href = 'https://watermelon.cool/ru/';}
else if (lang.startsWith('de')) {window.location.href = 'https://watermelon.cool/de/';}
else {window.location.href = 'https://watermelon.cool/en/';}