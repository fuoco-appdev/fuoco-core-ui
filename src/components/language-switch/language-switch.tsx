import { useRef, useState } from 'react'
import { Button } from '../button'
import { Dropdown, DropDownProps } from '../dropdown'
import Ripples from 'react-ripples'
import { FormLayout, FormLayoutClasses } from '../../lib/layout/form-layout'
// @ts-ignore
import styles from './language-switch.module.scss'

export enum LanguageCode {
  AA = 'aa', // Afar
  AB = 'ab', // Abkhazian
  AF = 'af', // Afrikaans
  AK = 'ak', // Akan
  AM = 'am', // Amharic
  AR = 'ar', // Arabic
  AS = 'as', // Assamese
  AW = 'aw', // Awadhi
  AY = 'ay', // Aymara
  AZ = 'az', // Azerbaijani
  B1 = 'b1', // Bhojpuri
  B2 = 'b2', // Maithili
  BA = 'ba', // Bashkir
  BE = 'be', // Belarussian
  BG = 'bg', // Bulgarian
  BH = 'bh', // Bihari
  BI = 'bi', // Bislama
  BL = 'bl', // Balochi
  BN = 'bn', // Bengali
  BO = 'bo', // Tibetan
  BR = 'br', // Breton
  CA = 'ca', // Catalan
  CB = 'cb', // Cebuano
  CE = 'ce', // Chechen
  CO = 'co', // Corsican
  CS = 'cs', // Czech
  CY = 'cy', // Welsh
  DA = 'da', // Danish
  DE = 'de', // German
  DK = 'dk', // Dakhini
  DZ = 'dz', // Bhutani
  EL = 'el', // Greek
  EN = 'en', // English
  EO = 'eo', // Esperanto
  ES = 'es', // Spanish
  ET = 'et', // Estonian
  EU = 'eu', // Basque
  FA = 'fa', // Persian
  FI = 'fi', // Finnish
  FJ = 'fj', // Fiji
  FO = 'fo', // Faeroese
  FR = 'fr', // French
  FY = 'fy', // Frisian
  GA = 'ga', // Irish
  GD = 'gd', // Scottish Gaelic
  GL = 'gl', // Galician
  GN = 'gn', // Guarani
  GU = 'gu', // Gujarati
  HA = 'ha', // Hausa
  HI = 'hi', // Hindi
  HR = 'hr', // Croatian
  HT = 'ht', // Haitian Creole
  HU = 'hu', // Hungarian
  HY = 'hy', // Armenian
  IA = 'ia', // Interlingua
  IE = 'ie', // Interlingue
  IK = 'ik', // Inupiak
  IN = 'in', // Indonesian
  IS = 'is', // Icelandic
  IT = 'it', // Italian
  IW = 'iw', // Hebrew
  JA = 'ja', // Japanese
  JI = 'ji', // Yiddish
  JW = 'jw', // Javanese
  KA = 'ka', // Georgian
  KB = 'kb', // Kabyle
  KI = 'ki', // Konkani
  KK = 'kk', // Kazakh
  KL = 'kl', // Greenlandic
  KM = 'km', // Khmer
  KN = 'kn', // Kannada
  KO = 'ko', // Korean
  KS = 'ks', // Kashmiri
  KU = 'ku', // Kurdish
  KY = 'ky', // Kirghiz
  LA = 'la', // Latin
  LB = 'lb', // Luxembourgish
  LM = 'lm', // Lombard
  LN = 'ln', // Lingala
  LO = 'lo', // Laothian
  LT = 'lt', // Lithuanian
  LV = 'lv', // Latvian
  MG = 'mg', // Malagasy
  MI = 'mi', // Maori
  MK = 'mk', // Macedonian
  ML = 'ml', // Malayalam
  MN = 'mn', // Mongolian
  MO = 'mo', // Moldavian
  MR = 'mr', // Marathi
  MS = 'ms', // Malay
  MT = 'mt', // Maltese
  MU = 'mu', // Makhuwa
  MW = 'mw', // Marwari
  MY = 'my', // Burmese
  NA = 'na', // Nauru
  NE = 'ne', // Nepali
  NL = 'nl', // Dutch
  NO = 'no', // Norwegian
  OC = 'oc', // Occitan
  OM = 'om', // Oromo
  OR = 'or', // Oriya
  PA = 'pa', // Punjabi
  PL = 'pl', // Polish
  PS = 'ps', // Pashto
  PT = 'pt', // Portuguese
  QU = 'qu', // Quechua
  RI = 'ri', // Rifian
  RM = 'rm', // Rhaeto-Romance
  RN = 'rn', // Kirundi
  RO = 'ro', // Romanian
  RU = 'ru', // Russian
  RW = 'rw', // Kinyarwanda
  SA = 'sa', // Sanskrit
  SD = 'sd', // Sindhi
  SG = 'sg', // Sangro
  SH = 'sh', // Serbo-Croatian
  SI = 'si', // Sinhalese
  SK = 'sk', // Slovak
  SL = 'sl', // Slovenian
  SM = 'sm', // Samoan
  SN = 'sn', // Shona
  SO = 'so', // Somali
  SQ = 'sq', // Albanian
  SR = 'sr', // Serbian
  SS = 'ss', // Siswati
  ST = 'st', // Sesotho
  SU = 'su', // Sundanese
  SV = 'sv', // Swedish
  SW = 'sw', // Swahili
  TA = 'ta', // Tamil
  TE = 'te', // Telugu
  TG = 'tg', // Tajik
  TH = 'th', // Thai
  TI = 'ti', // Tigrinya
  TK = 'tk', // Turkmen
  TL = 'tl', // Tagalog
  TM = 'tm', // Tuareg
  TN = 'tn', // Setswana
  TO = 'to', // Tonga
  TR = 'tr', // Turkish
  TS = 'ts', // Tsonga
  TT = 'tt', // Tatar
  TW = 'tw', // Twi
  TZ = 'tz', // Tamazight
  UG = 'ug', // Uyghur
  UK = 'uk', // Ukrainian
  UR = 'ur', // Urdu
  UZ = 'uz', // Uzbek
  VI = 'vi', // Vietnamese
  VO = 'vo', // Volapuk
  WO = 'wo', // Wolof
  XH = 'xh', // Xhosa
  YO = 'yo', // Yoruba
  ZH = 'zh', // Chinese
  ZU = 'zu', // Zulu
}

