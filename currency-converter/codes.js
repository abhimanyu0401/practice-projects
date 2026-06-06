// Currency code → ISO 3166-1 alpha-2 country code
// Cleaned & updated — removes obsolete currencies, fixes wrong mappings
const countryList = {

  // A
  AED: "AE", // UAE Dirham
  AFN: "AF", // Afghan Afghani
  ALL: "AL", // Albanian Lek
  AMD: "AM", // Armenian Dram
  ANG: "CW", // Netherlands Antillean Guilder (Curaçao & Sint Maarten)
  AOA: "AO", // Angolan Kwanza
  ARS: "AR", // Argentine Peso
  AUD: "AU", // Australian Dollar
  AWG: "AW", // Aruban Florin
  AZN: "AZ", // Azerbaijani Manat

  // B
  BAM: "BA", // Bosnia-Herzegovina Convertible Mark
  BBD: "BB", // Barbados Dollar
  BDT: "BD", // Bangladeshi Taka
  BGN: "BG", // Bulgarian Lev
  BHD: "BH", // Bahraini Dinar
  BIF: "BI", // Burundian Franc
  BMD: "BM", // Bermudian Dollar
  BND: "BN", // Brunei Dollar
  BOB: "BO", // Bolivian Boliviano
  BRL: "BR", // Brazilian Real
  BSD: "BS", // Bahamian Dollar
  BTN: "BT", // Bhutanese Ngultrum
  BWP: "BW", // Botswana Pula
  BYN: "BY", // Belarusian Ruble (replaced BYR in 2016)
  BZD: "BZ", // Belize Dollar

  // C
  CAD: "CA", // Canadian Dollar
  CDF: "CD", // Congolese Franc
  CHF: "CH", // Swiss Franc
  CLP: "CL", // Chilean Peso
  CNY: "CN", // Chinese Yuan
  COP: "CO", // Colombian Peso
  CRC: "CR", // Costa Rican Colón
  CUP: "CU", // Cuban Peso
  CVE: "CV", // Cape Verdean Escudo
  CZK: "CZ", // Czech Koruna

  // D
  DJF: "DJ", // Djiboutian Franc
  DKK: "DK", // Danish Krone
  DOP: "DO", // Dominican Peso
  DZD: "DZ", // Algerian Dinar

  // E
  EGP: "EG", // Egyptian Pound
  ERN: "ER", // Eritrean Nakfa
  ETB: "ET", // Ethiopian Birr
  EUR: "EU", // Euro (Eurozone)

  // F
  FJD: "FJ", // Fijian Dollar
  FKP: "FK", // Falkland Islands Pound

  // G
  GBP: "GB", // British Pound Sterling
  GEL: "GE", // Georgian Lari
  GHS: "GH", // Ghanaian Cedi
  GIP: "GI", // Gibraltar Pound
  GMD: "GM", // Gambian Dalasi
  GNF: "GN", // Guinean Franc
  GTQ: "GT", // Guatemalan Quetzal
  GYD: "GY", // Guyanese Dollar

  // H
  HKD: "HK", // Hong Kong Dollar
  HNL: "HN", // Honduran Lempira
  HTG: "HT", // Haitian Gourde
  HUF: "HU", // Hungarian Forint

  // I
  IDR: "ID", // Indonesian Rupiah
  ILS: "IL", // Israeli New Shekel
  INR: "IN", // Indian Rupee
  IQD: "IQ", // Iraqi Dinar
  IRR: "IR", // Iranian Rial
  ISK: "IS", // Icelandic Króna

  // J
  JMD: "JM", // Jamaican Dollar
  JOD: "JO", // Jordanian Dinar
  JPY: "JP", // Japanese Yen

  // K
  KES: "KE", // Kenyan Shilling
  KGS: "KG", // Kyrgyzstani Som
  KHR: "KH", // Cambodian Riel
  KMF: "KM", // Comorian Franc
  KPW: "KP", // North Korean Won
  KRW: "KR", // South Korean Won
  KWD: "KW", // Kuwaiti Dinar
  KYD: "KY", // Cayman Islands Dollar
  KZT: "KZ", // Kazakhstani Tenge

  // L
  LAK: "LA", // Lao Kip
  LBP: "LB", // Lebanese Pound
  LKR: "LK", // Sri Lankan Rupee
  LRD: "LR", // Liberian Dollar
  LSL: "LS", // Lesotho Loti
  LYD: "LY", // Libyan Dinar

  // M
  MAD: "MA", // Moroccan Dirham
  MDL: "MD", // Moldovan Leu
  MGA: "MG", // Malagasy Ariary
  MKD: "MK", // Macedonian Denar
  MMK: "MM", // Myanmar Kyat
  MNT: "MN", // Mongolian Tögrög
  MOP: "MO", // Macanese Pataca
  MRU: "MR", // Mauritanian Ouguiya (replaced MRO in 2018)
  MUR: "MU", // Mauritian Rupee
  MVR: "MV", // Maldivian Rufiyaa
  MWK: "MW", // Malawian Kwacha
  MXN: "MX", // Mexican Peso
  MYR: "MY", // Malaysian Ringgit
  MZN: "MZ", // Mozambican Metical

  // N
  NAD: "NA", // Namibian Dollar
  NGN: "NG", // Nigerian Naira
  NIO: "NI", // Nicaraguan Córdoba
  NOK: "NO", // Norwegian Krone
  NPR: "NP", // Nepalese Rupee
  NZD: "NZ", // New Zealand Dollar

  // O
  OMR: "OM", // Omani Rial

  // P
  PAB: "PA", // Panamanian Balboa
  PEN: "PE", // Peruvian Sol
  PGK: "PG", // Papua New Guinean Kina
  PHP: "PH", // Philippine Peso
  PKR: "PK", // Pakistani Rupee
  PLN: "PL", // Polish Złoty
  PYG: "PY", // Paraguayan Guaraní

  // Q
  QAR: "QA", // Qatari Riyal

  // R
  RON: "RO", // Romanian Leu
  RSD: "RS", // Serbian Dinar
  RUB: "RU", // Russian Ruble
  RWF: "RW", // Rwandan Franc

  // S
  SAR: "SA", // Saudi Riyal
  SBD: "SB", // Solomon Islands Dollar
  SCR: "SC", // Seychellois Rupee
  SDG: "SD", // Sudanese Pound
  SEK: "SE", // Swedish Krona
  SGD: "SG", // Singapore Dollar
  SLL: "SL", // Sierra Leonean Leone
  SOS: "SO", // Somali Shilling
  SRD: "SR", // Surinamese Dollar
  STN: "ST", // São Tomé & Príncipe Dobra (replaced STD in 2018)
  SVC: "SV", // Salvadoran Colón
  SYP: "SY", // Syrian Pound
  SZL: "SZ", // Swazi Lilangeni

  // T
  THB: "TH", // Thai Baht
  TJS: "TJ", // Tajikistani Somoni
  TMT: "TM", // Turkmenistani Manat
  TND: "TN", // Tunisian Dinar
  TOP: "TO", // Tongan Paʻanga
  TRY: "TR", // Turkish Lira
  TTD: "TT", // Trinidad & Tobago Dollar
  TWD: "TW", // New Taiwan Dollar
  TZS: "TZ", // Tanzanian Shilling

  // U
  UAH: "UA", // Ukrainian Hryvnia
  UGX: "UG", // Ugandan Shilling
  USD: "US", // US Dollar
  UYU: "UY", // Uruguayan Peso
  UZS: "UZ", // Uzbekistani Som

  // V
  VES: "VE", // Venezuelan Bolívar Soberano (replaced VEF in 2021)
  VND: "VN", // Vietnamese Đồng
  VUV: "VU", // Vanuatu Vatu

  // X
  XAF: "CM", // Central African CFA Franc (Cameroon as representative)
  XCD: "AG", // East Caribbean Dollar (Antigua & Barbuda as representative)
  XOF: "SN", // West African CFA Franc (Senegal as representative)
  XPF: "PF", // CFP Franc (French Polynesia as representative)

  // Y
  YER: "YE", // Yemeni Rial

  // Z
  ZAR: "ZA", // South African Rand
  ZMW: "ZM", // Zambian Kwacha (replaced ZMK in 2013)

};
