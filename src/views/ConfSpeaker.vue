<template>
  <article class="container">
    <water-full :gap="45" :items="speaker">
      <template #default="{ item }">
        <div class="speaker m-2 lg:m-auto">
          <figure class="speaker-photo">
            <img class="block m-auto" :src="require(`@/assets/images/speaker/${item.img}`)" :alt="item.name">
          </figure>
          <h2 class="speaker-name">{{item.name}}</h2>
          <h4 class="speaker-organ">{{item.organ}}</h4>
          <h4 class="speaker-social mt-2">
            <a v-if="item.repo" :href="item.repo" class="inline-block mr-3">
              <img class="w-7" src="@/assets/images/common/github.svg" :alt="`${item.name} github repo`" :title="item.name">
            </a>
            <a v-if="item.social" :href="item.social" class="inline-block">
              <img class="w-7" src="@/assets/images/common/other.svg" :alt="`${item.name} social media site`" :title="item.name">
            </a>
          </h4>
          <h4 class="speaker-desc">{{item.desc}}</h4>
        </div>
      </template>
    </water-full>
    <help-tooling words="問" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import HelpTooling from '@/components/layout/HelpTooling.vue';
import WaterFull from '@/components/layout/WaterFull.vue';

const redirectUrl = ref('https://forms.gle/zagmrUpA5RC9xZc8A');
const speaker = [{
  name: 'Paipo',
  img: 'paipo.jpg',
  organ: '',
  repo: 'http://github.com/pptang',
  social: 'https://webhack.connpass.com/',
  desc: 'Paipo 是一個前端工程師，目前旅居日本。對程式語言、型別系統、編譯器、瀏覽器運作有興趣，喜歡做工作以外的工作，也喜歡學習後做技術輸出。',
},
{
  name: '李婷婷',
  img: 'ting.jpeg',
  organ: 'The Z Institute/Founder',
  repo: 'https://github.com/tina1998612',
  social: 'https://www.facebook.com/lee.ting.ting.tina',
  desc: `李婷婷從 18 歲開始自學程式與區塊鏈，現為 The Z Institute 區塊鏈線上學院創辦人、加密貨幣私募基金恆新資本研究員、與區塊鏈資安審計公司 Certik 工程師，曾共同創辦圖靈鏈科技擔任技術長，與加州柏克萊大學區塊鏈研究院受邀學者，任金馬獎入圍
        SELFPICK 電影技術指導，於微軟亞太區人工智能部門擔任顧問，並發表過三篇區塊鏈論文於權威論壇ACM與IEEE，並在德國慕尼黑MobiSys獲頒全球最佳論文。此外，也是知名 Medium 專欄作者筆括密碼貨幣與區塊鏈，為全球前 20 大中文Medium作家，逾
        5000 位全球訂閱者，亦開設台灣銷量第一的中文區塊鏈線上課程，吸引逾 1600 位購課學員。曾獲香港科技大學年度傑出研究獎、香港區工程學院年度卓越獎學金等數十項學術獎項，與擔任 JP Morgan, Deloitt, HTC, Acer, KPMG,
        中華電信等知名企業特聘內訓講師。報導於商業周刊、天下雜誌、遠見雜誌封面、數位時代封面、電子時報等各大媒體均有刊出。`,
},
{
  name: '莫力全 Kyle Mo',
  img: 'kyle.jpeg',
  organ: 'OneDegree/Software Engineer',
  repo: 'https://github.com/kylemocode',
  social: 'https://medium.com/@oldmo860617',
  desc: '剛步入職場不久的菜雞，熱愛 Web 開發相關技術。在 StarBugs Weekly 擔任專欄寫手並擔任 BESG Web 技術分享會發起人，希望可以將自己的熱血傳染給其他人。',
},
{
  name: '愷開（Kalan）',
  img: 'kalan.png',
  organ: 'LINE Fukuoka',
  repo: 'https://github.com/kjj6198',
  social: 'https://twitter.com/kalanyei',
  desc: '平時喜歡從不同角度切入，探索其他領域可以如何和前端整合。最近致力於推廣 Svelte，許多個人小專案也都使用 Svelte 撰寫。創辦 Facebook 社團 Svelte.js Taiwan，希望透過持續分享的方式讓 Svelte 在台灣可以帶來更多討論。',
},
{
  name: 'Wolke Lin , 林建宏',
  img: 'wolke.jpg',
  organ: 'SOHO',
  repo: 'https://github.com/Wolke',
  social: 'https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e751',
  desc: 'LAE , GDE , 程式中一個迷途小書僮',
},
{
  name: 'Kuan',
  img: 'kuan.jpg',
  organ: '方格子 vocus',
  repo: '',
  social: 'https://vocus.cc/user/@kuan',
  desc: '方格子 vocus 前端工程師， 熱愛教學、歷史、搖滾樂。現在的目標是和團隊一起打造出人人都可以舒適閱讀的環境。',
},
{
  name: 'Lucien Lee / 鹿尋',
  img: 'lucien.jpg',
  organ: 'Pelith/CEO',
  repo: 'https://github.com/LucienLee',
  social: 'https://www.facebook.com/lucienlee.deer',
  desc: '前美商 Scalable, Tech Lead / Cofacts 真的假的, Cofounder ，一路與 JS 相伴打滾過不少新創公司，相信科技與知識的共享能引發革命。',
},
{
  name: 'PJCHENder',
  img: 'chen.jpeg',
  organ: 'OneDegree',
  repo: 'https://github.com/pjchender',
  social: 'https://www.facebook.com/pjchender/',
  desc: '光看著編輯器配色就覺得開心，一天不敲鍵就覺得不對勁。對資訊科技充滿熱情，喜歡學習 Know-How，致力於透過資訊科技的力量，帶給人們更幸福與便利的生活。',
},
{
  name: 'Mujing',
  img: 'mujing.jpeg',
  organ: 'Snapask',
  repo: 'https://github.com/moojing',
  social: 'https://www.facebook.com/mujing/',
  desc: '前端工程師、非軟體本科系的自學者、喜好爵士樂的技術人。因想更靠近產品的使用者，所以決定從原來硬體科系跨足至網頁前端領域，現擁有三年前端相關的開發經驗。樂於藉由寫文章來分享知識，希望能將各種複雜抽象的知識化為具體單純的概念並以此幫助更多人。',
},
{
  name: 'C. T. Lin',
  img: 'ctlin.jpeg',
  organ: '',
  repo: 'https://github.com/chentsulin',
  social: 'https://www.facebook.com/chentsulin',
  desc: `JavaScript 全端架構師，特別專注於 React、Node.js 與 GraphQL 等領域。對軟體的架構演進非常感興趣，前端從多年前開始獨鍾 React，看著 React 一路從 React.createClass 來到 Function Component 以及
        Hook，而依然期待後續的發展。GraphQL Taiwan 社群的 Co-founder，希望能藉由多年 GraphQL 經驗，在台灣推廣 GraphQL 技術。熱愛 Open Source 專案與貢獻，時常對大大小小的專案發出 Pull Request，自己比較知名的專案則為
        Electron React Boilerplate、Awesome GraphQL、Bottender。`,
},
{
  name: '吳哲宇',
  img: 'cheyuwu.jpg',
  organ: '墨雨設計/創辦人',
  repo: 'https://github.com/frank890417',
  social: 'https://www.facebook.com/cheyuwu345/',
  desc: `吳哲宇，墨雨設計創辦人，跨領域新媒體藝術家、設計師、工程師、講師與創業者，喜歡新奇古怪的事物。藉由理性電機工程背景與感性視覺設計的混合，從自然、物理、現代藝術、數學韻律、音樂中取材，創造複合生成式的演算作品，探索藝術與工程的邊界以及極致的互動體驗。
          近年致力於推廣程式藝術，於Hahow開設動態網頁與互動藝術程式創作課程，引領超過萬名同學進入互動設計的世界。`,
},
{
  name: '邱柏鈞 Leo',
  img: 'leo.jpeg',
  organ: 'Hahow/Frontend Engineer',
  repo: 'https://github.com/leochiu-a',
  social: 'https://medium.com/@airwaves',
  desc: '剛步入職場的菜雞，現任 Hahow 2B 前端工程師。在 StarBugs Weekly 擔任專欄寫手，並且經營有「手寫筆記」個人部落格，喜歡寫文章分享知識，希望讓更多人熱愛前端技術。',
},
{
  name: 'Sam Huang',
  img: 'sam.jpg',
  organ: 'RevtelTech 忻旅科技',
  repo: 'https://github.com/sailplaneTW',
  social: 'https://www.facebook.com/sailplaneTW/',
  desc: 'RevtelTech 忻旅科技共同創辦人。逐步由底層走向上層的軟體人，工程生涯始於嵌入式系統，途經驅動程式、Android 框架再到網頁、APP 及區塊鏈。過往曾協助包含 IoT、電商、印刷、金融、醫療及旅宿等多個領域的顧問及開發，持續尋找技術和商業模式之間的平衡。',
},
{
  name: 'Anderson Chen',
  img: 'anderson.jpg',
  organ: 'Coinomo',
  repo: 'https://github.com/Ankarrr',
  social: 'https://anderson-chen.medium.com/',
  desc: `Anderson 目前是 Coinomo 共同創辦人暨 CTO。他也是 Dapp Pocket 創辦人暨 CEO，並在 2022 年被新加坡創投 Turn Capital 收購。Anderson
          畢業於交大資工系和台大資訊網路與多媒體研究所，並在研究所時就開始區塊鏈技術研究並發表相關論文，亦曾參與開發台灣的第一個區塊鏈協議 Gcoin，及曾在多間區塊鏈新創公司任職。此外他也開發 Open Source 的加密貨幣錢包 SDK
          並獲得 Ethereum Foundation Grant。`,
},
{
  name: '徐愷',
  img: 'kkshyu.jpg',
  organ: 'KOLABLE / CTO',
  repo: 'https://github.com/kkshyu',
  social: 'https://www.facebook.com/weblab.tw/',
  desc: 'Web 實驗室發起人，致力於打造良好的交流環境。',
},
{
  name: '范聖佑',
  img: 'shengyou.jpeg',
  organ: 'JetBrains Developer Advocate',
  repo: 'https://github.com/shengyou',
  social: 'https://www.facebook.com/kraftsman.io/',
  desc: `JetBrains 技術傳教士，負責推廣 Kotlin 程式語言、JetBrains 系列 IDE 及團隊合作解決方案。工作因素加上好奇心始然，常常實驗將 Kotlin
          應用到不同領域，並試著以通俗易懂的方式將技術名詞講到人人能吸收。工作之餘也熱血經營技術社群，常在各社群聚會裡出沒，歡迎拍打餵食。`,
},
{
  name: 'Richard 強哥',
  img: 'richard.jpg',
  organ: '開源社',
  repo: 'https://github.com/legist',
  social: 'https://fb.me/legist',
  desc: 'JSDC 2012-13 核心組織者，COSCUP 長期貢獻者，開源社聯合創始人暨理事會成員。現任職於華為，擔任華為雲 AI 開發者生態總監。耕耘開源十多年，專注於開源/開發者生態、開源治理、社區運營及商業模式等領域。',
},
{
  name: 'Will 保哥',
  img: 'will.jpg',
  organ: '多奇數位創意有限公司',
  repo: 'https://github.com/doggy8088',
  social: 'https://www.facebook.com/will.fans',
  desc: `現任「多奇數位創意有限公司」技術總監。2018 年榮獲 Angular 方向的 Google Developer Expert (GDE) 開發專家。連續 14 度當選微軟最有價值專家(MVP)。
          2019 獲選微軟技術社群區域總監 (Microsoft Regional Director)。熟悉 Angular、JavaScript、.NET、C#、ASP.NET MVC、Go、Docker、Kubernetes 相關技術。`,
},
{
  name: 'Ant 曾義峰',
  img: 'ant.jpg',
  organ: '台灣資安技術社群 CHROOT / TGO Networks',
  repo: 'https://twitter.com/yftzeng',
  social: 'https://fb.com/yftzeng.tw',
  desc: '略懂軟體、資安、法律與商業。做過顧問、寫過專利、當過 CTO、創過業。一生經歷數次失敗，劇情雖不足以寫成《人月神話》或《鳳凰計畫》，但過程點滴，都是種磨練與成長。成功雖難以複製，但或許得以從我的失敗中借鏡。',
},
{
  name: 'Simon Sun',
  img: 'simon.jpg',
  organ: 'JSDC 議程組',
  repo: 'https://github.com/SimonSun1988',
  social: '',
  desc: '對於 JavaScript 的熱愛勝於一切。',
},
{
  name: 'NiJia Lin',
  img: 'nijia.jpeg',
  organ: 'LINE',
  repo: 'https://github.com/louis70109',
  social: 'https://www.facebook.com/groups/linebot',
  desc: 'LINE Taiwan 開發者關係與技術推廣部的開發技術推廣工程師。主要負責 LINE 開發技術推廣，技術品牌的宣傳與社群關係經營。平時熱衷於關注技術趨勢與技術社群參與，希望透過技術分享幫助加入開源領域的新苗們，並同時為 LINE Bot SDK 維護者之一。',
},
{
  name: '張維元',
  img: 'weiyuan.jpeg',
  organ: 'JSDC 議程組',
  repo: 'https://github.com/v123582',
  social: 'https://www.facebook.com/v123582',
  desc: `擅長網站開發與資料科學的雙棲工程師，斜槓於程式社群 【JSDC】核心成員及 【資料科學家的工作日常】粉專經營。目前在 ALPHACamp 擔任資料工程師，同時也在中華電信、工研院與多所學校等單位持續開課。擁有多次國內大型技術會議講者與競賽獲獎經驗，曾獲得 2018
          台灣總統盃黑客松 冠軍隊伍與 2016 微軟 Imagine Cup 台灣區冠軍，持續在不同的平台發表對 #資料科學、 #網頁開發 或 #軟體職涯 相關的分享。`,
}];
</script>

<style lang="scss">
.speaker {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply bg-white;
  @apply rounded-3xl;
  @apply bg-opacity-80;
  @apply p-5;
  @apply text-gray-800;
  .speaker-photo {
    @apply rounded-full;
    @apply overflow-hidden;
    @apply object-fill;
    max-width: 200px;
    height: 200px
  }
  .speaker-name {
    @apply font-bold;
    @apply text-2xl;
    @apply mt-3;
  }
  .speaker-desc {
    @apply mt-2;
    @apply px-4;
    @apply py-1;
    @apply max-h-40;
    @apply text-justify;
    @apply overflow-y-auto;
    @apply border-2;
    @apply border-dashed;
    @apply border-yellow-500;
    @apply rounded-lg;
  }
}
</style>
