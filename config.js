const firebaseConfig = {
    apiKey: "AIzaSyAMHAKVot044psR421B_t-Ht5EmsueVS8A",
    authDomain: "game-dev-space.firebaseapp.com",
    databaseURL: "https://game-dev-space-default-rtdb.firebaseio.com",
    projectId: "game-dev-space",
    storageBucket: "game-dev-space.firebasestorage.app",
    messagingSenderId: "1073185335190",
    appId: "1:1073185335190:web:ae9ffd88cdf89f53cbdfb7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// "IA" de checagem de Malware (Filtro Heurístico)
async function scanFileSecurity(fileContent) {
    const dangerousPatterns = [
        /document\.cookie/gi, 
        /localStorage\.clear/gi, 
        /sessionStorage/gi,
        /parent\.location/gi, 
        /top\.location/gi,
        /<script.*src.*http/gi,
        /eval\(/gi,
        /window\.open/gi
    ];
    
    for (let pattern of dangerousPatterns) {
        if (pattern.test(fileContent)) return false;
    }
    return true;
}
