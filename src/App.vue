<template>
  <div id="app">
    <ContactsList
      :contacts="contacts"
    />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue'

export default {
  name: 'App',
  data() {
    return {
      contacts: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Katya tinder'},
        {id: 3, name: 'Nazar work'},
        {id: 4, name: 'Anya'}
      ]
    }
  },
  components: {
    ContactsList
  }
}
</script>

<style>
  body {
    background-color: #272727;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: whitesmoke;
  }
</style>
