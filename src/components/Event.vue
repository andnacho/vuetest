<template>
  <div>
    <teleport to="#end-of-body">
      Search for <input v-model="searchInput" />
    </teleport>
    <div>
      <p>Loading: {{ getEvents.loading.value }}</p>
      <p>Error: {{ getEvents.error.value }}</p>
      <p>Number of events: {{ getEvents.results.value }}</p>
    </div>
  </div>
</template>

<script>
import {ref, watch} from "vue";
import usePromise from "../methods/methods";
import eventApi from "../api/eventApi";

export default {
  name: "Event",
  setup() {
    const searchInput = ref("");
    const getEvents = usePromise(search => eventApi.getEventCount(search.value))

    watch( searchInput, () => {
      // if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      // } else {
      //   getEvents.results.value = null;
      // }
    }, {
      immediate: true
    });

    return {searchInput, getEvents};
  }
}
</script>

<style scoped>

</style>