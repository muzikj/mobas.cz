let cs_translations = {
    "title": "Welcome to this localization demo site",
    "description": "Software localization is the process of adapting software to the culture and language of an end user, from standards of measurement to video and graphic design. It involves not only translation but also design and UX changes to make software look and feel natural to the target user."
};


let translations = cs_translations;

const translatePage = () => {
    document.querySelectorAll('[localization-key]').forEach((element) => {
        let key = element.getAttribute('localization-key');
        let translation = translations[key];
        element.innerText = translation;
    });
};


translatePage();

// const fetchContent = () => {
//     return fetch('cs.json')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             translations = data;
//             translatePage();
//         });
// };

//fetchContent();



