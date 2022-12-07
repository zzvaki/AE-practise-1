<script setup lang="ts"></script>

<template>
  <h1>01 动画曲线</h1>

  <h3>css动画 animation ease-out</h3>
  <div class="animation-box">
    <div class="animation-block animation-1"></div>
  </div>

  <h3>css动画 animation cubic-bezier(0.3, 0, 0.4, 1)</h3>
  <div class="animation-box">
    <div class="animation-block animation-2"></div>
  </div>
</template>

<style lang="less" scoped>
.animation-box {
  width: 600px;
  // height: 200px;
  background-color: aliceblue;
  padding: 20px;
  .animation-block {
    width: 100px;
    height: 100px;
    background-color: green;
  }
}

.animation-1 {
  animation: 2s ease-out 0s infinite move_right;
}
.animation-2 {
  animation: 2s ease-out 0s infinite move_right;
  // animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
  animation-timing-function: cubic-bezier(0.3, 0, 0.4, 1);
}
@keyframes move_right {
  from {
    left: 0%;
  }
  to {
    margin-left: calc(100% - 100px);
  }
}
</style>
