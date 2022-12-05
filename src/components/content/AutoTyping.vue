<template>
  <div class="text-center">
    <h3 class="border-dashed text-2xl my-3 md:text-4xl md:m-0 md:inline-block">
      <a href="https://hackmd.io/@JSDC-tw/2022conference/https%3A%2F%2Fhackmd.io%2F%40JSDC-tw%2F2022conference" title="感謝 HackMD 贊助"
        class="button w-full max-w-xs bg-yellow-300 tracking-wide font-extrabold border-none rounded-full p-2">
        ＃JSDC 共筆回顧
      </a>
    </h3>
    <h1 class="intro_content">
      <span class="text-yellow-500 tracking-widest">{{typeValue}}</span>
      <span class="cursor inline-block ml-1 w-1 bg-white" :class="{typing: typeStatus}">&nbsp;</span>
    </h1>
    <div class="sub_content">JSDC 2022 年會順利結束，也是第一個<span class="text-yellow-400 px-2 font-bold">十年</span>的紀念</div>
  </div>
</template>

<style lang="scss" scoped>
.intro_content,
.sub_content {
  @apply text-base;
  @apply text-white;
  @apply mt-5;
  @media screen and (min-width: $tablet-size) {
    @apply text-3xl;
  }
  span.cursor {
    animation: cursorBlink 1s infinite;
    &.typing {
      animation: none;
    }
  }
}

.border-dashed {
  .button {
    @apply pt-2;
    &:before {
      min-width: calc(160px + 12px);
      min-height: calc(40px + 12px);
      box-shadow: 0 0 50px rgba(204, 132, 8, .54);
    }
    &:after {
      content: '';
      @apply w-7;
      @apply h-7;
    }
  }
  &:nth-child(even) {
    .button:before {
      min-width: calc(190px + 12px);
    }
  }
  @media screen and (min-width: $tablet-size) {
    .button {
      @apply pt-2;
      &:before {
        min-width: calc(310px + 12px);
        min-height: calc(60px + 12px);
      }
    }
    &:nth-child(even) {
      .button:before {
        min-width: calc(270px + 12px);
      }
    }
  }
}

@keyframes cursorBlink {
  49% { @apply bg-white; }
  50% { @apply bg-transparent; }
  99% { @apply bg-transparent; }
}
</style>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const typeArray = reactive(['讓我們2022年見！', 'See you on 2022!']);
const typeingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000;
const typeValue = ref('');
const typeStatus = ref(false);
const typeArrayIdx = ref(0);
const charIdx = ref(0);

function typeText() {
  if (charIdx.value < typeArray[typeArrayIdx.value].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += typeArray[typeArrayIdx.value].charAt(charIdx.value);
    charIdx.value += 1;
    setTimeout(typeText, typeingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
}

function eraseText() {
  if (charIdx.value > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = typeArray[typeArrayIdx.value].substring(0, charIdx.value - 1);
    charIdx.value -= 1;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    typeArrayIdx.value += 1;
    if (typeArrayIdx.value >= typeArray.length) typeArrayIdx.value = 0;
    setTimeout(typeText, typeingSpeed + 1000);
  }
}

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>
