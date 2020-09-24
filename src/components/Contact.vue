<template>
  <div class="contact">
    <span
      v-if="contact.name.split(' ').length > 1"
      class="initials">{{
        contact.name.split(' ')
        .slice(0, 2)
        .map(word => word.slice(0, 1))
        .join('')
        .toUpperCase()
        }}
    </span>
    <span
      v-else
      class="initials">{{contact.name.slice(0, 1)}}
    </span>
    <li>{{contact.name}}</li>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css">
  .contact {
    display: flex;
    align-items: center;
    margin: 20px;
    height: 70px;
    padding: 20px;
    border-radius: 15px;
    font-size: 30px;
    background:  rgb(136, 135, 135);
    color: whitesmoke;
  }

  .initials {
    display: flex;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgb(182, 182, 182);
  }
</style>