<template>
  <div>
    <h1> Contact list {{contacts.length}}</h1>
    <ContactList
      :contacts="contacts"
    />
  </div>
</template>

<script>
import ContactList from '@/components/ContactList'

export default {
  computed: {
    contacts() {
      return this.$store.getters.getSortedContacts;
    }
  },

  components: {
    ContactList
  }
}
</script>
