<template>
  <button class="button is-primary" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #eee;
  border-radius: 10px;
  color: white;
  background-color: green;
  cursor: pointer;
  font-size: 15pt;
  padding: 10px 20px;
  margin: 10px;
  text-transform: uppercase;
}
</style>
