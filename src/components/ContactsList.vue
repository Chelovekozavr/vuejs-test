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
        @delete-contact="setDeleteConfirmatioVisibility"
        @contact-details="contactDetails"
      />
    </ul>
    <ContactDetails
      v-if="contactDetailsVisibility"
      :contact="contact"
      @hide-contact-details="contactDetails"
      :key="id"
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
  import Contact from './Contact.vue'
  import AddContact from './AddContact'
  import DeleteConfirmation from './DeleteConfirmation'
  import ContactDetails from './ContactDetails'


  export default {
    data() {
      return {
        sortedContacts: this.sortContacts(this.contacts),
        deleteConfirmatioVisibility: false,
        contact: {},
        contactDetailsVisibility: false,
        id: Date.now()
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
      sortContacts(contacts) {
        return contacts.sort((a, b) => a.name.localeCompare(b.name));
      },

      findContact(id) {
        return this.sortedContacts.find(contact => contact.id === id)
      },

      addNewContact(newContact) {
        this.sortedContacts.push(newContact)
        this.sortContacts(this.sortedContacts)
      },

      setDeleteConfirmatioVisibility(id) {
        this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
        this.contact = this.findContact(id);
      },

      deleteContact() {
        this.sortedContacts = this.sortedContacts.filter(contact => contact.id !== this.contact.id);
        this.deleteConfirmatioVisibility = !this.deleteConfirmatioVisibility;
      },

      contactDetails(id) {
        this.contact = this.findContact(id);
        this.contactDetailsVisibility = !this.contactDetailsVisibility;
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
