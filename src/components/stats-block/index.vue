<template>
  <div class="stats__menu">
    <div class="menu__block">
      <div class="title">Статистика производства</div>
      <div class="stats__list">
        <template v-for="(stat, index) in $options.AVERAGE_STATS" :key="index">
          <div class="stat__wrapper">
            <div class="stat">{{ stat.title }}</div>
            <div class="value">{{ this[stat.id] }}</div>
          </div>
        </template>
      </div>
    </div>
    <div class="menu__block">
      <div class="text">
        {{ $options.TEXT }}
      </div>
    </div>
    <div class="menu__block">
      <div class="title">Прогресс производства</div>
      <div class="progress__list">
        <template
          v-for="(progress, index) in $options.PROGRESS_LIST"
          :key="index"
        >
          <div class="progress__wrapper">
            <div class="label">
              {{ progress.title }}
            </div>
            <ui-progress :current-progress="this[progress.id]" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
