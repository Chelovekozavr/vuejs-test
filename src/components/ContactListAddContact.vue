<template>
  <div class="add-contact">

    <form
      action=""
      method="GET"
      v-bind:class="{'add-contact__form--active': inputVisibility,' add-contact__form': true}"
      @submit.prevent="onSubmit"
    >
      <button
        type="submit"
        class="add-contact__button"
        @click="changeInputVisibilty"
      >
        {{ buttonSymbol }}
      </button>
      <label for="submit">
        <span v-show="!inputVisibility">
          Add contact
        </span>
      </label>

      <input
        v-if="inputVisibility"
        class="add-contact__input"
        type="text"
        v-model="newContactName"
        maxlength="15"
      >
      <button
        type="reset"
        v-show="inputVisibility"
        class="add-contact__button"
        @click="changeInputVisibilty"
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
        inputVisibility: false
      }
    },

    methods: {
      onSubmit() {
        if(this.newContactName.trim()) {
          const newContact = {
            id: Date.now(),
            name: this.newContactName
          };

        this.$emit('add-contact', newContact);
        this.newContactName = '';
        }
      },

      changeInputVisibilty() {
        this.inputVisibility = !this.inputVisibility;
        this.newContactName = '';
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

<style lang="scss" scoped>
  @import "../styles/contactListAddContact";
</style>
