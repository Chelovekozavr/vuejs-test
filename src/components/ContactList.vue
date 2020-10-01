<template>
  <div class="content_container">
    <AddContact
      @add-contact="addNewContact"
    />
    <ul class="contacts_list">
      <Contact
        v-for="contact of contacts"
        :key="contact.id"
        :contact="contact"
        @delete-contact="setDeleteConfirmatioVisibility"
      />
    </ul>
    <ContactDetails
      v-if="contactDetailsVisibility"
      @hide-contact-details="contactDetails"
      :id="contact.id"
    />

    <DeleteConfirmation
      v-if="deleteConfirmatioVisibility"
      @delete-cancel="setDeleteConfirmatioVisibility"
      @delete-ok="deleteContact"
      :name="contact.name"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Contact from './Contact.vue';
import AddContact from './AddContact';
import DeleteConfirmation from './DeleteConfirmation';
import ContactDetails from './ContactDetails';

export default {
  data() {
    return {
      deleteConfirmatioVisibility: false,
      contact: {},
      contactDetailsVisibility: false,
      //id: Date.now(),
    }
  },

  props: {
    contacts: {
      type: Array,
      required: true
    }
  },

  components: {
    Contact,
    AddContact,
    DeleteConfirmation,
    ContactDetails
  },

  methods: {
    ...mapMutations([
      'ADD_CONTACT_TO_STATE',
      'DELETE_CONTACT_FROM_STATE'
    ]),

    addNewContact(newContact) {
      this.ADD_CONTACT_TO_STATE(newContact);
    },

    setDeleteConfirmatioVisibility(id) {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.contact = this.contacts.find(contact => contact.id === id);
    },

    deleteContact() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.DELETE_CONTACT_FROM_STATE(this.contact.id)
    },
  }
}
</script>

<style lang="scss">
  .content_container {
    margin-top: 20px;
    border-radius: 15px;
    padding: 10px;
    -webkit-box-shadow: 0px 0px 60px 40px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 60px 40px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 60px 40px rgba(0,0,0,0.5);
  }

  .contacts_list {
    display: grid;
    grid-auto-columns: auto;

    grid-gap: 20px;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }
</style>
