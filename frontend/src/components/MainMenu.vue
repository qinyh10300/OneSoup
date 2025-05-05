<template>
    <div class="main-menu">
      <h1>海龟汤游戏</h1>
      <div class="soup-list">
        <div v-for="soup in soups" :key="soup.id" class="soup-item">
          <router-link :to="`/soup/${soup.id}`">{{ soup.title }}</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainMenu',
    data() {
      return {
        soups: []
      }
    },
    methods: {
      async fetchSoups() {
        try {
          const response = await fetch('http://localhost:5000/api/soups');
          this.soups = await response.json();
        } catch (error) {
          console.error('Error fetching soups:', error);
        }
      }
    },
    mounted() {
      this.fetchSoups();
    }
  }
  </script>
  
  <style scoped>
  .main-menu {
    text-align: center;
  }
  .soup-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .soup-item {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f9f9f9;
  }
  .soup-item a {
    text-decoration: none;
    color: #007bff;
  }
  .soup-item a:hover {
    text-decoration: underline;
  }
  </style>