<template>
<div class='background'>
  <nuxt/>
</div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  &:before,
  &:after {
    box-sizing: border-box;
    margin: 0;
  }
}

.background {
  background-position: 0 0;
  animation: bgroop 20s linear infinite;
  -webkit-animation: bgroop 20s linear infinite;
  -moz-animation: bgroop 20s linear infinite;
  background: url("/top_background_pc.png") repeat-y;
  @media screen and (max-width: 1080px) {
    background: url("/top_background_phone.png") repeat-y;
  }
}

@-webkit-keyframes bgroop {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -946px;
    @media screen and (max-width: 1080px) {
      background-position: 0 -1920px;
    }
  }
}
@keyframes bgroop {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -946px;
    @media screen and (max-width: 1080px) {
      background-position: 0 -1920px;
    }
  }
}
@-moz-keyframes bgroop {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -946px;
    @media screen and (max-width: 1080px) {
      background-position: 0 -1920px;
    }
  }
}
</style>
