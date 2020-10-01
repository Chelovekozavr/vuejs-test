<template>
    <div class="contact_details contact_details__backdrop">
      <header class="contact_details__header">
        <h3 class="contact_details__header_title">{{ contact.name }}</h3>
        <router-link
          to="/home"
          tag="button"
          class="contact_details__header_button"
        >
          &#10005;
        </router-link>
      </header>

      <section class="contact_details__content">

        <span
          v-if="Object.keys(this.contact).length < 3"
          class="contact_details__no_info"
        >
          No info
        </span>

        <ul
          v-else
          class="contact_details__list"
          :key="forceRenderKey"
        >
          <li
            v-for="(value, title, index) in contact"
            v-show="title !== 'id' && title !== 'name'"
            :key="index"
            class="contact_details__item"
          >
            <span class="contact_details__item_title">
              {{ title[0].toUpperCase() + title.slice(1) + ':' }}
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
          {{ !addFormVisibility ? 'Add' : 'Cancel' }}
        </button>
        <button
          class="contact_details__footer_button"
          @click="setEditFormVisibility"
        >
          Edit
        </button>
        <button
          class="contact_details__footer_button"
        >
          Undo changes
        </button>
      </footer>

    <ContactDetailsEdit
      v-if="editFormVisibility && (Object.keys(this.contact).length > 2)"
      :contact="contact"
      @cancel-edit="cancelEdit"
      @submit-editting="submitEditing"
    />

    <DeleteConfirmation
      v-if="deleteConfirmatioVisibility"
      @delete-cancel="setDeleteConfirmatioVisibility"
      @delete-ok="deleteContactKey"
      @cancel-edit="editCanceled"
      :name="contact.name"
      :item="keyToDelete"
      :cancel="editCancel"
    />

  </div>
</template>

<script>
import Vue from 'vue';
import { mapMutations } from 'vuex';

import DeleteConfirmation from './DeleteConfirmation';
import ContactDetailsEdit from './ContactDetailsEdit';

export default {
  name: 'ContactDetails',
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  components: {
    DeleteConfirmation,
    ContactDetailsEdit
  },

  computed: {
    contact() {
      //return this.$store.getters.getSortedContacts.find(contact => contact.id === this.id);
      return this.$store.getters.getContactById(this.id);
    }
  },

  data() {
    return {
      forceRenderKey: null,
      deleteConfirmatioVisibility: false,
      keyToDelete: '',
      addFormVisibility: false,
      editFormVisibility: false,
      keyToAdd: {
        title: '',
        value: '',
      },
      editCancel: false,
      //newValue: ''
      //prevContact: {...this.contact}
    }
  },

  methods: {
    ...mapMutations(['ADD_CONTACT_TO_STATE', 'DELETE_CONTACT_FROM_STATE', 'edit']),

    forceRender() {
      this.forceRenderKey += 1;
    },

    setDeleteConfirmatioVisibility() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
    },

    setKeyToDelete(title) {
      this.keyToDelete = title;
    },

    deleteContactKey() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      Vue.delete(this.contact, this.keyToDelete);
    },

    setAddFormVisibility() {
      this.addFormVisibility = !this.addFormVisibility;
    },

    addNewKey() {
      if (!this.keyToAdd.title.trim() || !this.keyToAdd.value.trim()) {
        return;
      }

      Vue.set(this.contact, this.keyToAdd.title.trim(), this.keyToAdd.value.trim());

      this.addFormVisibility = !this.addFormVisibility;
      this.keyToAdd = {
        title: '',
        value: '',
      }
    },

    setEditFormVisibility() {
      this.editFormVisibility = !this.editFormVisibility;
    },

    cancelEdit() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.editCancel = true;
    },

    editCanceled() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.editCancel = !this.editCancel;
      this.setEditFormVisibility()
    },

    submitEditing(newContact) {
      this.setEditFormVisibility();
      this.DELETE_CONTACT_FROM_STATE(newContact.id);
      this.ADD_CONTACT_TO_STATE(newContact);
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

    padding: 20px;


    border-radius: 15px;
    font-size: 26px;
    color: whitesmoke;

    &__backdrop {
      -webkit-box-shadow: 0px 0px 60px 40px rgba(0,0,0,0.5);
      -moz-box-shadow: 0px 0px 60px 40px rgba(0,0,0,0.5);
      box-shadow: 0px 0px 60px 40px rgba(0,0,0,0.5);
    }

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
      padding: 5px;
      font-size: 24px;
      outline: none;
      border: none;

      background-color: inherit;
      color: inherit;
      cursor: pointer;
      transition: color 0.3s ease,
        transform 0.3s ease;

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

      &:hover {
        button {
          opacity: 1;
        }
      }

      button {
        opacity: 0;
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
      transition: opacity 0.3s ease,
        background-color 0.3s ease,
        transform 0.3s ease;
  
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
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
    }

    &__footer_button {
      height: 40px;
      width: 120px;

      border-radius: 20px;
      font-size: 14px;
      outline: none;
      border: none;

      color: inherit;
      background-color: #4e4e4e;
      cursor: pointer;
      transition: background-color 0.3s ease,
        transform 0.3s ease;

      &:hover {
        background-color: #666666;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }

</style>
