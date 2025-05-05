<template>
    <div class="soup-container">
      <h2>{{ soup.title }}</h2>
      <p>{{ soup.soup_q }}</p>
      <img :src="soup.image" :alt="soup.title" class="soup-image">
      <audio ref="audioPlayer" :src="soup.audio" autoplay loop></audio>
      <button @click="toggleAudio" class="audio-button">
        {{ isAudioPlaying ? '暂停音频' : '播放音频' }}
      </button>
      <button @click="showAnswer = true">投降</button>
      <div v-if="showAnswer">
        <h2>汤底</h2>
        <p>{{ soup.soup_a }}</p>
      </div>
      <div class="chat-container">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
          {{ message.text }}
        </div>
      </div>
      <div class="input-area">
        <input v-model="question" placeholder="Ask a question..." @keyup.enter="ask">
        <button @click="ask">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SoupPage',
    data() {
      return {
        soup: {},
        question: '',
        messages: [],
        showAnswer: false,
        isAudioPlaying: true
      }
    },
    methods: {
      async fetchSoup() {
        try {
          const response = await fetch(`http://localhost:5000/api/soup/${this.$route.params.id}`);
          this.soup = await response.json();
        } catch (error) {
          console.error('Error fetching soup:', error);
        }
      },
      async ask() {
        if (!this.question.trim()) return;
        this.messages.push({ text: this.question, type: 'user' });
        try {
          const response = await fetch(`http://localhost:5000/api/ask/${this.$route.params.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: this.question })
          });
          const data = await response.text();
          this.messages.push({ text: data, type: 'ai' });
          this.question = '';
        } catch (error) {
          this.messages.push({ text: 'Error: Could not get response', type: 'ai' });
          this.question = '';
        }
      },
      toggleAudio() {
        const audio = this.$refs.audioPlayer;
        if (this.isAudioPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.isAudioPlaying = !this.isAudioPlaying;
      }
    },
    mounted() {
      this.fetchSoup();
    }
  }
  </script>
  
  <style scoped>
  .soup-container {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f9f9f9;
  }
  .soup-image {
    max-width: 40%;
    height: auto;
    margin: 10px auto;
    display: block;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .audio-button {
    margin-top: 10px;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .audio-button:hover {
    background: #0056b3;
  }
  audio {
    display: none;
  }
  .chat-container {
    border: 1px solid #ccc;
    padding: 10px;
    height: 400px;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  .message {
    margin: 5px;
    padding: 8px;
    border-radius: 5px;
  }
  .user {
    background: #e6f3ff;
    text-align: right;
  }
  .ai {
    background: #f0f0f0;
    text-align: left;
  }
  .input-area {
    display: flex;
    gap: 10px;
  }
  input {
    flex: 1;
    padding: 8px;
  }
  button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: #0056b3;
  }
  </style>