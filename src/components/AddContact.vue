<template>
  <div class="add_contact">

    <form
      action=""
      method="GET"
      v-bind:class="{'add_contact__form--active': inputVisibility, add_contact__form: true}"
      @submit.prevent="onSubmit"
    >
      <button
        type="submit"
        id="submit"
        class="add_contact__button"
        @click="changeVisibilty"
      >
        {{ buttonSymbol }}
      </button>
      <label for="submit">
        <span v-show="!inputVisibility">
          Add contact
        </span>
      </label>

      <input
        v-show="inputVisibility"
        class="add_contact__input"
        type="text"
        v-model="newContactName"
        maxlength="15"
      >
      <button
        v-show="inputVisibility"
        class="add_contact__button"
        type="submit"
        @click="changeVisibilty"
      >
        &#10005;
      </button>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      newContactName: '',
      inputVisibility: false,
    }
  },

  methods: {
    onSubmit() {
      if(this.newContactName.trim()) {
        const newContact = {
          id: Date.now(),
          name: this.newContactName
        }

      this.$emit('add-contact', newContact);
      this.newContactName = '';
      }
    },

    changeVisibilty() {
      this.inputVisibility = !this.inputVisibility
    }
  },

  computed: {
    buttonSymbol: function() {
      if (!this.inputVisibility) {
        return '+';
      } else {
        return String.fromCharCode(10003);
      }
    }
  }
}
</script>

<style lang="scss">
  .add_contact {
    display: flex;
    align-items: center;

    margin: 10px;
    padding: 20px;
    height: 70px;
    width: 380px;
    border-radius: 15px;

    font-size: 26px;
    background:  #7b7b7b;
    color: whitesmoke;

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 20px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
    
      background-color: #adabac;
      color: white;

      font-size: 38px;
      cursor: pointer;
      border: none;
      outline: none;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
       background-color: #a1a1a1;
      }

      &:active {
        transform: scale(0.8);
      }
    }
    
    &__form {
      width: 100%;
      display: flex;
      align-items: center;

      &--active {
        justify-content: space-between;
      }
    }

    &__input {
      margin-right: 20px;
      width: 190px;
      height: 50px;
      border-radius: 5px;

      background-color: rgb(182, 182, 182);
      color: whitesmoke;
    
      cursor: pointer;
      border: none;
      outline: none;
    
      font-family: inherit;
      font-size: 26px;
    }
  }
</style>
