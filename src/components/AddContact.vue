<template>
  <div class="add-contact">

    <form
      action=""
      method="GET"
      v-bind:class="{add_contact_form_active: inputVisibility, add_contact_form: true}"
      @submit.prevent="onSubmit"
    >
      <button
        type="submit"
        id="submit"
        class="add-contact-button"
        @click="changeVisibilty"
      >
        {{ buttonSymbol }}
      </button>
      <label for="submit">
        <span v-if="!inputVisibility">
          Add contact
        </span>
      </label>
<!--
*
*
*
* v-show !!!!
*
*
-->

      <input
        v-if="inputVisibility"
        class="add-contact-input"
        type="text"
        v-model="newContactName"
        maxlength="15"
      >
      <button
        type="submit"
        v-if="inputVisibility"
        class="add-contact-button"
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

<style lang="css">
  .add-contact {
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
  }

  .add-contact-button {
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
  }

  .add-contact-button:last-child {
    margin-right: 0;
  }

  .add_contact_form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .add_contact_form_active {
    justify-content: space-between;
  }

  .add-contact-input {
    display: flex;
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
    font-size: 100%;
  }
</style>
