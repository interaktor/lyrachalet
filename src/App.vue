<template>
  <!-- 外层：flex居中容器，不设置背景 -->
    <div class="home">
      <!-- 新增 card 包裹所有内容！背景色加在这里 -->
      <div class="card">
        <ul class="list">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Book</a></li>
          <li><a href="#">Dev</a></li>
          <li><a href="#">Photo</a></li>
          <li><a href="#">Philosophy</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <article>
          <section>Welcome to my space. A quiet corner for vintage tech, eclectic playlists, philosophy, books, and
            everyday moments. Constantly fascinated by the internet — my digital home away from home.</section>
        </article>
        <aside></aside>
      </div>
    </div>
  <Blog />
</template>

<script setup lang="ts">
import Blog from './views/Blog.vue'
document.addEventListener('contextmenu', e => e.preventDefault());
</script>

<style >
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 15px;
  color: #999;
  /* box-sizing: border-box; */
  font-family: 'Courier New', 'Times New Roman', Georgia, serif;
}
body {
  background:#FBF8F1;
}
a {
  text-decoration: none;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  height: 80vh;
}

/* 给card加背景，padding让内容不要贴边 */
.card {
  display: flex;
  width: 600px;
  height: 400px;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 5px #ccc;
    background: #F3EFE0;
}

.list {
  /* 删掉你之前的margin-left:-130px，这个会破坏居中！ */
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100px;
  gap: 20px;
  border-right: 1px solid #E0DDAA;
  background: #F3EFE0;
}

article {
  display: flex;
  flex: 1;
  padding: 10px;
  background: #F3EFE0;
}

aside {
  display: flex;
  flex-shrink: 0;
  width: 100px;
  background: #F3EFE0;
}
</style>
