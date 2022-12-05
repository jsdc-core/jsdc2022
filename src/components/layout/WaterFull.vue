<template>
  <div ref="wall"
    class="flex speakers"
    :style="{gap: `${gap}px`}">
    <div
      v-for="(column, columnIndex) in columns"
      :key="columnIndex"
      :data-index="columnIndex"
      class="item-layout"
      :style="{
        height: ['-webkit-max-content', '-moz-max-content', 'max-content'],
        gap: `${gap}px`,
        }">
      <div v-for="itemIdx in column" :key="itemIdx" class=" text-white">
        <slot :item="items[itemIdx]" :index="itemIdx"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  watch, ref, toRefs, onMounted, onBeforeUnmount, nextTick,
} from 'vue';

const props = defineProps({
  gap: {
    type: Number,
    default: 16,
  },
  items: {
    type: Array,
    default() {
      return [];
    },
  },
  columnWidth: {
    type: Number,
    default: 280,
  },
  rtl: Boolean,
});
const {
  columnWidth, gap, rtl, items,
} = toRefs(props);
const wall = ref(null);
const columns = ref([]);

function columnCount() {
  const count = Math.floor((wall.value.getBoundingClientRect().width + gap.value) / (columnWidth.value + gap.value));
  return count || 1;
}

function createColumns(count = 1) {
  return [...new Array(count)].map(() => []);
}

function fillColumns(itemIdx = 0) {
  if (itemIdx >= items.value.length) {
    return;
  }

  nextTick(() => {
    const columnDivs = [...wall.value.children];
    if (rtl.value) {
      columnDivs.reverse();
    }
    const target = columnDivs.reduce((prev, curr) => (curr.getBoundingClientRect().height < prev.getBoundingClientRect().height ? curr : prev));

    columns.value[+target.dataset.index].push(itemIdx);
    fillColumns(itemIdx + 1);
  });
}

function redraw(force = false) {
  if (columns.value.length === columnCount() && !force) {
    return;
  }

  columns.value = createColumns(columnCount());
  fillColumns(0);
}

onMounted(() => {
  redraw();
  window.addEventListener('resize', redraw);
});

onBeforeUnmount(() => window.removeEventListener('resize', redraw));
watch([items, rtl], () => redraw(true));
watch([columnWidth, gap], () => redraw());
</script>

<style lang="scss">
.item-layout {
  @apply flex;
  @apply flex-grow;
  @apply flex-col;
  flex-basis: 0;
}
</style>
