<template>
  <div class="avatar-group -space-x-6 p-4">
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
  },
  quantityCharacters: {
    type: Number,
    default: 5
  }
});

const characterFiltred = computed(() => {
  if (props.characters.length > props.quantityCharacters) {
    return props.characters.slice(0, props.quantityCharacters);
  }
  return props.characters;
})

const charactersCount = computed(() => {
  if (props.characters.length > props.quantityCharacters) {
    const count = props.characters.length - props.quantityCharacters;
    return count;
  }
  return 0;
})

/**
 * Transforma a URL de detalhe do personagem em uma URL válida para a imagem do avatar.
 * Substitui o endpoint da API pelo endpoint de assets de imagem e adiciona a extensão .jpeg.
 * * @function getAvatarUrl
 * @param {string} url - A URL completa do personagem retornada pela API (ex: https://rickandmortyapi.com/api/character/1).
 * @returns {string} A URL formatada para exibir a imagem do avatar (ex: https://rickandmortyapi.com/api/character/avatar/1.jpeg).
 */
function getAvatarUrl(url) {
  if (!url) return '';
  const newUrl = url.replace(
    'https://rickandmortyapi.com/api/character/',
    'https://rickandmortyapi.com/api/character/avatar/'
  );
  return `${newUrl}.jpeg`;
}
</script>