<template>
  <article class="container">
    <div class="content_title">
      大會議程
    </div>
    <div class="timesheet">
      <div class="timesheet-col" v-for="(timeTable, idx) in timeSheet" :key="`no.${idx}`">
        <div class="timesheet-cate">
          <div v-if="timeTable.category" class="topic-category text-sm" :class="{'text-lg': timeTable.category && timeTable.category.length < 11}">
            {{timeTable.category}}
          </div>
          <div class="time">
            {{timeTable.time}}
          </div>
        </div>
        <div class="topic">
          <div v-for="(item, idx) in timeTable.topic" :key="`topic${idx}`">
            <div v-if="(idx + 1) !== timeTable.topic.length" class="topic-category text-sm">
              #Session {{idx + 1}}
            </div>
            <div v-else-if="(idx + 1) === timeTable.topic.length && item.speaker.length" class="topic-category text-sm">
              #多人座談會
            </div>
            <h3 class="topic-title">{{item.topic}}</h3>
            <h2 v-if="item.speaker" class="topic-speaker">
              <a v-for="speaker in item.speaker" class="inline-block mr-4 speker-icon" :href="speaker.url" target="_blank" :key="speaker.name" >
                <img class=" w-full" :src="require(`@/assets/images/speaker/${speaker.img}`)" :alt="speaker.name" :title="`${speaker.name}個人網站`">
              </a>
            </h2>
            <div v-else>
              <img class="speker-icon" alt="JSDC 2022 - TBD" title="JSDC 2022 - TBD" src="@/assets/images/speaker/default.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <help-tooling words="問" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import HelpTooling from '@/components/layout/HelpTooling.vue';

