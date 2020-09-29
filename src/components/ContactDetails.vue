<template>
  <div>

    <div class="contact_details contact_details__backdrop">
      <header class="contact_details__header">
        <h3 class="contact_details__header_title">{{contact.name}}</h3>
        <button
          class="contact_details__header_button"
          @click="$emit('hide-contact-details')"
        >
          &#10005;
        </button>
      </header>

      <section class="contact_details__content">

        <span
          class="contact_details__no_info"
          v-if="Object.keys(contact).length <= 2"
        >
          No info
        </span>
        <ul
          v-else
          class="contact_details__list"
        >
          <li
            v-for="(value, title, index) in contact"
            v-show="title !== 'id' && title !== 'name'"
            :key="index"
            class="contact_details__item"
          >
            <span class="contact_details__item_title">
              {{title[0].toUpperCase() + title.slice(1) + ':'}}
            </span>
            <span>
              {{ value }}
            </span>
            <button
              class="contact_details__button"
              @click="setDeleteConfirmatioVisibility(); setKeyToDelete(title)"
            >
              &#10005;
            </button>

          </li>
        </ul>
      </section>

      <form
        class="contact_details__edit"
        action="GET"
        @submit.prevent="addNewKey"
        v-show="addFormVisibility"
      >
        <input
          type="text"
          class="contact_details__input"
          placeholder="Info title"
          v-model="keyToAdd.title"
          maxlength="10"
          required
        >
        <input
          type="text"
          class="contact_details__input"
          placeholder="Info"
          v-model="keyToAdd.value"
          maxlength="18"
          required
        >
        <button
          class="contact_details__button"
        >
          &#10003;
        </button>
      </form>

      <footer class="contact_details__footer">
        <button
          class="contact_details__footer_button"
          @click="setAddFormVisibility"
        >
          {{!addFormVisibility ? 'Add' : 'Cancel'}}
        </button>
        <button
          class="contact_details__footer_button"
          @click="setEditFormVisibility"
        >
          Edit
        </button>
        <button class="contact_details__footer_button">
          Undo changes
        </button>
      </footer>
    </div>

    <ContactDetailsEdit
      v-if="editFormVisibility"
      :contact="contact"
      @cancel-edit="cancelEdit"
    />

    <DeleteConfirmation
      v-if="deleteConfirmatioVisibility"
      @delete-cancel="setDeleteConfirmatioVisibility"
      @delete-ok="deleteContactKey"
      :name="contact.name"
      :item="keyToDelete"
    />

  </div>
</template>

<script>
import DeleteConfirmation from './DeleteConfirmation';
import ContactDetailsEdit from './ContactDetailsEdit'

export default {
  props: {
    contact: Object,
  },

  components: {
    DeleteConfirmation,
    ContactDetailsEdit
  },

  data() {
    return {
      deleteConfirmatioVisibility: false,
      keyToDelete: '',
      addFormVisibility: false,
      editFormVisibility: false,
      keyToAdd: {
        title: '',
        value: '',
      },
      //newValue: ''
    }
  },

  methods: {
    setDeleteConfirmatioVisibility() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
    },

    setKeyToDelete(title) {
      this.keyToDelete = title;
    },

    deleteContactKey() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      delete (this.contact[this.keyToDelete])
    },

    setAddFormVisibility() {
      this.addFormVisibility = !this.addFormVisibility;
    },

    addNewKey() {
      this.contact[this.keyToAdd.title] = this.keyToAdd.value;
      this.addFormVisibility = !this.addFormVisibility;
      this.keyToAdd = {
        title: '',
        value: '',
      }
    },

    setEditFormVisibility() {
      this.editFormVisibility = !this.editFormVisibility;
    },
/*
    editContact(value) {
      console.log(value)
      console.log(234)
    }
*/
    cancelEdit() {
      this.editFormVisibility = !this.editFormVisibility;
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact_details {
    width: 380px;
    background-color: #adabac;

    position: fixed;
    top: 200px;

    margin: 10px;
    padding: 20px;


    border-radius: 15px;
    font-size: 26px;
    color: whitesmoke;

    &__header {
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
      background-color: #4e4e4e;
    }

    &__header_title {
      font-size: 32px;
      position: relative;

      &::after {
        position: absolute;
        left: 0;
        display: block;

        width: 75%;
        content: '';
        border-bottom: 3px solid whitesmoke;
      }
    }

    &__header_button {
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

    &__content {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
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

    &__item_title {
      color: #4e4e4e;
      margin-right: 20px;
    }

    &__button {
      height: 30px;
      width: 30px;

      border-radius: 50%;
      font-size: 14px;
      outline: none;
      border: none;

      color: inherit;
      background-color: #4e4e4e;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #666666;
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &__no_info {
      color: #4e4e4e;
      margin-bottom: 20px;
    }

    &__edit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }

    &__input {
      margin-right: 10px;
      padding: 5px;
      width: 140px;
      height: 20px;
      border-radius: 5px;

      background-color: rgb(182, 182, 182);
      color: #4e4e4e;
    
      cursor: pointer;
      border: 2px solid whitesmoke;
    
      font-family: inherit;
      font-size: 18px;

      &--edit {
        width: 200px;
        height: 15px;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__footer_button {
      height: 40px;
      width: 120px;
      margin-top: 20px;

      border-radius: 20px;
      font-size: 14px;
      outline: none;
      border: none;

      color: inherit;
      background-color: #4e4e4e;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #666666;
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &__backdrop {
      box-shadow: 0 0 0 100vw rgba(0,0,0,0.8);
    }
  }

</style>
