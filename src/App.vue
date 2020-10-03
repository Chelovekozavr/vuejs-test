<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
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
}
</script>

<style lang="scss">
@import "./styles/_variables";

  body {
    background-color: $body-color;
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $secondary-color;
  }
</style>

