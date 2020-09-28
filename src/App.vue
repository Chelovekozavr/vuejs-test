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
        {id: 1, name: 'Andrew', number: '+380631234567'},
        {id: 2, name: 'Katya tinder', number: '+380731234567'},
        {id: 3, name: 'Nazar work', number: '+38011111111', email:'nazar@gmail.com'},
        {id: 4, name: 'Anya', email: 'anya@gmail.com'},
        {id: 5, name: 'Oleg Gym'}
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
