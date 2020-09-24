<template>
  <ul class="contacts-list">
    <AddContact 
      @add-contact="addNewContact"
    />
    <Contact
      v-for="contact of sortedContacts"
      :key="contact.id"
      :contact="contact"
    />


  </ul>
</template>

<script>
import Contact from './Contact.vue'
import AddContact from './AddContact'
export default {
  data() {
    return {
      sortedContacts: this.contacts.sort((a, b) => a.name.localeCompare(b.name))
    }
  },

  props: {
    contacts: Array,
  },

  components: {
    Contact,
    AddContact
  },

  methods: {
    addNewContact(newContact) {
      this.sortedContacts.push(newContact)
    }
  }
}
</script>

<style lang="css">
  .contacts-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
