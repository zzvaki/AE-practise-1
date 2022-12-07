<script lang="ts">
export default {
  name: '首页',
};
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const $VideoSlow = ref<HTMLVideoElement | null>(null);
onMounted(() => {
  console.log('$VideoSlow', $VideoSlow.value);
  $VideoSlow.value && ($VideoSlow.value.playbackRate = 0.25);
});
</script>

<template>
  <h1>iOS日历动效实现步骤</h1>

  <h3>todo list</h3>
  <ul>
    <li>动画曲线</li>
    <li>页面布局</li>
    <li>交互实现</li>
  </ul>

  <h3>原动画</h3>
  <video
    class="video"
    src="https://gztr-qnzj.oss-cn-hangzhou.aliyuncs.com/test/RPReplay_Final1670318949.mov"
    autoplay
    muted
    loop
    play
  ></video>

  <h3>原动画 0.25倍速</h3>
  <video
    ref="$VideoSlow"
    class="video"
    src="https://gztr-qnzj.oss-cn-hangzhou.aliyuncs.com/test/RPReplay_Final1670318949.mov"
    autoplay
    muted
    loop
    play
  ></video>
</template>

<style lang="less" scoped>
.video {
  width: 360px;
}
</style>
