<script setup lang="ts">
import DraggableDiv from "./DraggableDiv.vue";

defineProps<{
  pos?: { x: number; y: number };
  text?: string;
}>();
</script>

<template>
  <DraggableDiv :start-pos="$props.pos">
    <div class="bg-gray-300 rounded m-2 p-1 w-fit">
      <p>{{ text }}</p>
      <slot></slot>
    </div>
  </DraggableDiv>
</template>

<style></style>
