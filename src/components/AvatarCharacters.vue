<template>
  <div class="avatar-group -space-x-6">
    <div v-for="character in characterFiltred" :key="character" class="avatar">
      <div class="w-12">
        <img :src="getAvatarUrl(character)" />
      </div>
    </div>

    <div class="avatar avatar-placeholder">
      <div class="bg-neutral text-neutral-content w-12">
        <span>+ {{ charactersCount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  characters: {
    type: Array,
    required: true
  }
});

const characterFiltred = computed(() => {
  if (props.characters.length > 5) {
    return props.characters.slice(0, 5);
  }
  return props.characters;
})

const charactersCount = computed(() => {
  if (props.characters.length > 5) {
    const count = props.characters.length - 5;
    return count;
  }
  return 0;
})

  function getAvatarUrl(url) {
    const newUrl = url.replace('https://rickandmortyapi.com/api/character/', 'https://rickandmortyapi.com/api/character/avatar/');
    return `${newUrl}.jpeg`;
  };
</script>