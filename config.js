// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAMHAKVot044psR421B_t-Ht5EmsueVS8A",
    authDomain: "game-dev-space.firebaseapp.com",
    projectId: "game-dev-space",
    storageBucket: "game-dev-space.firebasestorage.app",
    messagingSenderId: "1073185335190",
    appId: "1:1073185335190:web:ae9ffd88cdf89f53cbdfb7"
};

// Inicialização Única
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Sistema de Sessão Segura
const AuthSystem = {
    saveSession(userData) {
        localStorage.setItem('gh_sess', JSON.stringify(userData));
    },
    getSession() {
        const data = localStorage.getItem('gh_sess');
        return data ? JSON.parse(data) : null;
    },
    logout() {
        localStorage.removeItem('gh_sess');
        window.location.reload();
    }
};
