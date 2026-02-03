const zorgbundels = [
  {
    nr: 1,
    naam: "Diabetes met verhoogd thuisrisico – Diabetes- & medicatie-opvolgbundel",
    medischLexicon: [
      "diabetes mellitus","DM2","insulinetherapie","orale antidiabetica",
      "hypoglycemie","hyperglycemie","verhoogd HbA1c","diabetische voet"
    ],
    patientLexicon: [
      "Ik heb suikerziekte","Mijn suiker schommelt","Ik ben bang voor een hypo",
      "Ik snap mijn insuline niet goed","Ik ben vaak moe en draaierig"
    ],
    klinisch: "Glycemies, hypo-/hypersymptomen, voetstatus, gewicht.",
    educatie: "Herkenning hypo/hyper, correcte meting, medicatieschema.",
    functioneel: "Glucosemeter, strips, weekdoos, voedingsondersteuning.",
    coordinatie: "Afstemming huisarts–diabetesverpleegkundige–diëtist–thuiszorg.",
    monitoring: "Herhaalde hypo’s of glycemie >20 mmol/L → huisarts; acuut → 112.",
    zorgverleners: "Huisarts, diabetesverpleegkundige, thuisverpleging, diëtist, apotheker.",
    bronnen: [
      { naam:"NHG-Standaard DM2", type:"richtlijn", jaar:2024 },
      { naam:"ADA Standards of Care", type:"richtlijn", jaar:2024 }
    ]
  },

  {
    nr: 2,
    naam: "Polyfarmacie & medicatieveiligheid – Medicatieveiligheidsbundel",
    medischLexicon: [
      "polyfarmacie","multimedicatie","STOPP/START","bijwerkingen",
      "medicatie-ontrouw","interacties"
    ],
    patientLexicon: [
      "Ik neem veel pillen","Ik weet niet waarvoor alles is",
      "Mijn medicatie is veranderd","Ik neem soms iets verkeerd"
    ],
    klinisch: "Bijwerkingen, therapietrouw, aantal medicaties.",
    educatie: "Uitleg schema, risico dubbelgebruik, teach-back.",
    functioneel: "Weekdoos, visueel schema, medicatierol.",
    coordinatie: "Medicatiereview huisarts–apotheker.",
    monitoring: "Ernstige bijwerkingen → huisarts; intoxicatie → 112.",
    zorgverleners: "Huisarts, apotheker, thuisverpleging.",
    bronnen: [
      { naam:"NHG Polyfarmacie", type:"richtlijn", jaar:2024 },
      { naam:"WHO Medication Without Harm", type:"framework", jaar:2022 }
    ]
  },

  {
    nr: 3,
    naam: "Cardiovasculair hoog risico – Cardiovasculaire preventiebundel",
    medischLexicon: [
      "hypertensie","hypercholesterolemie","CVRM","obesitas","roker"
    ],
    patientLexicon: [
      "Mijn bloeddruk is te hoog","Ik heb hoge cholesterol",
      "Ik beweeg weinig","Hartziekten zitten in de familie"
    ],
    klinisch: "Bloeddruk, lipiden, BMI, SCORE2.",
    educatie: "Uitleg risico, leefstijl, therapietrouw.",
    functioneel: "Beweegprogramma, rookstop, dieetadvies.",
    coordinatie: "POH-CVRM met huisarts, diëtist, kine.",
    monitoring: "Nieuwe angina/TIA → huisarts; acuut → 112.",
    zorgverleners: "Huisarts, POH, diëtist, kinesitherapeut.",
    bronnen: [
      { naam:"ESC CVD Prevention", type:"richtlijn", jaar:2024 }
    ]
  },

  {
    nr: 4,
    naam: "Cardio-vasculaire instabiliteit – Veiligheids- & monitoringbundel",
    medischLexicon: [
      "atriumfibrilleren","syncope","hartritmestoornis",
      "orthostatische hypotensie"
    ],
    patientLexicon: [
      "Ik word plots duizelig","Mijn hart slaat raar",
      "Ik ben al eens flauwgevallen"
    ],
    klinisch: "Pols, ritme, bloeddruk, valincidenten.",
    educatie: "Herkennen alarmsymptomen, veilig opstaan.",
    functioneel: "Mobiliteitshulpmiddelen, personenalarm.",
    coordinatie: "Huisarts–cardioloog–thuiszorg.",
    monitoring: "Syncope of collaps → huisarts; pijn op borst → 112.",
    zorgverleners: "Huisarts, cardioloog, thuisverpleging.",
    bronnen: [
      { naam:"ESC Syncope", type:"richtlijn", jaar:2022 }
    ]
  },

  {
    nr: 5,
    naam: "Chronische respiratoire kwetsbaarheid – COPD/Astma-bundel",
    medischLexicon: [
      "COPD","astma","exacerbatie","dyspnoe","zuurstoftherapie"
    ],
    patientLexicon: [
      "Ik ben snel buiten adem","Mijn puffer helpt niet",
      "Ik ben bang geen lucht te krijgen"
    ],
    klinisch: "Dyspnoe, saturatie, exacerbaties.",
    educatie: "Actieplan, inhalatietechniek, rookstop.",
    functioneel: "Beweegprogramma, hulpmiddelen.",
    coordinatie: "Huisarts–longverpleegkundige–longarts.",
    monitoring: "Ernstige dyspnoe/cyanose → 112.",
    zorgverleners: "Huisarts, longarts, kinesitherapeut.",
    bronnen: [
      { naam:"GOLD COPD", type:"richtlijn", jaar:2024 }
    ]
  },

  {
    nr: 6,
    naam: "Metabool-renale kwetsbaarheid – CNI & hartfalenbundel",
    medischLexicon: [
      "chronische nierinsufficiëntie","hartfalen",
      "oedeem","hyperkaliëmie"
    ],
    patientLexicon: [
      "Mijn benen staan dik","Ik hou vocht vast",
      "Mijn nieren werken niet goed"
    ],
    klinisch: "eGFR, gewicht, elektrolyten, dyspnoe.",
    educatie: "Vocht- en zoutbeperking, alarmsignalen.",
    functioneel: "Weegschaal, dieetondersteuning.",
    coordinatie: "Huisarts–nefroloog–cardioloog.",
    monitoring: "+2 kg/3 dagen of ernstige dyspnoe → huisarts/112.",
    zorgverleners: "Huisarts, nefroloog, cardioloog, diëtist.",
    bronnen: [
      { naam:"KDIGO CKD", type:"richtlijn", jaar:2024 },
      { naam:"ESC Heart Failure", type:"richtlijn", jaar:2023 }
    ]
  },

  {
    nr: 7,
    naam: "Functionele achteruitgang & valrisico – Ondersteuningsbundel",
    medischLexicon: [
      "valincident","frailty","sarcopenie","ADL-verlies"
    ],
    patientLexicon: [
      "Ik ben al gevallen","Ik durf niet meer buiten",
      "Ik heb schrik om te vallen"
    ],
    klinisch: "Mobiliteit, ADL/iADL, spierkracht.",
    educatie: "Valpreventie, veilig bewegen.",
    functioneel: "Woningaanpassingen, hulpmiddelen.",
    coordinatie: "Multidisciplinair plan.",
    monitoring: "Herhaald vallen → huisarts; letsel → 112.",
    zorgverleners: "Huisarts, kinesitherapeut, ergotherapeut.",
    bronnen: []
  },

  {
    nr: 8,
    naam: "Ondervoeding – Voeding & herstelbundel",
    medischLexicon: [
      "ondervoeding","gewichtsverlies","dysfagie","sarcopenie"
    ],
    patientLexicon: [
      "Ik heb geen eetlust","Ik vermager","Eten lukt niet goed"
    ],
    klinisch: "Gewicht, MUST/SNAQ65+.",
    educatie: "Eiwit- en energieverrijking.",
    functioneel: "Maaltijdservice, drinkvoeding.",
    coordinatie: "Diëtist als spil.",
    monitoring: ">5 kg verlies → huisarts.",
    zorgverleners: "Diëtist, huisarts, thuiszorg.",
    bronnen: []
  },

  {
    nr: 9,
    naam: "Cognitieve kwetsbaarheid – Cognitieve ondersteuningsbundel",
    medischLexicon: [
      "dementie","MCI","delier","geheugenstoornis"
    ],
    patientLexicon: [
      "Ik vergeet veel","Hij raakt snel in de war"
    ],
    klinisch: "Geheugen, oriëntatie, ADL.",
    educatie: "Structuur, veiligheid, uitleg mantelzorg.",
    functioneel: "Herinneringshulpmiddelen.",
    coordinatie: "Huisarts–casemanager.",
    monitoring: "Acuut delier → huisarts/spoed.",
    zorgverleners: "Huisarts, geriater, thuiszorg.",
    bronnen: []
  },

  {
    nr: 10,
    naam: "Psychosociaal lijden & eenzaamheid – Mentaal-welzijnsbundel",
    medischLexicon: [
      "depressie","angst","eenzaamheid","slaapproblemen"
    ],
    patientLexicon: [
      "Ik voel me alleen","Ik slaap slecht","Het is me te veel"
    ],
    klinisch: "Screening depressie/angst.",
    educatie: "Psycho-educatie.",
    functioneel: "Sociale toeleiding.",
    coordinatie: "Huisarts–POH-GGZ.",
    monitoring: "Suïcidaliteit → crisisdienst.",
    zorgverleners: "Huisarts, psycholoog, maatschappelijk werker.",
    bronnen: []
  },

  {
    nr: 11,
    naam: "Mantelzorger-overbelasting – Mantelzorgbundel",
    medischLexicon: [
      "mantelzorgbelasting","respijtzorg"
    ],
    patientLexicon: [
      "Het wordt mij te zwaar","Ik kan dit niet meer alleen"
    ],
    klinisch: "Draagkracht mantelzorger.",
    educatie: "Grenzen stellen, ondersteuning.",
    functioneel: "Respijtzorg.",
    coordinatie: "Mantelzorger expliciet in zorgplan.",
    monitoring: "Ernstige uitputting → huisarts.",
    zorgverleners: "Huisarts, mantelzorgsteunpunt.",
    bronnen: []
  },

  {
    nr: 12,
    naam: "Veiligheid & angst om alleen te zijn – Alarmbundel",
    medischLexicon: [
      "valangst","alleenwonend","personenalarm"
    ],
    patientLexicon: [
      "Ik ben bang dat ik val","Wat als ik alleen ben?"
    ],
    klinisch: "Valrisico, angstniveau.",
    educatie: "Gebruik alarm.",
    functioneel: "Alarm/valdetectie.",
    coordinatie: "Huisarts–alarmcentrale.",
    monitoring: "Herhaald alarmgebruik → evaluatie.",
    zorgverleners: "Thuiszorg, huisarts.",
    bronnen: []
  },

  {
    nr: 13,
    naam: "Palliatieve zorgnoden – Palliatieve thuiszorgbundel",
    medischLexicon: [
      "palliatief","terminaal","comfortzorg"
    ],
    patientLexicon: [
      "Ik wil comfort","Ik wil thuis blijven"
    ],
    klinisch: "Symptoomlast.",
    educatie: "Advance care planning.",
    functioneel: "Zorgbed, ADL-hulp.",
    coordinatie: "Palliatief team.",
    monitoring: "Onvoldoende comfort → palliatief team.",
    zorgverleners: "Huisarts, palliatief team.",
    bronnen: []
  },

  {
    nr: 14,
    naam: "Incontinentie & delirium-risico – Helderheidsbundel",
    medischLexicon: [
      "urine-incontinentie","delirium","nachtelijke onrust"
    ],
    patientLexicon: [
      "Ik geraak niet op tijd op het toilet"
    ],
    klinisch: "Mictiepatroon, verwardheid.",
    educatie: "Toiletgedrag, deliersignalen.",
    functioneel: "Incontinentiemateriaal.",
    coordinatie: "Huisarts–thuiszorg.",
    monitoring: "Acuut delier → spoed.",
    zorgverleners: "Huisarts, thuisverpleging.",
    bronnen: []
  },

  {
    nr: 15,
    naam: "Zintuiglijke beperkingen – Communicatie- & veiligheidsbundel",
    medischLexicon: [
      "slechtziend","slechthorend","maculadegeneratie"
    ],
    patientLexicon: [
      "Ik hoor niet goed","Ik zie niet goed"
    ],
    klinisch: "Functioneren met hulpmiddelen.",
    educatie: "Aangepaste communicatie.",
    functioneel: "Bril, hoortoestel.",
    coordinatie: "Huisarts–oogarts/audioloog.",
    monitoring: "Plots verlies → specialist.",
    zorgverleners: "Huisarts, oogarts, audioloog.",
    bronnen: []
  },

  {
    nr: 16,
    naam: "Verslaving & ontwrichtend gedrag – Veiligheidsbundel",
    medischLexicon: [
      "alcoholmisbruik","middelengebruik","agressie"
    ],
    patientLexicon: [
      "Hij drinkt te veel","Het escaleert thuis"
    ],
    klinisch: "Gebruikspatroon, veiligheid.",
    educatie: "Motiverende gespreksvoering.",
    functioneel: "Praktische steun gezin.",
    coordinatie: "Huisarts–CGG–maatschappelijk werk.",
    monitoring: "Agressie/intoxicatie → spoed.",
    zorgverleners: "Huisarts, CGG, maatschappelijk werker.",
    bronnen: []
  }
];
