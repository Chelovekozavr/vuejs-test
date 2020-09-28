<template>
  <li
    class="contact"
    @mouseenter="mouseHover"
    @mouseleave="mouseHover"
  >
    <div class="contact_container">
      <span
        class="contact__initials"
      >
        {{getContactInitials(contact.name)}}
      </span>
      <span @click="$emit('contact-details', contact.id)">
        {{contact.name}}
      </span>
    </div>
    <button
      v-show="deleteButtonVisibility"
      class="contact__delete_button"
      @click="$emit('delete-contact', contact.id)"
    >
      &#10005;
    </button>
  </li>
</template>

<script>
  export default {
    props: {
      contact: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        deleteButtonVisibility: false,
      }
    },

    methods: {
      getContactInitials(name) {
        if(name.split(' ').length > 1) {

          return name
            .split(' ')
            .slice(0, 2)
            .map(word => word.slice(0, 1))
            .join('')
            .toUpperCase();
        }

        return name.slice(0, 1).toUpperCase();
      },

      mouseHover() {
        this.deleteButtonVisibility = !this.deleteButtonVisibility;
      }
    }
  }
</script>

<style lang="scss">
  .contact_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 20px;

    height: 70px;
    width: 380px;

    border-radius: 15px;
    font-size: 26px;
    background: #7b7b7b;
    color: whitesmoke;

    &__initials {
      display: flex;
      align-items: center;
      justify-content: center;
      
      margin-right: 20px;
      width: 70px;
      height: 70px;
    
      border-radius: 50%;
      background-color: #adabac;
    }

    &__delete_button {
      height: 45px;
      width: 45px;

      border-radius: 50%;
      font-size: 20px;
      outline: none;
      border: none;

      color: inherit;
      background-color: #adabac;
      cursor: pointer;
    }
  }
</style>
