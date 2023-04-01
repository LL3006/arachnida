<script setup lang="ts">
import { reactive, ref, watchEffect } from "vue";
import { useEventListener } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    startPos: { x: number; y: number };
  }>(),
  {
    startPos: () => {
      return { x: 0, y: 0 };
    }
  }
);

let dragging = ref(false);
let draggable = ref<HTMLDivElement>();

let pos: {
  offset: {
    x: number;
    y: number;
  };
  current: {
    x: number;
    y: number;
  };
} = reactive({
  offset: { x: 0, y: 0 },
  current: Object.assign({}, props.startPos)
});

watchEffect(() => {
  if (draggable.value) {
    draggable.value.style.left = pos.current.x! + "px";
    draggable.value.style.top = pos.current.y! + "px";
  }
});

function dragStart(e: MouseEvent | TouchEvent) {
  if (!dragging.value) {
    let clientX, clientY;

    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    pos.offset.x = clientX - pos.current.x;
    pos.offset.y = clientY - pos.current.y;
    dragging.value = true;
  }
}

function dragMove(e: MouseEvent | TouchEvent) {
  if (dragging.value) {
    let clientX, clientY;

    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    pos.current.y = clientY - pos.offset.y;
    pos.current.x = clientX - pos.offset.x;
  }
}

useEventListener(document, "mousemove", dragMove);
useEventListener(document, "touchmove", dragMove);

function dragEnd() {
  if (dragging.value) {
    pos.offset = { x: 0, y: 0 };
    dragging.value = false;
  }
}

useEventListener(document, "mouseup", dragEnd);
useEventListener(document, "touchend", dragEnd);
</script>

<template>
  <div ref="draggable" class="absolute select-none w-fit h-fit">
    <slot name="header"></slot>
    <div class="inline" @touchstart="dragStart" @mousedown="dragStart">
      <slot></slot>
    </div>
  </div>
</template>
