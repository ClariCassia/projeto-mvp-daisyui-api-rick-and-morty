<template>
  <div class="min-h-screen p-4 mt-3 flex flex-col">

    <div class="flex-1 flex items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <CardEpisodies v-for="epidodie in episodies" :key="epidodie.id" :name="epidodie.name" :episodie="epidodie.episode" :characters="epidodie.characters" :airDate="epidodie.air_date"
          @click="openModal(epidodie.id)" />
      </div>
    </div>

    <div class="flex justify-center py-4">
      <div class="join">
        <button v-for="(_, index) in totalPages" :key="index" class="join-item btn" :class="{ 'btn-active': index + 1 === pages }" @click="setPagination(index + 1)">
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </div>
  <ModalEpisodies :idEpisodie="episodieSelected" :show-modal="showModal" @close="showModal = false" />

</template>

<script setup>

import ModalEpisodies from "@/components/ModalEpisodies.vue";
import { getCharacters } from "../services/rickandmortyapi";

const episodies = ref([]);
const pages = ref(1);
const totalPages = ref(0);
const episodieSelected = ref('');
const showModal = ref(false);

onMounted(async () => {
  handleGetEpisodies();
});

/**
 * Busca a lista de episódios da API do Rick and Morty baseada na página atual.
 * Atualiza os estados reativos de episódios e o total de páginas disponíveis.
 * * @async
 * @function handleGetEpisodies
 * @returns {Promise<void>} Não retorna valor, mas atualiza os refs `episodies` e `totalPages`.
 */
async function handleGetEpisodies() {
  const data = await getCharacters(pages.value);
  episodies.value = data.results;
  totalPages.value = data.info.pages;
}

/**
 * Atualiza o número da página atual e dispara uma nova busca de episódios.
 * * @function setPagination
 * @param {number} page - O número da página para a qual o usuário deseja navegar.
 * @returns {void}
 */
function setPagination(page) {
  pages.value = page;
  handleGetEpisodies();
}

/**
 * Define o episódio selecionado e altera o estado para exibir o modal de detalhes.
 * * @function openModal
 * @param {string|number} episodie - O ID ou objeto identificador do episódio a ser exibido.
 * @returns {void}
 */
function openModal(episodie) {
  episodieSelected.value = String(episodie);
  showModal.value = true;
}

</script>
