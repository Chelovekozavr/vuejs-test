<template>
  <div>
    <AddContact
        @add-contact="addNewContact"
    />
    <ul class="contacts-list">
      <Contact
        v-for="contact of sortedContacts"
        :key="contact.id"
        :contact="contact"
        @delete-contact="deleteContact"
        @set-confirm="setDeleteConfirmatioVisibility"
      />
    </ul>
    <DeleteConfirmation
      v-if="deleteConfirmatioVisibility"
      @delete-cancel="setDeleteConfirmatioVisibility"
      @delete-ok="deleteContact"
      :name="contactNameToDlete"
    />
  </div>
</template>

<script>
import Contact from './Contact.vue'
import AddContact from './AddContact'
import DeleteConfirmation from './DeleteConfirmation'

export default {
  data() {
    return {
      sortedContacts: this.sortContacts(this.contacts),
      deleteConfirmatioVisibility: false,
      contactIdToDelete: null,
      contactNameToDlete: ''
    }
  },

  props: {
    contacts: Array,
  },

  components: {
    Contact,
    AddContact,
    DeleteConfirmation
  },

  methods: {
    sortContacts(contacts) {
      return contacts.sort((a, b) => a.name.localeCompare(b.name));
    },

    addNewContact(newContact) {
      this.sortedContacts.push(newContact)
      this.sortContacts(this.sortedContacts)
    },

    deleteContact() {
      this.sortedContacts = this.sortedContacts.filter(contact => contact.id !== this.contactIdToDelete);
      this.deleteConfirmatioVisibility = !this.contactIdToDelete;
    },

    setDeleteConfirmatioVisibility(name, id) {
      this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      this.contactIdToDelete = id;
      this.contactNameToDlete = name;
    }
  }
}
</script>

<style lang="css">
  .contacts-list {
    display: grid;
    grid-auto-columns: auto;
    position: absolute;

    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
