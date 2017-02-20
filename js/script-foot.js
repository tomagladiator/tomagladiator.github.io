/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
// C--dys-product
/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
// C--sidenav
/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
// C--lorem
/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
// P--homepage
/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
// P--styleguide
$('h2.sg--h2').each(function (i) {
    var current = $(this);
    current.attr('id', 'title' + i);
    $('.sg--left ul').append('<li><a id="link' + i + '" href="#title' + i + '" title="' + current.attr('tagName') + '">' + current.html() + '</a></li>');
});
/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
// P--lorem
var listOfProducts = [{
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Suivi dynamique', 'Police adaptée', 'Multi-langues']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Correcteur orthographique', 'Multi-langues']
            },
        ],
        'description': 'Un outil facile d\'accès pour la synthèse vocale et la prédiction orthographique.',
        'id': 'lexibar',
        'name': 'Lexibar',
        'os': 'PC',
        'price': '$$',
        'url': 'http://www.haylemtechnologies.ca/fr/lexibar'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Une application basée sur un système de vocabulaire en réseau, évolutive et personnalisable. Une des plus complètes à ce jour, disponible en 19 langues!',
        'id': 'avaz',
        'name': 'Avaz',
        'os': 'iPad',
        'price': '$',
        'url': 'http://www.avazapp.fr/'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Une application pour les patients alphabétisés qui permet une saisie rapide et intuitive du texte à énoncer',
        'id': 'proloquo4text',
        'name': 'Proloquo4Text',
        'os': ' iPad, iPhone, iPod touch',
        'price': '$$',
        'url': 'http://www.assistiveware.com/fr/produit/proloquo4text'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': 'Une application très complète comprenant une base de vocabulaire importante et permettant de passer rapidement d’une langue à l’autre (anglais/espagnol).',
        'id': 'proloquo2go',
        'name': 'Proloquo2Go',
        'os': 'iPad, iPhone, iPod touch',
        'price': '$$$',
        'url': 'http://www.assistiveware.com/fr/produit/proloquo2go'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Une application de même type que Proloquo4Text, disponible également sur Android.',
        'id': 'predictable',
        'name': 'Predictable',
        'os': 'iPad, iPhone, iPod touch, Android',
        'price': '$',
        'url': 'http://www.therapy-box.co.uk/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Couleurs dans le texte', 'Police adaptée', 'Fonction OCR']
            }],
        'description': 'Une application en ligne permettant de modifier un texte à partir de différents types de fichiers sources.',
        'id': 'aidodys',
        'name': 'Aidodys',
        'os': 'PC, Mac',
        'price': '$',
        'url': 'http://www.aidodys.com/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Fonction OCR', 'Multi-langues']
            }],
        'description': 'Un logiciel de reconnaissance optique de caractères proposé en complément de WordQ et SpeakQ pour travailler sur tous les formats de fichiers',
        'id': 'abbyy',
        'name': 'Abbyy',
        'os': 'PC, Mac',
        'price': '$$',
        'url': 'http://www.mmmonde.com/collections/antidote8-abbyy/products/abbyy-finereader-12'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Une application traduite en 8 langues, capable de combiner des images pour créer des phrases.',
        'id': 'talkdifferent',
        'name': 'TalkDifferent',
        'os': 'Android, iPad, iPhone',
        'price': '$',
        'url': 'http://talkdifferent.com/'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Cette application est un outil pratique, facile à explorer et à personnaliser peu importe l\'âge ou niveau de l\'enfant, qui donne une voix et favorise l\'indépendance.',
        'id': 'talkrocket',
        'name': 'TalkRocket Go',
        'os': 'iPad, iPhone',
        'price': '$$',
        'url': 'http://myvoiceaac.com/app/talkrocketgo/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Prédicteur orthographique', 'Multi-langues']
            }],
        'description': 'Un prédicteur orthographique incluant une prise en compte des abréviations, intéressante à partir du collège (non utilisable sur Open Office).',
        'id': 'skippy',
        'name': 'Skippy',
        'os': 'PC',
        'price': '$$$',
        'url': 'http://dystri-education.fr/logiciel-dyslexie-aide-ecriture/83-skippy-version-monoposte.html'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Suivi dynamique', 'Fonction OCR', 'Multi-langues']
            }],
        'description': 'Une synthèse vocale gratuite pour Mac et PC, pour lire tous les documents. Fonction OCR disponible en version payante.',
        'id': 'natural-reader',
        'name': 'Natural Reader',
        'os': 'PC, Mac',
        'price': 'GRATUIT',
        'url': 'http://www.naturalreaders.com/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Suivi dynamique', 'Découpage du texte']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Reconnaissance vocale']
            },
        ],
        'description': 'Un logiciel de 3 modules regroupant les besoins essentiels en lecture et en écriture.',
        'id': 'dys-vocal',
        'name': 'Dys-Vocal',
        'os': 'PC',
        'price': 'GRATUIT',
        'url': 'http://www.dyslogiciel.fr/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues', 'Fonction OCR', 'Suivi dynamique', 'Police adaptée', 'Découpage du texte']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Correcteur orthographique', 'Multi-langues']
            },
        ],
        'description': 'Un outil très complet incluant une synthèse vocale de documents numériques ou numérisés, un correcteur et une prédiction orthographiques.',
        'id': 'claroread',
        'name': 'ClaroRead',
        'os': 'PC, Mac',
        'price': '$$$',
        'url': 'http://www.claroread.ch/category/claroread-francais.php'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Découpage du texte']
            }],
        'description': 'Une extension permettant de mettre le texte en couleur pour faciliter la lecture.',
        'id': 'lirecouleur',
        'name': 'LireCouleur',
        'os': 'PC, Linux',
        'price': 'GRATUIT',
        'url': 'http://lirecouleur.arkaline.fr/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale']
            }],
        'description': 'Cette extension permet de faire lire un texte à haute voix depuis Writer, Draw ou Impress. ',
        'id': 'picosvoxooo',
        'name': 'PicoSvoxOOo',
        'os': 'PC, Linux',
        'price': 'GRATUIT',
        'url': 'http://lirecouleur.arkaline.fr/2013/11/11/picosvoxooo/'
    }, {
        'categories': [{
                'name': 'Aide à l\'écriture',
                'subcat': ['Correcteur orthographique']
            }],
        'description': 'Un outil de correction orthographique par les éditeurs du célèbre dictionnaire.',
        'id': 'le-robert-correcteur',
        'name': 'Le Robert Correcteur',
        'os': 'PC, Mac',
        'price': '$$',
        'url': 'http://www.lerobert.com/correcteur/index.php'
    }, {
        'categories': [{
                'name': 'Aide au calcul'
            }],
        'description': 'Un clavier virtuel compatible avec Dragon, pour poser les opérations.',
        'id': 'posop',
        'name': 'Posop',
        'os': 'PC',
        'price': 'GRATUIT',
        'url': 'http://idee-association.org/les-programmes/nombres-calcul-maths/posop-autonome/'
    }, {
        'categories': [{
                'name': 'Aide au calcul'
            }],
        'description': 'Un logiciel qui facilite l\'édition de formules mathématiques.',
        'id': 'dmaths',
        'name': 'DMaths',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'http://www.dmaths.org/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture'
            }],
        'description': 'Une police d\'écriture dérivée de Comic Sans MS, pour faciliter la lecture des dyslexiques.',
        'id': 'lexia',
        'name': 'Lexia',
        'os': 'PC',
        'price': 'GRATUIT',
        'url': 'http://www.dafont.com/fr/lexia.font'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Suivi dynamique']
            }],
        'description': 'La synthèse vocale reconnue pour lire tous vos documents sur les supports Apple.',
        'id': 'voice-dream',
        'name': 'Voice Dream',
        'os': 'iPad, iPhone, iPod',
        'price': '$',
        'url': 'http://www.voicedream.com/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Découpage du texte', 'Multi-langues', 'Police adaptée']
            }],
        'description': 'La synthèse vocale de Médialexie.',
        'id': 'lecteur-medialexie',
        'name': 'Lecteur - Médialexie',
        'os': 'PC, Mac',
        'price': '$',
        'url': 'http://www.medialexie.com/?langue=fr'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Découpage du texte', 'Suivi dynamique', 'Multi-langues', 'Police adaptée']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale', 'Prédicteur orthographique', 'Correcteur orthographique', 'Multi-langues']
            },
        ],
        'description': 'Un outil complet incluant les fonctions essentielles pour une aide à la lecture et à l\'écriture.',
        'id': 'korectdys-medialexie',
        'name': 'KorectDys - Médialexie',
        'os': 'PC, Mac',
        'price': '$$$',
        'url': 'http://www.medialexie.com/?langue=fr'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Découpage du texte', 'Suivi dynamique', 'Multi-langues', 'Police adaptée']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale', 'Prédicteur orthographique', 'Correcteur orthographique', 'Multi-langues']
            },
            {
                'name': 'Aide au calcul'
            },
        ],
        'description': 'La version la plus complète des outils Médialexie.',
        'id': 'scribe-medialexie',
        'name': 'Scribe - Médialexie',
        'os': 'PC, Mac',
        'price': '$$$',
        'url': 'http://www.medialexie.com/?langue=fr'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Découpage du texte']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale']
            },
        ],
        'description': 'La reconnaissance vocale de Médialexie.',
        'id': 'dictee-logolexie-medialexie',
        'name': 'Dictée Logolexie - Médialexie',
        'os': 'PC, Mac',
        'price': '$',
        'url': 'http://www.medialexie.com/?langue=fr'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Multi-langues']
            },
        ],
        'description': 'Un des pionniers dans l\'aide à la lecture et à l\'écriture.',
        'id': 'wordq-4',
        'name': 'WordQ 4',
        'os': 'PC, Mac',
        'price': '$$',
        'url': 'http://www.goqsoftware.com/'
    }, {
        'categories': [
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale', 'Multi-langues']
            },
        ],
        'description': 'Combiné à WordQ pour un ensemble complet.',
        'id': 'speakq-4',
        'name': 'SpeakQ 4',
        'os': 'PC, Mac',
        'price': '$$',
        'url': 'http://www.goqsoftware.com/'
    }, {
        'categories': [
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Correcteur orthographique']
            },
        ],
        'description': 'Pour maximiser vos succès en écriture de texte (complément à WordQ et SpeakQ).',
        'id': 'antidote-8',
        'name': 'Antidote 8',
        'os': 'PC, Mac, Linux',
        'price': '$$',
        'url': 'http://www.antidote.info/'
    }, {
        'categories': [{
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale', 'Multi-langues']
            }],
        'description': 'La reconnaissance vocale reconnue par les professionnels.',
        'id': 'dragon-naturally-speaking',
        'name': 'Dragon Naturally Speaking',
        'os': 'PC, Mac',
        'price': '$',
        'url': 'http://www.nuance.fr/dragon/index.htm'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues', 'Suivi dynamique']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Correcteur orthographique', 'Multi-langues']
            },
        ],
        'description': 'Un outil regroupant les fonctions principales d\'aide à la lecture et à l\'écriture.',
        'id': 'wody',
        'name': 'Wody',
        'os': 'PC',
        'price': '$$$',
        'url': 'http://www.sensotec.be/products/detail.aspx?ID=451&lang=FR'
    }, {
        'categories': [{
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Multi-langues']
            }],
        'description': 'Un prédicteur orthographique développé par Handicap International, à destination des élèves de primaire.',
        'id': 'dicom',
        'name': 'Dicom',
        'os': 'PC, Linux',
        'price': 'GRATUIT',
        'url': 'http://orthophonielibre.wordpress.com/tag/dicom/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues']
            }],
        'description': 'Synthèse vocale complémentaire à l\'utilisation de Dicom.',
        'id': 'open-office-vox',
        'name': 'Open Office Vox',
        'os': 'PC, Linux',
        'price': 'GRATUIT',
        'url': 'http://orthophonielibre.wordpress.com/tag/open-office-vox/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues']
            }],
        'description': 'Par les créateurs d\'Open Office Vox, pour Firefox.',
        'id': 'firefox-vox',
        'name': 'Firefox Vox',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'http://orthophonielibre.wordpress.com/tag/open-office-vox/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues']
            }],
        'description': 'Intègre une synthèse vocale pour les documents PDF. Fonction OCR disponible en version payante.',
        'id': 'adobe-reader',
        'name': 'Adobe Reader',
        'os': 'PC, Mac, Android',
        'price': 'GRATUIT',
        'url': 'http://get.adobe.com/fr/reader/otherversions/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues']
            },
            {
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale', 'Multi-langues']
            },
        ],
        'description': 'Contient une reconnaissance vocale et une synthèse vocale.',
        'id': 'windows-7-8',
        'name': 'Windows 7, 8',
        'os': 'PC',
        'price': '$',
        'url': 'http://windows.microsoft.com/fr-fr/windows/home'
    }, {
        'categories': [{
                'name': 'Aide à l\'écriture',
                'subcat': ['Reconnaissance vocale', 'Multi-langues']
            }],
        'description': 'Une reconnaissance vocale unique accessible en ligne.',
        'id': 'talktyper',
        'name': 'TalkTyper',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'https://talktyper.com/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Police adaptée']
            }],
        'description': 'Une police d\'écriture créée pour les dyslexiques, qui s\'intègre à votre traitement de texte.',
        'id': 'open-dyslexic',
        'name': 'Open dyslexic',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'http://opendyslexic.org/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Découpage du texte', 'Police adaptée']
            }],
        'description': 'Des fonctionnalités inédites sur Word pour aider à la lecture. ',
        'id': 'barre-d-outils-dys-ash87',
        'name': 'Barre d\'outils DYS_ASH87',
        'os': 'PC',
        'price': 'GRATUIT',
        'url': 'http://www.ac-limoges.fr/ia87/spip.php?article295'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Multi-langues']
            }],
        'description': 'Permet d\'éliminer les éléments non pertinents d\'une page web pour en faciliter la lecture.',
        'id': 'clearly',
        'name': 'Clearly',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'http://evernote.com/clearly/guide/'
    }, {
        'categories': [{
                'name': 'Aide à l\'écriture',
                'subcat': ['Prédicteur orthographique', 'Multi-langues']
            }],
        'description': 'Un outil d\'aide à l\'écriture sans utilisation du clavier.',
        'id': 'chewing-word',
        'name': 'Chewing Word',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'http://chewingword.wikidot.com/'
    }, {
        'categories': [{
                'name': 'Aide au calcul'
            }],
        'description': 'Un logiciel pour faciliter l\'accès aux mathématiques pour les dyspraxiques.',
        'id': 'geogebra',
        'name': 'Geogebra',
        'os': 'PC, Mac, Linux',
        'price': 'GRATUIT',
        'url': 'http://www.geogebra.org/cms/fr/'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': 'Un ensemble d\'outils pour créer des supports de communication personnalisés.',
        'id': 'boardmaker',
        'name': 'Boardmaker',
        'os': 'PC',
        'price': '$$$',
        'url': 'http://www.mayer-johnson.ca/'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Une application gratuite pour iPad et iPhone.',
        'id': 'soundingboard',
        'name': 'SoundingBoard',
        'os': 'iPad, iPhone, iPod touch',
        'price': 'GRATUIT',
        'url': 'http://www.ablenetinc.com/Assistive-Technology/Communication/SoundingBoard'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': '[FR] Un outil conçu pour tous les types de tablettes.',
        'id': 'talk-tablet',
        'name': 'Talk Tablet',
        'os': 'iPad, iPhone, Kindle, Android',
        'price': '$',
        'url': 'http://www.talktablet.com/'
    }, {
        'categories': [{
                'name': 'Aide à la communication'
            }],
        'description': 'Un cahier de communication sur iPad, entièrement personnalisable.',
        'id': 'go-talk-now',
        'name': 'Go Talk Now',
        'os': 'iPad',
        'price': '$',
        'url': 'https://itunes.apple.com/us/app/gotalk-now/id454176457?mt=8'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Multi-langues']
            }],
        'description': 'Une synthèse vocale gratuite sur PC.',
        'id': 'dspeech',
        'name': 'DSpeech',
        'os': 'PC',
        'price': 'GRATUIT',
        'url': 'http://dimio.altervista.org/eng/'
    }, {
        'categories': [{
                'name': 'Aide à la lecture',
                'subcat': ['Synthèse vocale', 'Suivi dynamique', 'Multi-langues']
            }],
        'description': 'Une synthèse vocale gratuite sur PC contenant plus de 20 langues.',
        'id': 'balabolka',
        'name': 'Balabolka',
        'os': 'PC',
        'price': 'GRATUIT',
        'url': 'http://www.cross-plus-a.com/fr/balabolka.htm'
    }];
