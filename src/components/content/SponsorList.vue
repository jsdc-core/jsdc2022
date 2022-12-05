<template>
  <section class="container text-white">
    <div class="text-5xl">特別感謝</div>
    <div class="sponser-list">
      <figure v-for="(company, idx) in sponserList" :key="`company${idx}`">
        <a :href="company.url" :title="company.title" target="_blank">
          <img v-if="company.img" :src="require(`@/assets/images/sponser/${company.img}`)" :alt="company.desc" :title="company.desc">
          <img v-else src="@/assets/images/speaker/default.jpg" alt="JSDC 2022" title="JSDC 2022">
        </a>
        <!-- <figcaption>{{company.title}}</figcaption> -->
      </figure>
    </div>
  </section>
</template>

<style lang="scss">
section.container {
  @apply pt-10;
}
.sponser-list {
  @apply flex;
  @apply justify-center;
  @apply mt-10;
  @apply flex-wrap;
  @apply gap-5;
  figure {
    @apply flex;
    @apply flex-col;
    @apply rounded-full;
    @apply overflow-hidden;
    @apply max-w-xs;
    @apply border-yellow-500;
    @apply border-4;
    @apply border-solid;
    @apply relative;
    @apply bg-white;
  }
  img {
    @apply w-full;
  }
  figcaption {
    @apply absolute;
    @apply bottom-8;
    @apply bg-yellow-500;
    @apply text-white;
    @apply font-black;
    @apply leading-10;
    @apply h-10;
    @apply px-1;
    @apply w-full;
    @apply align-middle;
    @apply break-words;
  }

  @media screen and (min-width: $tablet-size) {
    @apply justify-between;
    figure {
      @apply border-8;
      flex: 1 0 20%;
      max-width: 25%;
    }
  }
}
</style>

<script setup>
const sponserList = [
  {
    desc: '最專業的繁體中文 IT 媒體',
    img: 'ithome.png',
    title: 'iThome',
    url: 'https://www.ithome.com.tw/',
  },
  {
    desc: '流暢、簡潔的線上協作筆記，增強團隊生產力！',
    img: 'hackmd.png',
    title: 'HackMD',
    url: ' https://hackmd.io/home',
  },
  {
    desc: 'MOPCON 目前已是南台灣最大技術社群研討會，成立宗旨為連結產業與資訊工程技術，以培養更多資訊科技人才',
    img: 'mopcon.png',
    title: 'MOPCON',
    url: 'https://mopcon.org/2022/schedule',
  },
  {
    desc: '亞洲最完整 JavaScript 全端開發課程',
    img: 'alphacamp.png',
    title: 'ALPHA Camp',
    url: 'https://tw.alphacamp.co/curriculum',
  },
  {
    desc: 'Dcard is Hiring!進官網查看更多職缺',
    img: 'dcard.png',
    title: 'Dcard',
    url: 'https://about.dcard.tw/',
  },
  {
    desc: 'Hahow 是新創教育科技公司，以知識技能分享的線上學習平台',
    img: 'hahow.png',
    title: 'Hahow',
    url: 'https://hahow.in/',
  },
  {
    desc: 'ACCUPASS 是亞洲領先的活動社交平台，串聯消費者及主辦方。提供線上及線下整合服務，打造更優質的報名和現場體驗。',
    img: 'accupass.png',
    title: 'ACCUPASS',
    url: 'https://www.liinks.co/accupass',
  },
  {
    desc: 'iChief',
    img: 'ichef.png',
    title: 'iChief',
    url: 'https://www.ichefpos.com/zh-tw',
  },
];
</script>
