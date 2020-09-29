<template>
  <div class="delete_confirmation delete_backdrop">
    <p class="delete_confirmation__text">
      Are you sure you want to delete {{!item ? name : `${name} ${item}`}}?
    </p>
    <div class="delete_confirmation__buttons_container">
      <button
        class="delete_confirmation__delete_button
          delete_confirmation__delete_button--ok"
        @click="$emit('delete-ok')"
      >
        &#10003;
      </button>
      <button
        class="delete_confirmation__delete_button
          delete_confirmation__delete_button--cancel"
        @click="$emit('delete-cancel')"
      >
        &#10005;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    item: String,
    editCanceled: Boolean
  },
}
</script>

<style lang="scss" scoped>
  .delete_backdrop {
    box-shadow: 0 0 0 100vw rgba(0,0,0,0.8);
  }

  .delete_confirmation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    position: fixed;
    top: 200px;
    left: calc(50% - (290px / 2));

    padding: 20px;

    height: 250px;
    width: 250px;
    border-radius: 15px;

    font-size: 30px;
    background-color: whitesmoke;
    color: #4e4e4e;

    &__text {
      margin: 0;
    }

    &__buttons_container {
      display: flex;
      justify-content: space-between;
    }

    &__delete_button {
      height: 70px;
      width: 70px;
      margin: 10px;
      border-radius: 50%;

      color: #fff;
      font-size: 38px;

      outline: none;
      border: none;
      cursor: pointer;

      &--ok {
        background-color: #33ff00;
        transition: 0.2s;

        &:hover {
          background-color: #2bd600;
        }

        &:active {
          transform: scale(0.9);
        }
      }

      &--cancel {
        background-color: #ff0000;
        transition: 0.2s;

        &:hover {
          background-color: #db0000;
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
</style>
