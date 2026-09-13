<template>
  <!-- 外层：flex居中容器，不设置背景 -->
  <div class="home">
    <!-- 新增 card 包裹所有内容！背景色加在这里 -->
    <div class="card">
      <div class="name">
        <span @click="changeName">{{ name }}</span>
        <strong>{{ sign }}</strong>
      </div>
      <ul class="list">
        <li><a href="#">Music</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Dev</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
let name = ref('Lyra ')
let sign = ref('Think Different.')
function changeName() {
  if (name.value === 'Lyra ') {

    name.value = 'Mopodo '

  } else {

    name.value = 'Lyra '

  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 20px;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  /* 这里删掉背景！不要在这里加背景 */
}

/* 给card加背景，padding让内容不要贴边 */
.card {
  background: #ffffff66;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 0 5px #ccc;
}

.name {
  margin-bottom: 10px;
}

.list {
  /* 删掉你之前的margin-left:-130px，这个会破坏居中！ */
  display: flex;
  gap: 20px;
}

a {
  color: #999;
  text-decoration: none;
}
</style>
