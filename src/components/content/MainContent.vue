<template>
  <div>
    <div class="conference_intro flex flex-col items-center justify-center">
      <img class="w-full max-w-2xl" src="@/assets/images/common/mainLogo.png" alt="JSDC_2022" title="JSDC_2022" />
      <auto-typing></auto-typing>
    </div>
  </div>
</template>

<style lang="scss">
.conference_intro {
  min-height: calc(100vh - 35px);
}
</style>

<script setup>
import AutoTyping from '@/components/content/AutoTyping.vue';
</script>
