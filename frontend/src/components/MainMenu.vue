<template>
  <div class="main-menu">
    <div class="header">
      <h1 class="title">OneSoup 一碗汤</h1>
      <img 
        :src="isMuted ? icons.mute : icons.sound" 
        alt="Sound Control" 
        class="sound-icon" 
        @click="toggleSound" 
      />
    </div>
    <div class="divider"></div> <!-- 添加分隔线 -->
    <div class="soup-list">
      <div v-for="soup in soups" :key="soup.id" class="soup-item">
        <router-link :to="`/soup/${soup.id}`">{{ soup.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import muteIcon from '@/assets/mute-icon.jpg';
import soundIcon from '@/assets/sound-icon.jpg';

export default {
  name: 'MainMenu',
  data() {
    return {
      soups: [],
      isMuted: false, // 控制声音开关的状态
      icons: {
        mute: muteIcon,
        sound: soundIcon
      }
    };
  },
  methods: {
    async fetchSoups() {
      try {
        const response = await fetch('http://localhost:5000/api/soups');
        this.soups = await response.json();
      } catch (error) {
        console.error('Error fetching soups:', error);
      }
    },
    toggleSound() {
      this.isMuted = !this.isMuted;
      if (this.isMuted) {
        console.log('声音已关闭');
        // 在这里添加关闭声音的逻辑
      } else {
        console.log('声音已开启');
        // 在这里添加开启声音的逻辑
      }
    }
  },
  mounted() {
    this.fetchSoups();
  }
};
</script>

<style scoped>
.main-menu {
  text-align: center;
}
.header {
  position: fixed; /* 固定在浏览器窗口顶部 */
  top: 0; /* 距离顶部为 0 */
  left: 0; /* 距离左侧为 0 */
  right: 0; /* 距离右侧为 0 */
  display: flex;
  justify-content: space-between; /* 左右对齐 */
  align-items: center;
  padding: 25px 80px; /* 添加上下和左右内边距 */
  background-color: white; /* 背景色，避免内容被遮挡 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  z-index: 1000; /* 确保在其他内容之上 */
}
.title {
  font-size: 2rem; /* 调大字体 */
  font-weight: 300; /* 设置字体变细 */
  margin: 0; /* 去掉默认的外边距 */
}
.sound-icon {
  width: 30px; /* 设置喇叭图标大小 */
  height: 30px;
  cursor: pointer; /* 鼠标悬停时显示手型 */
}
.divider {
  height: 1px; /* 设置线的高度 */
  background-color: rgba(0, 0, 0, 0.2); /* 黑色，透明度为 20% */
  margin: 20px 0; /* 上下间距 */
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