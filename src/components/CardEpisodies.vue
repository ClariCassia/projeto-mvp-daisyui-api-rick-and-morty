<template>
  <div class="card bg-base-100 w-96 shadow-sm" v-for="episodie in episodies" :key="episodie.id">
  <div class="card-body">
    <h2 class="card-title">
      {{ episodie.name }}
      <div class="badge badge-secondary">{{ episodie.episode }}</div>
    </h2>
    <p>{{ episodie.air_date }}</p>
  </div>
</div>
</template>

<script setup>

const props = defineProps({
  episodies: {
    type: Array,
    required: true,
  },
});

</script>