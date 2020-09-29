<template>
  <div class="edit_contact">
    <header class="edit_contact__header">
      <h3>Edit contact info</h3>
        <button
          class="edit_contact__button"
          @click="$emit('cancel-edit')"
        >
          &#10005;
        </button>
    </header>

    <ul
      class="edit_contact__list"
    >
      <li
        v-for="(value, title, index) in contact"
        v-show="title !== 'id'"
        :key="index"
        class="edit_contact__item"
      >
        <input
          class="edit_contact__input"
          type="text"
          :value=title
        >
        <input
          class="edit_contact__input"
          type="text"
          :value=value
        >


      </li>
    </ul>
    <button
      class="edit_contact__submit_button"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object,
  }
}
</script>

<style lang="scss" scoped>
  .edit_contact {
    width: 380px;
    background-color: #4e4e4e;

    position: fixed;
    top: 200px;



    margin: 10px;
    padding: 20px;


    border-radius: 15px;
    font-size: 26px;
    color: whitesmoke;

    &__header {
      background-color: #adabac;
      position: relative;
      top: -20px;
      left: -20px;
      padding: 20px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      height: 60px;
      width: 380px;

      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      color: #4e4e4e;
    }

    &__list {
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;



      //mixin here

      &:last-child {
        margin-bottom: 30px;
      }
    }

    &__input {
      margin-right: 10px;
      padding: 5px;
      width: 160px;
      height: 15px;
      border-radius: 5px;

      background-color: rgb(182, 182, 182);
      color: #4e4e4e;
    
      cursor: pointer;
      border: 2px solid whitesmoke;
    
      font-family: inherit;
      font-size: 18px;
    }

    &__button {
      padding: 0;
      font-size: 24px;
      outline: none;
      border: none;

      background-color: inherit;
      color: inherit;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        color: #c0c0c0;
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &__submit_button {
      height: 40px;
      width: 120px;
      margin-top: 20px;

      border-radius: 20px;
      font-size: 14px;
      outline: none;
      border: none;

      color: inherit;
      background-color: #adabac;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #c0c0c0;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
</style>
