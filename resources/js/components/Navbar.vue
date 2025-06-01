<template>
  <nav class="flex justify-between items-center p-4 bg-white shadow-md">
    <div class="text-2xl font-bold text-gray-800">
      Boutique T-Shirt 👕
    </div>
    <ul class="flex gap-6 text-gray-700 font-medium">
      <li><a href="#" class="hover:text-blue-600">Accueil</a></li>
      <li><a href="#" class="hover:text-blue-600">Catalogue</a></li>
      <li><a href="#" class="hover:text-blue-600">Panier</a></li>
      <li><a href="#" class="hover:text-blue-600">Contact</a></li>
      <li><a href="#" class="hover:text-blue-600">Connexion</a></li>
      <li><a href="#" class="hover:text-blue-600">Inscription</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  background-color: #f9f9f9;
}
</style>