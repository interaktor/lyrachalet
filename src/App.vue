<template>
  <!-- 外层：flex居中容器，不设置背景 -->
  <div class="home">
    <!-- 新增 card 包裹所有内容！背景色加在这里 -->
    <div class="card">
      <ul class="list">
        <li><a href="#">Music</a></li>
        <li><a href="#">Book</a></li>
        <li><a href="#">Dev</a></li>
        <li><a href="#">Picture</a></li>
        <li><a href="#">Philosophy</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <article></article>
      <aside></aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
document.addEventListener('contextmenu', e => e.preventDefault());

//Data
let name = ref('Lyra ')
let sign = ref('Think Different.')

//Methods
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

a {
  color: #999;
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
  background: #ffffff66;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 0 5px #ccc;
}

.list {
  /* 删掉你之前的margin-left:-130px，这个会破坏居中！ */
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100px;
  gap: 20px;

}

article {
  display: flex;
  flex: 1;
}

aside {
  display: flex;
  flex-shrink: 0;
  width: 100px;
}
</style>
