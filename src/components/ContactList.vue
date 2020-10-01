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
      :contact="contact"
      @hide-contact-details="contactDetails"
      @delete-key="forceRerender"
      @add-key="forceRerender"
      :key="componentKey"
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
      id: Date.now(),
      componentKey: 0,
    }
  },

  props: {
    contacts: Array,
  },

  components: {
    Contact,
    AddContact,
    DeleteConfirmation,
    ContactDetails
  },

  methods: {
    ...mapMutations(['addContactToState', 'deleteContactFromState']),

    addNewContact(newContact) {
      this.addContactToState(newContact);
    },

    setDeleteConfirmatioVisibility(id) {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.contact = this.contacts.find(contact => contact.id === id);
    },

    deleteContact() {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.deleteContactFromState(this.contact.id)
    },

    forceRerender() {
      this.componentKey +=1;
    }
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
