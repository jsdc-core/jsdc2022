<template>
  <article class="container">
    <img src="@/assets/images/realStuff/whiteBoard.jpg" class="board hidden lg:inline-block lg:max-w-4xl">
    <div class="conduct-content bg-white bg-opacity-30 lg:bg-transparent lg:absolute mx-2 mb-8 py-5 rounded-b-lg">
      <div class="content_title text-white lg:text-black pt-5">
        行為準則
      </div>
      <div class="content_main text-white lg:text-black px-5 text-left">
        <p class="mt-5 px-5">
          JSDC 致力於為社群中的每位成員提供更自由、友善、開放的環境。我們相信每位參與社群活動的夥伴，不論年齡、性別、性傾向、外貌、職業、軟體偏好、種族或宗教信仰等，都值得被尊重。而我們會盡力提供最安全的環境，
          讓參與 JSDC 的每位朋友能夠在社群中相互扶助、成長，並在其中綻放自己生命的光芒。
        </p>
        <p class="mt-5 px-5">因此，我們希望 JSDC 的與會者，無論您是以會眾、贊助商、工作人員、或是講者的身份參加活動，皆能遵守以下的行為準則：</p>
        <ol class="rule-list mt-7 pl-9 text-blue-600">
          <li class="mt-3">尊重每一位參與者，避免使用帶有侮辱、歧視、貶低、或具有潛在騷擾意涵的言語及手勢。</li>
          <li class="mt-3">體貼他人，若您不確定是否會冒犯他人，那請詢問朋友或他人給你一些建議。</li>
          <li class="mt-3">若您遇到任何你認為不舒服的情況發生，適時尋求工作人員的協助。</li>
        </ol>
        <div class="mt-5 px-5">若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 JSDC 工作人員的協助。</div>
        <div class="mt-5 px-5">如有會眾違反了此準則的行為，JSDC 籌備團隊可採取任何適合的行動，包含警告或將騷擾者驅離會場，並且不退還費用，必要者會移送警察機關等法辦單位。</div>
      </div>
    </div>
    <help-tooling words="問" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import HelpTooling from '@/components/layout/HelpTooling.vue';

const redirectUrl = ref('https://forms.gle/zagmrUpA5RC9xZc8A');
</script>

<style lang="scss">
.board {
  @media screen and (min-width: $laptop-size) {
    filter: blur(10px);
  }
}
.conduct-content {
  @apply rounded-3xl;
  @media screen and (min-width: $laptop-size) {
    @apply absolute;
    @apply w-full;
    @apply max-w-4xl;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
}
ol {
  list-style-type: square;
}
</style>
