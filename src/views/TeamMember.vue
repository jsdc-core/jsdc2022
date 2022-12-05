<template>
  <article class="container">
    <h1 class="text-center text-white font-bold text-3xl mb-28">JSDC 工作人員</h1>
    <div class="member-card flex flex-col md:flex-row md:flex-wrap justify-between">
      <figure class="text-white m-5" v-for="pl in memberData" :key="pl.name">
        <img class="rounded-full mb-5 w-full" :src="pl.picPath" :alt="pl.name" title="JSDC 工作人員">
        <figcaption class="text-xl">{{pl.name}}</figcaption>
      </figure>
    </div>
    <help-tooling words="問" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script>
import HelpTooling from '@/components/layout/HelpTooling.vue';

const defaultImage = require('@/assets/images/common/logo.jpg');
const imgWei = require('@/assets/images/speaker/weiyuan.jpeg');
const imgMa = require('@/assets/images/member/ma.jpg');
const imgHorken = require('@/assets/images/member/horken.jpg');

export default {
  data() {
    return {
      redirectUrl: 'https://forms.gle/zagmrUpA5RC9xZc8A',
      memberData: [
        { name: 'Caesar', picPath: defaultImage },
        { name: '維元 (Wei)', picPath: imgWei },
        { name: 'Ma', picPath: imgMa },
        { name: 'Horken', picPath: imgHorken },
      ],
    };
  },
  components: {
    HelpTooling,
  },
};
</script>

<style lang="scss">
figure {
  width: 80%;
  @apply self-center;
  @media screen and (min-width: $mobile-size) {
    max-width: 20%;
  }
}
</style>
