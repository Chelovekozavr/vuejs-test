<template>
  <li
    class="contact"
    @mouseenter="mouseHover"
    @mouseleave="mouseHover"
  >
    <router-link
      class="contact__link"
      :to="{ name: 'ContactDetails', params: { id: contact.id, contact: contact }}"
    >
      <span class="contact__initials">
        {{getContactInitials(contact.name)}}
      </span>
      <span>
        {{ contact.name }}
      </span>

    </router-link>
    <button
      id="btn"
      v-show="deleteButtonVisibility"
      class="contact__delete_button"
      @click.stop="$emit('delete-contact', contact.id)"
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
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    height: 70px;
    width: 380px;

    border-radius: 15px;
    font-size: 26px;
    background-color: #7b7b7b;
    color: whitesmoke;

    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #666666;
    }

    &__link {
      display: flex;
      align-items: center;
      width: 300px;
      outline: none;
      text-decoration: none;
      color: inherit;
    }

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
      transition: background-color 0.3s ease, 
        transform 0.3s ease;

      &:hover {
       background-color: #a1a1a1;
      }

      &:active {
        transform: scale(0.8);
      }
    }
  }
</style>
