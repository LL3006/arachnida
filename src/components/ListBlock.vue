<script setup lang="ts">
import DraggableDiv from "./DraggableDiv.vue";

defineProps<{
  pos?: { x: number; y: number };
  text?: string;
}>();
</script>

<template>
  <DraggableDiv :start-pos="pos" class="bg-gray-300 rounded p-0 w-fit">
    <template v-slot:header>
      <div class="inline-block mx-2">
        <font-awesome-icon icon="fa-solid fa-caret-right" />
      </div>
    </template>
    <template v-slot:default>
      <div class="inline-block p-1 ps-0 w-fit">
        <p>{{ text }}</p>
        <slot></slot>
      </div>
    </template>
  </DraggableDiv>
</template>

<style></style>
