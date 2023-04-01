<script setup lang="ts">
import TagBlock from "./TagBlock.vue";

interface Block {
  id: 0;
  text: string;
  pos: { x: number; y: number };
  children: Array<Block>;
}

let tree: Block[] = [
  {
    id: 0,
    text: "Example1",
    pos: { x: 0, y: 24 },
    children: []
  }
];
</script>

<template>
  <template v-for="block in tree" :key="block.id">
    <TagBlock :text="block.text" :pos="block.pos" />
  </template>
</template>

<style></style>
