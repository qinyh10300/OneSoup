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
    
    <!-- 介绍文本部分 -->
    <div class="intro-box">
      <p>
        你知道海龟汤吗？它又被称为水平思考。题目首先给出故事结局，也就是「汤面」，
        你必须使用跳跃性、超凡的创造力提出猜想，让这个故事自圆其说，找到「汤底」。
      </p>
      <p>
        海龟汤没有标准答案，你可以不断提问来验证你的猜测，但AI只会回答是/不是/不相关，
        你有8次提问机会，耗尽后会公布答案。祝你好运！
      </p>
      <p class="warning">⚠️注意：部分故事包含恐怖/血腥元素，胆小慎入。</p>
    </div>
    
    <!-- 两列布局的汤题列表 -->
    <div class="soup-grid">
      <div v-for="soup in soups" :key="soup.id" class="soup-card">
        <router-link :to="`/soup/${soup.id}`" class="soup-link">
          <h3 class="soup-title">{{ soup.title }}</h3>
          <p class="soup-description">{{ truncateText(soup.description, 40) }}</p>
        </router-link>
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
    },
    // 截断文本，添加省略号
    truncateText(text, maxLength) {
      if (!text) return '';
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
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
  padding: 0 20px;
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

/* 介绍文本样式 */
.intro-box {
  max-width: 800px;
  margin: 120px auto 40px;
  padding: 20px;
  background-color: rgba(248, 249, 250, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
  text-align: center;
}

.warning {
  color: #dc3545;
  font-weight: bold;
}

/* 两列布局的汤题列表 */
.soup-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 0 auto;
  max-width: 1000px;
}

.soup-card {
  background-color: rgba(240, 240, 240, 0.7);
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}

.soup-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.soup-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.soup-title {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
}

.soup-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .soup-grid {
    grid-template-columns: 1fr;
  }
  
  .header {
    padding: 15px 20px;
  }
  
  .intro-box {
    margin-top: 100px;
  }
}
</style>