const redirectUrl = ref('https://forms.gle/zagmrUpA5RC9xZc8A');
const timeSheet = [
  {
    time: '08:30 - 08:40',
    category: null,
    topic: [
      {
        topic: 'JSDC 2022 開場',
        speaker: [],
      },
    ],
  },
  {
    time: '08:40 - 10:00',
    category: '#跨平台整合',
    topic: [
      {
        topic: 'The Future of React: 18 and Beyond',
        speaker: [{ name: 'C. T. Lin', img: 'ctlin.jpeg', url: 'https://www.facebook.com/chentsulin' }],
      },
      {
        topic: 'It\'s a good idea to learn JS from LINE Bot',
        speaker: [{ name: 'Wolke Lin , 林建宏', img: 'wolke.jpg', url: 'https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e751' }],
      },
      {
        topic: '從 React Native 跨屏開始的多領域開發歷程',
        speaker: [{ name: 'Sam Huang', img: 'sam.jpg', url: 'https://www.facebook.com/sailplaneTW/' }],
      },
      {
        topic: '【#跨平台整合 - JavaScript 無所不在】座談',
        speaker: [
          { name: '（主持人）Ninja', img: 'nijia.jpeg', url: 'https://www.facebook.com/groups/linebot' },
          { name: 'C. T. Lin', img: 'ctlin.jpeg', url: 'https://www.facebook.com/chentsulin' },
          { name: 'Wolke Lin , 林建宏', img: 'wolke.jpg', url: 'https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e751' },
          { name: 'Sam Huang', img: 'sam.jpg', url: 'https://www.facebook.com/sailplaneTW/' }],
      },
    ],
  },
  {
    time: '10:00 - 10:10',
    category: null,
    topic: [{
      topic: '上午場休息',
      speaker: [],
    }],
  },
  {
    time: '10:10 - 12:00',
    category: '#區塊鏈應用',
    topic: [
      {
        topic: '從 0 到 1 開發加密貨幣錢包 App (使用 React Native)',
        speaker: [{ name: 'Anderson Chen', img: 'anderson.jpg', url: 'https://anderson-chen.medium.com/' }],
      },
      {
        topic: '如何使用 web3.js 跟區塊鏈智能合約互動與進行資安審計',
        speaker: [{ name: '李婷婷', img: 'ting.jpeg', url: 'https://www.facebook.com/lee.ting.ting.tina' }],
      },
      {
        topic: '前端工程師也能搞得懂的區塊鏈',
        speaker: [{ name: 'Lucien Lee / 鹿尋', img: 'lucien.jpg', url: 'https://www.facebook.com/lucienlee.deer' }],
      },
      {
        topic: 'JS在生成式、演算藝術與NFT的應用',
        speaker: [{ name: '吳哲宇', img: 'cheyuwu.jpg', url: 'https://www.facebook.com/cheyuwu345/' }],
      },
      {
        topic: '【用 JavaScript 玩轉 #區塊鏈應用】座談',
        speaker: [
          { name: '（主持人）Simon', img: 'simon.jpg', url: '#' },
          { name: '吳哲宇', img: 'cheyuwu.jpg', url: 'https://www.facebook.com/cheyuwu345/' },
          { name: 'Anderson Chen', img: 'anderson.jpg', url: 'https://anderson-chen.medium.com/' },
          { name: '李婷婷', img: 'ting.jpeg', url: 'https://www.facebook.com/lee.ting.ting.tina' },
          { name: 'Lucien Lee / 鹿尋', img: 'lucien.jpg', url: 'https://www.facebook.com/lucienlee.deer' },
        ],
      },
    ],
  },
  {
    time: '12:00 - 12:05',
    category: null,
    topic: [{
      topic: '換場休息',
      speaker: [],
    }],
  },
  {
    time: '12:05 - 12:40',
    category: '#技術社群參與',
    topic: [{
      topic: '【參與 #技術社群 教會你的事】座談',
      speaker: [
        { name: '（主持人）Caesar', img: 'default.jpg', url: 'https://blog.caesarchi.com/' },
        { name: '范聖佑', img: 'shengyou.jpeg', url: 'https://www.facebook.com/kraftsman.io/' },
        { name: 'Richard 強哥', img: 'richard.jpg', url: 'https://fb.me/legist' },
      ],
    }],
  },
  {
    time: '12:40 - 13:50 中午休息',
    category: null,
    topic: [{
      topic: '中午休息',
      speaker: [],
    }],
  },
  {
    time: '13:50 - 15:10',
    category: '#前端開發與框架',
    topic: [
      {
        topic: '窮途末路的 SPA，堅持 CSR 到放棄',
        speaker: [{ name: '徐愷', img: 'kkshyu.jpg', url: 'https://www.facebook.com/weblab.tw/' }],
      },
      {
        topic: '為什麼許多公司都願意導入 Next.js',
        speaker: [{ name: '邱柏鈞 Leo', img: 'leo.jpeg', url: 'https://medium.com/@airwaves' }],
      },
      {
        topic: '選擇 Svelte 的三個理由',
        speaker: [{ name: '愷開（Kalan）', img: 'kalan.png', url: 'https://twitter.com/kalanyei' }],
      },
      {
        topic: '【後框架時代對前端開發者的影響】座談',
        speaker: [
          { name: '（主持人）維元', img: 'weiyuan.jpeg', url: 'https://www.facebook.com/v123582' },
          { name: '邱柏鈞 Leo', img: 'leo.jpeg', url: 'https://medium.com/@airwaves' },
          { name: '徐愷', img: 'kkshyu.jpg', url: 'https://www.facebook.com/weblab.tw/' },
        ],
      },
    ],
  },
  {
    time: '15:10 - 15:20',
    category: null,
    topic: [{
      topic: '下午場休息',
      speaker: [],
    }],
  },
  {
    time: '15:20 - 17:00',
    category: '#語言特性與後端技術',
    topic: [
      {
        topic: '在你的庭院種一棵Elm',
        speaker: [{ name: 'Paipo', img: 'paipo.jpg', url: 'https://webhack.connpass.com/' }],
      },
      {
        topic: 'JavaScript 模組進化論 - 模組化的演進與實戰',
        speaker: [{ name: 'Mujing', img: 'mujing.jpeg', url: 'https://www.facebook.com/mujing/' }],
      },
      {
        topic: '從前端邁向全端 - 前端開發者不該錯過的 Serverless 技術',
        speaker: [{ name: '莫力全 Kyle Mo', img: 'kyle.jpeg', url: 'https://medium.com/@oldmo860617' }],
      },
      {
        topic: 'Memory Leak 與你的距離',
        speaker: [{ name: 'Kuan', img: 'kuan.jpg', url: 'https://vocus.cc/user/@kuan' }],
      },
      {
        topic: '【回歸 JavaScript 本質與初心】座談',
        speaker: [
          { name: '（主持人）PJCHENder', img: 'chen.jpeg', url: 'https://www.facebook.com/pjchender/' },
          { name: 'Kuan', img: 'kuan.jpg', url: 'https://vocus.cc/user/@kuan' },
          { name: 'Paipo', img: 'paipo.jpg', url: 'https://webhack.connpass.com/' },
        ],
      },
    ],
  },
  {
    time: '17:00 - 17:05',
    category: null,
    topic: [{
      topic: '換場休息．',
      speaker: [],
    }],
  },
  {
    time: '17:05 - 17:40',
    category: '#資深職涯發展',
    topic: [{
      topic: '【資深開發者的下一步？】座談',
      speaker: [
        { name: '（主持人）Caesar', img: 'default.jpg', url: 'https://blog.caesarchi.com/' },
        { name: 'Will 保哥', img: 'will.jpg', url: 'https://www.facebook.com/will.fans' },
        { name: 'Ant 曾義峰', img: 'ant.jpg', url: 'https://fb.com/yftzeng.tw' },
      ],
    }],
  },
  {
    time: '17:40 - 17:50',
    category: null,
    topic: [{
      topic: 'JSDC 2022 閉幕',
      speaker: [],
    }],
  },
];
</script>

