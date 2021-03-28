<template>
 <div>
   {{data}}
 </div>
</template>

<script>
export default {
  name: "Request",
  async setup() {
    const data = await new Promise( (resolve, reject) => {
      setTimeout(() => reject("Error inpresindible"), 2000);
    });

    return {data};
  }
}
</script>

<style scoped>

</style>