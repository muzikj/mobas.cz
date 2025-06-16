let cs_translations = {
    "title": "MOBAS – Mobilní Asistenční Systémy",
    "logo1": "MOBILNÍ ASISTENČNÍ SYSTÉMY",
    "logo2": "Chytré služby pro Váš bezpečný život",
    "about1": "Kdo jsme",
    "about2": "Mobilní asistenční systémy s.r.o. (MOBAS) je společnost věnující se provozu asistenčních služeb, které potřebným pomáhají žít plnohodnotný život a překonávat nepředvídatelné, život ohrožující situace, ve kterých si nedokážou sami pomoci. Naším posláním je poskytovat lidem s potřebami nepřetržité asistence takové řešení, které je nebude nijak omezovat a zároveň sníží náklady na tuto asistenci. Pomáháme seniorům, zdravotně postižením i dlouhodobě nemocným.",
    "services1": "Naše produkty a služby",
    "services2": "Protectu je 24-hodinová služba vzdálené pomoci pro osoby, které se mohou ocitnout v život ohrožující situaci nebo v nouzovém stavu, kdy si nedokážou pomoci samy. Je vhodná pro seniory a pro osoby se zdravotními nebo pohybovými problémy. Prostřednictvím chytrého zařízení, které uživatel nosí u sebe, je v nepřetržitém kontaktu s týmem asistentů připraveným pomoci 24 hodin denně, 7 dní v týdnu.",
    "services3": "Více o Protectu",
    "services4": "Diani představuje platformu pro online telemonitoraci pacientů. Jde tedy o zajištění sběru, interpretace a sdílení pacientských dat, momentálně s využitím mobilní aplikace diabetického deníku, chytrých hodinek, glukometru, kontinuálního monitoru glykémie a krokoměru.\n\nAktuálně zajišťujeme provoz tří modulů, a to Diani Diabetes pro paceinty s diabetem, Diani BP pro pacienty s vysokým krevním tlakem a Diani PA (SOMA) pro monitoring fyzické aktivity.",
    "services5": "Více o Diani",
    "partners1": "Naši partneři",
    "partners2": "Výzkum, vývoj a provoz našich produktů a služeb zajišťujeme ve spolupráci s prestižními univerzitními a vědeckými pracovišti, jakož i s významnými hráči v oblasti zdravotní asistence z České republiky i zahraničí.",
    "team1": "Lidé ve společnosti",
    "team2": "Ředitel společnosti",
    "team3": "Zákaznický servis",
    "team4": "Projektový manažer",
    "contact1": "Kontakt",
    "footer1": "© MOBILNÍ ASISTENČNÍ SYSTÉMY, S.R.O., 2018-2025"
}

let en_translations = {
    "title": "MOBAS – Mobile Assistance Systems",
    "logo1": "Mobile Assistance Systems",
    "logo2": "Smart solutions for your safe life",
    "about1": "About us",
    "about2": "Mobilní asistenční systémy (MOBAS Ltd.) is a company dedicated to the operation of assistance services that help the needy to live a full life and overcome unpredictable, life-threatening situations in which they cannot help themselves. Our mission is to provide people with continuous assistance needs with a solution that will not limit them in any way and at the same time reduce the cost of such assistance. We help seniors, the disabled and the long-term sick.",
    "services1": "Our products and services",
    "services2": "Protectu is a 24-hour remote assistance service for people who may find themselves in a life-threatening situation or in an emergency when they cannot help themselves. It is suitable for seniors and for people with health or movement problems. Through a smart device that the user carries, he is in constant contact with a team of assistants ready to help 24 hours a day, 7 days a week.",
    "services3": "Read more",
    "services4": "Diani is a platform for online patient telemonitoring. It is therefore a matter of collecting, interpreting and sharing patient data, currently using a mobile application of a diabetic diary, a smart watch, a glucometer, a continuous blood glucose monitor and a pedometer. We currently operate three modules, Diani Diabetes for patients with diabetes, Diani BP for patients with high blood pressure and Diani PA (SOMA) for monitoring physical activity.",
    "services5": "Read more",
    "partners1": "Our partners",
    "partners2": "We provide research, development and operation of our products and services in cooperation with prestigious university and research institutes, as well as with major players in the field of health care from the Czech Republic and abroad.",
    "team1": "Team",
    "team2": "CEO",
    "team3": "Customer Service",
    "team4": "Project Manager",
    "contact1": "Contact us",
    "footer1": "© Mobile Assistance Systems, S.R.O., 2018-2025"
}

const translatePage = (translations) => {
    document.querySelectorAll('[localization-key]').forEach((element) => {
        let key = element.getAttribute('localization-key');
        let translation = translations[key];
        element.innerText = translation;
    });
};

translateToCs = () => {
    translatePage(cs_translations);
}

translateToEn = () => {
    translatePage(en_translations);
}

var language = window.navigator.userLanguage || window.navigator.language;
if (language == 'cs') {
    translateToCs();
} else {
    translateToEn();
}



