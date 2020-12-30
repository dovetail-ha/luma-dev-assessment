const DEFAULT_DATA = [
  {
    id: 1,
    firstName: 'Wade',
    lastName: 'Heeney',
    email: 'wheeney0@admin.ch',
  },
  {
    id: 2,
    firstName: 'Marigold',
    lastName: 'Foister',
    email: 'mfoister1@behance.net',
  },
  {
    id: 3,
    firstName: 'Dirk',
    lastName: 'Nunes Nabarro',
    email: 'dnunesnabarro2@deviantart.com',
  },
  {
    id: 4,
    firstName: 'Carmelita',
    lastName: 'Pallatina',
    email: 'cpallatina3@gizmodo.com',
  },
  {
    id: 5,
    firstName: 'Lise',
    lastName: 'Bogace',
    email: 'lbogace4@globo.com',
  },
  {
    id: 6,
    firstName: 'Tiffany',
    lastName: 'Fink',
    email: 'tfink5@lulu.com',
  },
  {
    id: 7,
    firstName: 'Flo',
    lastName: 'Regorz',
    email: 'fregorz6@joomla.org',
  },
  {
    id: 8,
    firstName: 'Issiah',
    lastName: 'Rusbridge',
    email: 'irusbridge7@theguardian.com',
  },
  {
    id: 9,
    firstName: 'Mireielle',
    lastName: 'Dominici',
    email: 'mdominici8@mayoclinic.com',
  },
  {
    id: 10,
    firstName: 'Enid',
    lastName: 'Wybourne',
    email: 'ewybourne9@yolasite.com',
  },
  {
    id: 11,
    firstName: 'Hervey',
    lastName: 'Yashin',
    email: 'hyashina@dropbox.com',
  },
  {
    id: 12,
    firstName: 'Gardy',
    lastName: 'Yeowell',
    email: 'gyeowellb@google.de',
  },
  {
    id: 13,
    firstName: 'Ara',
    lastName: 'Bertomieu',
    email: 'abertomieuc@unicef.org',
  },
  {
    id: 14,
    firstName: 'Grethel',
    lastName: 'Vesco',
    email: 'gvescod@wufoo.com',
  },
  {
    id: 15,
    firstName: 'Zerk',
    lastName: 'Tregien',
    email: 'ztregiene@reddit.com',
  },
  {
    id: 16,
    firstName: 'Davey',
    lastName: 'Smalley',
    email: 'dsmalleyf@jalbum.net',
  },
  {
    id: 17,
    firstName: 'Lois',
    lastName: 'Scroxton',
    email: 'lscroxtong@cmu.edu',
  },
  {
    id: 18,
    firstName: 'Chanda',
    lastName: 'Tocque',
    email: 'ctocqueh@archive.org',
  },
  {
    id: 19,
    firstName: 'Laina',
    lastName: 'Hoyte',
    email: 'lhoytei@fc2.com',
  },
  {
    id: 20,
    firstName: 'Perla',
    lastName: 'Overell',
    email: 'poverellj@mail.ru',
  },
  {
    id: 21,
    firstName: 'Emmye',
    lastName: 'Magner',
    email: 'emagnerk@pagesperso-orange.fr',
  },
  {
    id: 22,
    firstName: 'Cecile',
    lastName: 'Earingey',
    email: 'cearingeyl@java.com',
  },
  {
    id: 23,
    firstName: 'Jeanine',
    lastName: 'Twinbourne',
    email: 'jtwinbournem@domainmarket.com',
  },
  {
    id: 24,
    firstName: 'Lammond',
    lastName: 'McMorran',
    email: 'lmcmorrann@usda.gov',
  },
  {
    id: 25,
    firstName: 'Analiese',
    lastName: 'Linbohm',
    email: 'alinbohmo@goodreads.com',
  },
  {
    id: 26,
    firstName: 'Auberta',
    lastName: 'Olliffe',
    email: 'aolliffep@ebay.com',
  },
  {
    id: 27,
    firstName: 'Micky',
    lastName: 'Finch',
    email: 'mfinchq@smh.com.au',
  },
  {
    id: 28,
    firstName: 'Harlin',
    lastName: 'Sawday',
    email: 'hsawdayr@sogou.com',
  },
  {
    id: 29,
    firstName: 'Zelda',
    lastName: 'Trenoweth',
    email: 'ztrenoweths@facebook.com',
  },
  {
    id: 30,
    firstName: 'Laureen',
    lastName: 'Keuning',
    email: 'lkeuningt@shinystat.com',
  },
  {
    id: 31,
    firstName: 'Chris',
    lastName: 'Mc Coughan',
    email: 'cmccoughanu@cbsnews.com',
  },
  {
    id: 32,
    firstName: 'Cherry',
    lastName: 'Gonneau',
    email: 'cgonneauv@prweb.com',
  },
  {
    id: 33,
    firstName: 'Betsy',
    lastName: 'Wolters',
    email: 'bwoltersw@xing.com',
  },
  {
    id: 34,
    firstName: 'Pavel',
    lastName: 'Gobel',
    email: 'pgobelx@meetup.com',
  },
  {
    id: 35,
    firstName: 'Olva',
    lastName: 'Cinelli',
    email: 'ocinelliy@state.tx.us',
  },
  {
    id: 36,
    firstName: 'Nye',
    lastName: 'Gollard',
    email: 'ngollardz@eventbrite.com',
  },
  {
    id: 37,
    firstName: 'Susanna',
    lastName: 'Prophet',
    email: 'sprophet10@ucoz.ru',
  },
  {
    id: 38,
    firstName: 'Fanchette',
    lastName: 'Piatkow',
    email: 'fpiatkow11@businesswire.com',
  },
  {
    id: 39,
    firstName: 'Ruby',
    lastName: 'Barrim',
    email: 'rbarrim12@businessinsider.com',
  },
  {
    id: 40,
    firstName: 'Orran',
    lastName: 'Lackner',
    email: 'olackner13@multiply.com',
  },
  {
    id: 41,
    firstName: 'Gene',
    lastName: 'Gallehawk',
    email: 'ggallehawk14@sbwire.com',
  },
  {
    id: 42,
    firstName: 'Annmaria',
    lastName: 'Dobrovolny',
    email: 'adobrovolny15@cyberchimps.com',
  },
  {
    id: 43,
    firstName: 'Stephanus',
    lastName: 'Tootin',
    email: 'stootin16@time.com',
  },
  {
    id: 44,
    firstName: 'Sibby',
    lastName: 'Lubeck',
    email: 'slubeck17@amazon.de',
  },
  {
    id: 45,
    firstName: 'Harlin',
    lastName: 'Prevett',
    email: 'hprevett18@tinyurl.com',
  },
  {
    id: 46,
    firstName: 'Waylen',
    lastName: 'Reeme',
    email: 'wreeme19@jalbum.net',
  },
  {
    id: 47,
    firstName: 'Cam',
    lastName: 'Mooreed',
    email: 'cmooreed1a@ox.ac.uk',
  },
  {
    id: 48,
    firstName: 'Lemmy',
    lastName: 'Perutto',
    email: 'lperutto1b@shareasale.com',
  },
  {
    id: 49,
    firstName: 'Barnebas',
    lastName: 'Beverstock',
    email: 'bbeverstock1c@seesaa.net',
  },
  {
    id: 50,
    firstName: 'Papagena',
    lastName: 'Hows',
    email: 'phows1d@istockphoto.com',
  },
];

class Database {
  constructor() {
    this.users = [];
  }

  initUsers() {
    this.users = [...DEFAULT_DATA];
  }
}

module.exports = new Database();
