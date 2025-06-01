import { createApp } from 'vue'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Catalogue from './components/Catalogue.vue'

const app = createApp({})

// Enregistre les composants globalement
app.component('Navbar', Navbar)
app.component('HeaderVue', Header)
app.component('FooterVue', Footer)
app.component('Catalogue', Catalogue)

app.mount('#app')
