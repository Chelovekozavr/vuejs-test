<template>
  <div class="delete_container delete_backdrop">
    <span>
      Are you sure you want to delete {{name}}?
    </span>
    <div class="buttons_container">
      <button
        class="delete_confirmation_delete_button ok"
        @click="$emit('delete-ok')"
      >
        &#10003;
      </button>
      <button class="delete_confirmation_delete_button cancel"
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
  },
}
</script>

<style lang="scss" scoped>
  .delete_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    position: fixed;
    top: calc(50% - (290px / 2));
    left: calc(50% - (290px / 2));

    padding: 20px;

    height: 250px;
    width: 250px;
    border-radius: 15px;

    font-size: 30px;
    background-color: whitesmoke;
    color: #4e4e4e;
  }

  .buttons_container {
    display: flex;
    justify-content: space-between;
  }

  .delete_confirmation_delete_button {
    height: 70px;
    width: 70px;
    margin: 10px;
    border-radius: 50%;

    color: #fff;
    font-size: 38px;

    outline: none;
    border: none;
    cursor: pointer;
  }

  .ok {
    background-color: green;
  }

  .cancel {
    background-color: red;
  }

  .delete_backdrop {
    box-shadow: 0 0 0 100vw rgba(0,0,0,0.7);
  }

</style>