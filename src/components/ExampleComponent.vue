<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Message Changed!'
    }
  }
}
</script>
