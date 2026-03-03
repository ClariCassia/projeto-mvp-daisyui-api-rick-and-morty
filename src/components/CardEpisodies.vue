<template>
  <div class="card bg-base-100 w-full shadow-sm">
    <AvatarCharacters :characters="props.characters" />
    <div class="card-body">
      <h2 class="card-title" >
        {{ props.name }}
        <BadgeRpisodie>
          {{ props.episodie }}
        </BadgeRpisodie>
      </h2>

      <div class="card-actions justify-end">
        <BadgeAirDate>
          {{ props.airDate }}
        </BadgeAirDate>
      </div>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  name: {
    type: String,
    required: true
  },
  episodie: {
    type: String,
    required: true
  },
  characters: {
    type: Array,
    required: true
  },
  airDate: {
    type: String,
    required: true
  }
});
</script>