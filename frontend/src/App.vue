<template>
    <div class="app-container">
      <RouterView />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  .app-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>