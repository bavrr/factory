<template>
  <div class="modal__background" @click="$emit('close')">
    <div class="modal__wrapper" @click.stop>
      <div class="modal__header">
        <div class="title">Создать клона</div>
      </div>
      <div class="modal__body">
        <div class="item">
          <div class="label">Фамилия</div>
          <input ref="lastNameInput" class="input" v-model="cyborg.lastName" />
        </div>
        <div class="item">
          <div class="label">Имя</div>
          <input class="input" v-model="cyborg.firstName" />
        </div>
        <div class="item">
          <div class="label">Отчество</div>
          <input class="input" v-model="cyborg.middleName" />
        </div>
        <div class="item">
          <div class="label">Тип клона</div>
          <select class="select" v-model="cyborg.cyborgType">
            <option
              v-for="(option, index) in $options.CYBORG_GENERATION"
              :key="index"
              :value="option.id"
            >
              {{ option.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="modal__footer">
        <ui-button @click="createCyborg()">Создать</ui-button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