const isoLanguages: Record<string, { name: string; nativeName: string }> = {
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа',
  },
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'Aragonés',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ, магӀарул мацӀ',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara, euskera',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'Беларуская',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  ca: {
    name: 'Catalan; Valencian',
    nativeName: 'Català',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ny: {
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiCheŵa, chinyanja',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文 (Zhōngwén), 汉语, 漢語',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu, lingua corsa',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski',
  },
  cs: {
    name: 'Czech',
    nativeName: 'česky, čeština',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  dv: {
    name: 'Divehi; Dhivehi; Maldivian;',
    nativeName: 'ދިވެހި',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands, Vlaams',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti, eesti keel',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi, suomen kieli',
  },
  fr: {
    name: 'French',
    nativeName: 'français',
  },
  ff: {
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  gl: {
    name: 'Galician',
    nativeName: 'Galego',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  el: {
    name: 'Greek, Modern',
    nativeName: 'Ελληνικά',
  },
  gn: {
    name: 'Guaraní',
    nativeName: 'Avañeẽ',
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  ht: {
    name: 'Haitian; Haitian Creole',
    nativeName: 'Kreyòl ayisyen',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa, هَوُسَ',
  },
  he: {
    name: 'Hebrew (modern)',
    nativeName: 'עברית',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी, हिंदी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'Magyar',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq, Iñupiatun',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語 (にほんご／にっぽんご)',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  kl: {
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी, كشميري‎',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'Қазақ тілі',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ',
  },
  ki: {
    name: 'Kikuyu, Gikuyu',
    nativeName: 'Gĩkũyũ',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  ky: {
    name: 'Kirghiz, Kyrgyz',
    nativeName: 'кыргыз тили',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'KiKongo',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî, كوردی‎',
  },
  kj: {
    name: 'Kwanyama, Kuanyama',
    nativeName: 'Kuanyama',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine, lingua latina',
  },
  lb: {
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາລາວ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: '',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg, Gailck',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'Malagasy fiteny',
  },
  ms: {
    name: 'Malay',
    nativeName: 'bahasa Melayu, بهاس ملايو‎',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mr: {
    name: 'Marathi (Marāṭhī)',
    nativeName: 'मराठी',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'монгол',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero',
  },
  nv: {
    name: 'Navajo, Navaho',
    nativeName: 'Diné bizaad, Dinékʼehǰí',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'North Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  nr: {
    name: 'South Ndebele',
    nativeName: 'isiNdebele',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'Occitan',
  },
  oj: {
    name: 'Ojibwe, Ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  cu: {
    name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetian, Ossetic',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Panjabi, Punjabi',
    nativeName: 'ਪੰਜਾਬੀ, پنجابی‎',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  pl: {
    name: 'Polish',
    nativeName: 'polski',
  },
  ps: {
    name: 'Pashto, Pushto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi, Kichwa',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'kiRundi',
  },
  ro: {
    name: 'Romanian, Moldavian, Moldovan',
    nativeName: 'română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'русский язык',
  },
  sa: {
    name: 'Sanskrit (Saṁskṛta)',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी, سنڌي، سندھی‎',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sm: {
    name: 'Samoan',
    nativeName: 'gagana faa Samoa',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  gd: {
    name: 'Scottish Gaelic; Gaelic',
    nativeName: 'Gàidhlig',
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  si: {
    name: 'Sinhala, Sinhalese',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovene',
    nativeName: 'slovenščina',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga, af Soomaali',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  es: {
    name: 'Spanish; Castilian',
    nativeName: 'español, castellano',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ, toğikī, تاجیکی‎',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  bo: {
    name: 'Tibetan Standard, Tibetan, Central',
    nativeName: 'བོད་ཡིག',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen, Түркмен',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga (Tonga Islands)',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татарча, tatarça, تاتارچا‎',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uighur, Uyghur',
    nativeName: 'Uyƣurqə, ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'zbek, Ўзбек, أۇزبېك‎',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'Walon',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang, Chuang',
    nativeName: 'Saɯ cueŋƅ, Saw cuengh',
  },
}

export interface LanguageSwitchProps {
  type?: 'button' | 'listbox'
  language?: LanguageCode
  supportedLanguages?: LanguageCode[]
  touchScreen?: boolean
  parentRef?: React.RefObject<HTMLElement>
  dropdownProps?: DropDownProps
  hideText?: boolean
  classNames?: {
    formLayout?: FormLayoutClasses
    listbox?: string
    container?: string
    ripple?: string
    iconContainer?: string
    label?: string
    chevronContainer?: string
    chevron?: string
  }
  id?: string
  label?: string
  labelOptional?: string
  layout?: 'horizontal' | 'vertical'
  descriptionText?: string
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  style?: React.CSSProperties
  onChange?: (
    language: LanguageCode,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void
}

function LanguageSwitch({
  type = 'button',
  language = LanguageCode.EN,
  supportedLanguages = [
    LanguageCode.AA,
    LanguageCode.AB,
    LanguageCode.AF,
    LanguageCode.AK,
    LanguageCode.AM,
    LanguageCode.AR,
    LanguageCode.AS,
    LanguageCode.AW,
    LanguageCode.AY,
    LanguageCode.AZ,
    LanguageCode.B1,
    LanguageCode.B2,
    LanguageCode.BA,
    LanguageCode.BE,
    LanguageCode.BG,
    LanguageCode.BH,
    LanguageCode.BI,
    LanguageCode.BL,
    LanguageCode.BN,
    LanguageCode.BO,
    LanguageCode.BR,
    LanguageCode.CA,
    LanguageCode.CB,
    LanguageCode.CE,
    LanguageCode.CO,
    LanguageCode.CS,
    LanguageCode.CY,
    LanguageCode.DA,
    LanguageCode.DE,
    LanguageCode.DK,
    LanguageCode.DZ,
    LanguageCode.EL,
    LanguageCode.EN,
    LanguageCode.EO,
    LanguageCode.ES,
    LanguageCode.ET,
    LanguageCode.EU,
    LanguageCode.FA,
    LanguageCode.FI,
    LanguageCode.FJ,
    LanguageCode.FO,
    LanguageCode.FR,
    LanguageCode.FY,
    LanguageCode.GA,
    LanguageCode.GD,
    LanguageCode.GL,
    LanguageCode.GN,
    LanguageCode.GU,
    LanguageCode.HA,
    LanguageCode.HI,
    LanguageCode.HR,
    LanguageCode.HT,
    LanguageCode.HU,
    LanguageCode.HY,
    LanguageCode.IE,
    LanguageCode.IK,
    LanguageCode.IN,
    LanguageCode.IS,
    LanguageCode.IT,
    LanguageCode.IW,
    LanguageCode.JA,
    LanguageCode.JI,
    LanguageCode.JW,
    LanguageCode.KA,
    LanguageCode.KB,
    LanguageCode.KI,
    LanguageCode.KK,
    LanguageCode.KL,
    LanguageCode.KM,
    LanguageCode.KN,
    LanguageCode.KO,
    LanguageCode.KS,
    LanguageCode.KU,
    LanguageCode.KY,
    LanguageCode.LA,
    LanguageCode.LB,
    LanguageCode.LM,
    LanguageCode.LN,
    LanguageCode.LO,
    LanguageCode.LT,
    LanguageCode.LV,
    LanguageCode.MG,
    LanguageCode.MI,
    LanguageCode.MK,
    LanguageCode.ML,
    LanguageCode.MN,
    LanguageCode.MO,
    LanguageCode.MR,
    LanguageCode.MS,
    LanguageCode.MT,
    LanguageCode.MU,
    LanguageCode.MW,
    LanguageCode.MY,
    LanguageCode.NA,
    LanguageCode.NE,
    LanguageCode.NL,
    LanguageCode.NO,
    LanguageCode.OC,
    LanguageCode.OM,
    LanguageCode.OR,
    LanguageCode.PA,
    LanguageCode.PL,
    LanguageCode.PS,
    LanguageCode.PT,
    LanguageCode.QU,
    LanguageCode.RI,
    LanguageCode.RM,
    LanguageCode.RN,
    LanguageCode.RO,
    LanguageCode.RU,
    LanguageCode.RW,
    LanguageCode.SA,
    LanguageCode.SD,
    LanguageCode.SG,
    LanguageCode.SH,
    LanguageCode.SI,
    LanguageCode.SK,
    LanguageCode.SL,
    LanguageCode.SM,
    LanguageCode.SN,
    LanguageCode.SO,
    LanguageCode.SQ,
    LanguageCode.SR,
    LanguageCode.SS,
    LanguageCode.ST,
    LanguageCode.SU,
    LanguageCode.SV,
    LanguageCode.SW,
    LanguageCode.TA,
    LanguageCode.TE,
    LanguageCode.TG,
    LanguageCode.TH,
    LanguageCode.TI,
    LanguageCode.TK,
    LanguageCode.TL,
    LanguageCode.TM,
    LanguageCode.TN,
    LanguageCode.TO,
    LanguageCode.TR,
    LanguageCode.TS,
    LanguageCode.TT,
    LanguageCode.TW,
    LanguageCode.TZ,
    LanguageCode.UG,
    LanguageCode.UK,
    LanguageCode.UR,
    LanguageCode.UZ,
    LanguageCode.VI,
    LanguageCode.VO,
    LanguageCode.WO,
    LanguageCode.XH,
    LanguageCode.YO,
    LanguageCode.ZH,
    LanguageCode.ZU,
  ],
  touchScreen = false,
  hideText = false,
  classNames,
  id,
  label,
  labelOptional,
  layout,
  descriptionText,
  onMouseEnter,
  onMouseLeave,
  style,
  parentRef,
  dropdownProps,
  onChange,
}: LanguageSwitchProps) {
  const dropdownRefs: Record<string, HTMLLIElement> = {}
  const anchorRef = useRef<HTMLDivElement | null>(null)
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const dropdown = (
    <Dropdown
      {...dropdownProps}
      style={{
        ...(type === 'listbox' && {
          width: anchorRef?.current?.getBoundingClientRect().width,
        }),
      }}
      touchScreen={touchScreen}
      parentRef={parentRef}
      anchorRef={anchorRef}
      open={showDropdown}
      onClose={() => {
        setShowDropdown(false)
      }}
    >
      {supportedLanguages.map((language, index) => {
        const inputFlagClasses = [styles['flag'], styles[language]].join(' ')
        return (
          <Dropdown.Item
            onClick={(e) => {
              onChange?.(language, e)
              setShowDropdown(false)
            }}
            ref={(el: HTMLLIElement) => (dropdownRefs[`flag_no_${index}`] = el)}
            key={`flag_no_${index}`}
          >
            <Dropdown.Icon>
              <div className={inputFlagClasses} />
            </Dropdown.Icon>
            <span className={styles['language-name']}>
              {isoLanguages[language]?.nativeName}
            </span>
          </Dropdown.Item>
        )
      })}
    </Dropdown>
  )

  return (
    <>
      {type === 'button' && (
        <div>
          <Button
            ref={anchorRef}
            type={'text'}
            icon={
              <div className={[styles['flag'], styles[language]].join(' ')} />
            }
            onClick={() => setShowDropdown(true)}
            touchScreen={touchScreen}
          >
            {!hideText && isoLanguages[language]?.nativeName}
          </Button>
          {dropdown}
        </div>
      )}
      {type === 'listbox' && (
        <FormLayout
          label={label}
          labelOptional={labelOptional}
          layout={layout}
          id={id}
          descriptionText={descriptionText}
          classNames={classNames?.formLayout}
          style={style}
          size={'medium'}
        >
          <div
            ref={anchorRef}
            className={[
              styles['listbox-container'],
              classNames?.container,
            ].join(' ')}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Ripples
              className={[styles['listbox-ripple'], classNames?.ripple].join(
                ' '
              )}
              onClick={() => setShowDropdown(true)}
            >
              <div
                className={[styles['listbox'], classNames?.listbox].join(' ')}
              >
                <div
                  className={[
                    styles['listbox-icon-container'],
                    classNames?.iconContainer,
                  ].join(' ')}
                >
                  <div
                    className={[styles['flag'], styles[language]].join(' ')}
                  />
                </div>
                <span
                  className={[styles['listbox-label'], classNames?.label].join(
                    ' '
                  )}
                >
                  {isoLanguages[language]?.nativeName}
                </span>
                <span
                  className={[
                    styles['listbox-chevron-container'],
                    classNames?.chevronContainer,
                  ].join(' ')}
                >
                  <svg
                    className={[
                      styles['listbox-chevron'],
                      classNames?.chevron,
                    ].join(' ')}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Ripples>
          </div>
          {dropdown}
        </FormLayout>
      )}
    </>
  )
}

export default LanguageSwitch