<style lang="scss">
.content_title {
  @apply text-white;
}
.timesheet {
  @apply text-gray-800;
  @apply bg-white;
  @apply bg-opacity-80;
  @apply px-5;
  @apply mx-2;
  @apply text-lg;
  @apply max-w-5xl;
  @apply rounded-md;
  @apply border-4;
  @apply border-yellow-500;
  @apply border-dashed;
  .timesheet-cate {
    @apply flex-1;
    @apply border-none;
    @apply items-center;
  }
  .topic-category {
    @apply bg-blue-600;
    @apply bg-opacity-95;
    @apply rounded-lg;
    @apply text-white;
    @apply max-w-max;
    @apply px-2;
    @apply py-1;
    @apply text-xs;
    @apply mr-4;
    @media screen and (min-width: $tablet-size) {
      @apply text-base;
      @apply m-auto;
    }
  }
  .time {
    @apply text-sm;
    @apply mr-4;
    @media screen and (min-width: $tablet-size) {
      @apply text-base;
      @apply m-auto;
    }
  }
  .timesheet-col {
    @apply flex;
    @apply items-center;
    &:not(:last-child) {
      @apply border-b-2;
      @apply border-dashed;
      @apply border-yellow-500;
    }
    .topic {
      @apply px-8;
      @apply py-4;
      @apply border-l-2;
      @apply border-dashed;
      @apply border-yellow-500;
      flex: 2 0 30%;
      .topic-title,
      .topic-speaker {
        @apply text-left;
        @apply pt-1;
      }
      .topic-title {
        @apply text-xl;
      }
      .speker-icon {
        @apply rounded-full;
        @apply overflow-hidden;
        max-width: 56px;
        height: 56px;
      }
      .topic-category{
        @apply ml-0;
      }
      & > div ~ div {
        @apply mt-4;
      }
      @media screen and (min-width: $tablet-size) {
        & .topic-title {
          @apply text-2xl;
        }
      }
    }
  }
  @media screen and (min-width: $tablet-size) {
    @apply m-auto;
  }
}
</style>
