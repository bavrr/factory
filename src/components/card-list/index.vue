<template>
  <div class="card__wrapper">
    <div class="card__list">
      <template v-for="(cyborg, index) in cyborgList" :key="index">
        <Card class="cyborg" :card="cyborg" />
      </template>
    </div>
    <div class="button__wrapper">
      <ui-button @click="modalIsOpen = true">Добавить клона</ui-button>
    </div>
  </div>

  <teleport to="#app">
    <ModalWindow
      v-if="modalIsOpen"
      @close="modalIsOpen = false"
      @createCyborg="createCyborg"
    />
  </teleport>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
