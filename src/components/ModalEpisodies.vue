<template>
  <dialog id="my_modal_3" class="modal" :open="showModal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" @click="$emit('close')">
          ✕
        </button>
      </form>
      <div class="flex flex-col justify-center gap-4 p-3">
        <div class="flex items-center gap-4 mb-4">
          <h3 class="text-lg font-bold">{{ data.name }}</h3>
          <BadgeRpisodie>
            {{ data.episode }}
          </BadgeRpisodie>
        </div>
        <AvatarCharacters v-if="data.characters" :characters="data.characters" :quantityCharacters="10" />
        <div class="flex justify-end gap-4 mb-4">
          <BadgeAirDate>
            {{ data.air_date }}
          </BadgeAirDate>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, watch } from "vue";
import { getCharacterById } from "../services/rickandmortyapi";

const props = defineProps({
  idEpisodie: { type: String, required: true },
  showModal: { type: Boolean, required: true },
});

defineEmits(["close"]);

const data = ref({});

watch(
  () => [props.showModal, props.idEpisodie],
  async ([show, id]) => {
    if (!show || !id) return;
    data.value = await getCharacterById(id);
  },
  { immediate: false }
);

</script>