/// <reference path="../../5-else/ts/libs/jquery.d.ts" />
/// <reference path="../../5-else/ts/products.ts" />
// Main
Vue.use(VueMaterial);
Vue.material.registerTheme({
    default: {
        accent: 'yellow',
        primary: {
            color: 'yellow',
            hue: 700
        }
    }
});
new Vue({
    computed: {
        filteredList: function () {
            var searchTerm = this.filterName.toLowerCase();
            var searchCat = this.filterCat;
            var result = this.products.sort(function (a, b) {
                // sort A-Z
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            function isTermSearched(item) {
                var itemName = item.name.toLowerCase();
                var itemDesc = item.description.toLowerCase();
                var itemPrice = item.price.toLowerCase();
                var itemOs = item.os.toLowerCase();
                if (itemName.includes(searchTerm) || itemDesc.includes(searchTerm) || itemPrice === searchTerm || itemOs.includes(searchTerm)) {
                    return item;
                }
            }
            function isCatSearched(item) {
                // if the user search is include in the title or the description of each product
                var itemCatName = item.categories[0].name;
                if (searchCat === 'Toutes catégories') {
                    return item;
                }
                else if (itemCatName.includes(searchCat)) {
                    return item;
                }
            }
            function isTermAndCatSearched(item) {
                var tempItemCat = isCatSearched(item);
                var tempItemTerm = isTermSearched(item);
                if (tempItemCat !== undefined && tempItemTerm !== undefined && tempItemCat.name === tempItemTerm.name) {
                    return item;
                }
            }
            if (this.filterName && this.filterCat !== 'Toutes catégories') {
                return result.filter(isTermAndCatSearched);
            }
            else if (this.filterName) {
                return result.filter(isTermSearched);
            }
            else if (this.filterCat) {
                return result.filter(isCatSearched);
            }
            else {
                return result;
            }
        }
    },
    data: {
        filterCat: 'Toutes catégories',
        filterName: '',
        'products': listOfProducts,
        show: true
    },
    el: '#app',
    methods: {
        getFullName: function () {
            //return this.firstName + ' ' + this.lastName;
        },
        toggleLeftSidenav: function () {
            this.$refs.leftSidenav.toggle();
        },
        open: function (ref) {
            console.log('Opened: ' + ref);
        },
        close: function (ref) {
            console.log('Closed: ' + ref);
        },
        openDialog: function (ref) {
            this.$refs[ref].open();
        },
        closeDialog: function (ref) {
            this.$refs[ref].close();
        },
        onOpen: function () {
            console.log('Opened');
        },
        onClose: function (type) {
            console.log('Closed', type);
        },
        pluralize: function (word, number) {
            if (number >= 2) {
                return word + 's';
            }
            else {
                return word;
            }
        }
    }
});
var vm = new Vue({
    methods: {
        addClassAnimate: function () {
            $('.C--dys-product li').css('max-height', '0');
            $('.C--dys-product li').css('opacity', '0');
            $('.C--dys-product li').delay(2000).each(function (i, element) {
                $(element).delay(i * 250).queue(function (next) {
                    $(this).animate({ 'max-height': '500px', 'opacity': '1' }, 1000);
                    next();
                });
            });
        }
    }
});
vm.addClassAnimate();

//# sourceMappingURL=script-foot.js.map
