<template>
  <article class="container text-white">
    <section class="w-full">
      <div class="about-jsdc">
        <div class="content-left">
          <div class="content_title">
            關於JSDC
          </div>
          <div class="content_main md:px-24">
            JavaScript 開發者年會 (JavaScript Developer Conference，簡稱 JSDC) 是台灣最大的 JavaScript 年度性技術研討會，
            旨在提供台灣中高階 JavaScript 技術人才與世界最新 JavaScript 相關技術討論與分享。
            <p class="pt-5">
              JSDC 由 2011 年底開始，由三個台灣開發者社群共同發起，近年各式開發者社群蓬勃發展Front-End Developer、 Angular.tw、 ReactJS.tw 等新興社群⼀⼀成立，
              我們期許 JSDC 能成為每年網⾴技術開發者的中⾼階技術交流活動，整合來自獨立開發者、企業、組織及機構的科技力量，並致力於知識全球化，讓參與者重新認識 JavaScript。
            </p>
          </div>
        </div>
        <div class="content-right">
          <img class="w-full max-w-lg rounded-lg" src="@/assets/images/realStuff/souvenir.jpg" alt="JSDC" title="JSDC">
        </div>
      </div>
    </section>
    <div class="my-10 h-px bg-white mx-2"></div>
    <section class="w-full">
      <div class="about-conf mx-2">
        <div class="content-btn w-full">
          <div class="content_title text-yellow-600">
            JavaScript 開發者年會
          </div>
          <div class="text-xl text-yellow-400">
            <p class="pt-3">JSDC 打破了壁壘，整合來自獨立開發者、企業、組織及機構的科技力量。</p>
            <p class="pt-3">我們致力於知識全球化，並讓參與者重新認識 JavaScript。</p>
          </div>
          <div class="content_image my-10">
            <img class="m-auto w-full max-w-7xl" src="@/assets/images/realStuff/teamPhoto.jpg" alt="JSDC 2022" title="JSDC">
          </div>
        </div>
      </div>
    </section>
    <help-tooling words="問" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import HelpTooling from '@/components/layout/HelpTooling.vue';

const redirectUrl = ref('https://forms.gle/zagmrUpA5RC9xZc8A');
</script>

<style lang="scss">
.content-left {
  flex: 2 0 0;
}

.content-right {
  flex: 1 0 0;
  @apply flex;
  @apply justify-center;
  @apply items-center;
}

.about-jsdc {
  @apply mx-2;
  @apply bg-white;
  @apply bg-opacity-30;
  @apply rounded-3xl;
  @apply p-10;
  @apply flex;
  @apply justify-center;
  @apply flex-col;
  @media screen and (min-width: $laptop-size) {
    @apply flex-row;
  }
}
</style>
