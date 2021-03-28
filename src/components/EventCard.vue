<template>
  <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: event.id }}">
    <div class="event-card" @click="showInfo()">
      <span>@{{event.time}} on {{event.date}}</span>
      <h4>{{ event.title}}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  methods: {
    showInfo() {
      console.log(this.event.title);
    }
  }
}
</script>

<style scoped>
.event-card {
  margin: 0 auto 18px auto;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #434545;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #444444;
  text-decoration: none;
}
</style>