<template>
  <div class="edit_contact">
    <header class="edit_contact__header">
      <h3 :key="forceRenderKey">Edit contact info</h3>
        <button
          class="edit_contact__button"
          @click="$emit('cancel-edit')"
        >
          &#10005;
        </button>
    </header>

    <form
      @submit.prevent="$emit('submit-editting', newContact);"
      v-for="(key, title, index) in contact"
      v-show="title !== 'id' && title !== 'name'"
      :key="index"
      class="edit_contact__list"
      id="submitKeys"
    >
      <input
        class="edit_contact__input"
        type="text"
        maxlength="15"
        :value="title"
        :name="title"
        @input="e => title = e.target.value"
        @change="e => editTitle(key, title, e.target.name)"
      >
      <input
        class="edit_contact__input"
        type="text"
        maxlength="25"
        :value="key"
        @input="e => key = e.target.value"
        @change="editValue(key, title)"
      >
    </form>

    <button
      class="edit_contact__submit_button"
      form="submitKeys"
    >
      Submit
    </button>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    contact: Object,
  },

  data() {
    return {
      forceRenderKey: null,
      titleToDel: '',
      newContact: {...this.contact},
    }
  },

  methods: {
    ...mapMutations([
      'ADD_CONTACT_TO_STATE',
      'DELETE_CONTACT_FROM_STATE'
    ]),

    editValue(key, title) {
      this.newContact[title] = key;
    },

    editTitle(key, title, name) {
      this.newContact[title] = key;
      delete this.newContact[name]
    },
/*
    editValue(key, title) {
      this.newContact[title] = key;
    },

    editTitle(key, title, name) {
      this.newContact[title] = key;
      delete this.contact[name];
      this.toDelete = name;
    },*/
/*
    editConfirm() {
      //this.contact = {...this.newContact};

      this.DELETE_CONTACT_FROM_STATE(this.newContact.id);
      this.ADD_CONTACT_TO_STATE(this.newContact);
      this.forceRender();
    },*/

    setTitle(title) {
      if(!title) {

        return;
      }

      this.titleToDel = title.trim();
      delete this.contact[title]
    }
  }
}
</script>

<style lang="scss" scoped>
  .edit_contact {
    width: 380px;
    height: 100%;
    background-color: #4e4e4e;

    position: absolute;
    top: 0;
    left: 0;
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
      margin: 20px 0;
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
      position: absolute;
      bottom: 30px;
      left: calc(50% - 120px / 2);
      height: 40px;
      width: 120px;

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
