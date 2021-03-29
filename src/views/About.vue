<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Test para todos</p>
    <div v-if="showExtra == 'true'">Esto es informacioń adicional</div>

  </div>
</template>

<script>
  export default {
    name: 'About',
    props: ['showExtra'],
    created() {
      console.log(this.showExtra);
    }
  }
</script>
