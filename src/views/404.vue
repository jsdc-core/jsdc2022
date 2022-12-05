<template>
  <div class="no_found-content flex items-center justify-center" style="">
    <div class="notfound-404 inline-block">
      <div class="notfound-title text-7xl uppercase text-red-600 text-center">
        <p class="error text-white p-4">o<span>o</span>ps!!</p>
        <p class="code text-red-600 p-4">4<span>0</span><span>4</span></p>
      </div>
      <div class="notfound-content p-10 text-white text-center">
        <p class="text-3xl">迷路了嗎？ 你要找的網頁似乎不存在！！</p>
        <button class="go_back mt-5 bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500"
                      @click="$router.push('/')">
            回去首頁看看
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton');
.no_found-content {
  min-height: calc(100vh - 30px);
}
.notfound-title {
  text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  font-family: 'Monoton', cursive,sans-serif;
  .error {
    &:hover {
      text-shadow: 0 0 200px #ffffff,0 0 80px #008000,0 0 6px #0000ff;
    }
    text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
    span {
      animation: upper 11s linear infinite;
    }
  }
  .code {
    &:hover {
      text-shadow: 0 0 100px red,0 0 40px FireBrick,0 0 8px DarkRed;
    }
    span {
      &:nth-of-type(2) {
        animation: lower 10s linear infinite;
      }
      &:nth-of-type(1) {
        text-shadow: none;
        opacity:.4;
      }
    }
  }
}
.go_back {
  @apply rounded;
  @apply text-white;
  @apply font-bold;
  @apply py-5;
  @apply px-4;
  @apply border-b-4;
  animation: glowing 1300ms infinite;
}

@keyframes upper {
  0%,19.999%,22%,62.999%,64%, 64.999%,70%,100% {
    opacity:.99; text-shadow: 0 0 80px #ffffff,0 0 30px #008000,0 0 6px #0000ff;
  }
  20%,21.999%,63%,63.999%,65%,69.999% {
    opacity:0.4; text-shadow: none;
  }
}
@keyframes lower {
  0%,12%,18.999%,23%,31.999%,37%,44.999%,46%,49.999%,51%,58.999%,61%,68.999%,71%,85.999%,96%,100% {
    opacity:0.99; text-shadow: 0 0 80px red,0 0 30px FireBrick,0 0 6px DarkRed;
  }
  19%,22.99%,32%,36.999%,45%,45.999%,50%,50.99%,59%,60.999%,69%,70.999%,86%,95.999% {
    opacity:0.4; text-shadow: none;
  }
}
@keyframes glowing {
  0% {
    @apply bg-blue-400;
    box-shadow: 0 0 5px rgb(96, 165, 250);
  }
  50% {
    @apply bg-blue-500;
    box-shadow: 0 0 20px rgb(59, 130, 246);
  }
  100% {
    @apply bg-blue-400;
    box-shadow: 0 0 5px rgb(96, 165, 250);;
  }
}
</style>
