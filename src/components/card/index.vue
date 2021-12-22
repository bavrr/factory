<template>
  <div class="card">
    <div class="icon">
      <img src="@/assets/img/avatar.svg" />
    </div>
    <div class="information">
      <div class="header">
        <div class="title">
          {{ formatTitleText() }}
        </div>
        <div class="id">
          {{ formatId() }}
        </div>
      </div>
      <div class="sub-header">
        {{ formatSubHeaderText() }}
      </div>
      <div class="stats__list">
        <template
          v-for="(stat, index) in Object.values($options.STATS_LIST)"
          :key="index"
        >
          <div class="stat" :class="stat.id">
            {{ formatStatText(stat) }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
