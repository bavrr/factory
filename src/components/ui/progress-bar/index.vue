<template>
  <div class="progress__bar">
    <progress class="bar" max="100" :value="currentProgress" />
    <div class="value">{{ progressValue }}</div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
