<template>
  <div class="tooling">
    <div class="button circle text-4xl font-black">
      <a class="inline-block leading-9 pt-3 text-white" :href="url" title="來與講師起鬨吧～" target="_blank" >
        {{words}}
      </a>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  words: String,
  url: String,
});

const { words, url } = toRefs(props);
</script>

<style lang="scss">
  .tooling {
    @apply fixed;
    @apply bottom-8;
    @apply right-5;
    a {
      animation: color-change 1s infinite;
    }
  }

  .circle {
    @apply w-16;
    @apply h-16;
    @apply text-center;
    @apply rounded-full;
  }

  .button {
    &:before{
      min-height: calc(64px + 10px);
      min-width: calc(64px + 10px);
      z-index: -9999;
    }
  }

  @keyframes color-change {
    0% { @apply text-white; }
    25% { @apply text-gray-300; }
    50% { @apply text-gray-700; }
    75% { @apply text-gray-300; }
    100% { @apply text-white; }
  }
</style>
