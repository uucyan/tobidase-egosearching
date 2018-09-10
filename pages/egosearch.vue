<template>
<section class="container">
</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  // background: url("/background_piko_pasupare_tv.png") center center / cover
  //   no-repeat fixed;
  // background: url("/egosearch_background_pc.png") center no-repeat;
  background: url("/egosearch_background_pc.png") center center / cover
    no-repeat fixed;
  // background: url("/egosearch_background_pc.png") center center no-repeat;
  // background-size: 100% 100%;
  // background-size: 100% 100%;
  // max-height: 80%;
  @media screen and (max-width: 1080px) {
    // background: url("/egosearch_background_phone.png") center no-repeat;
    background: url("/egosearch_background_phone.png") center center / cover
      no-repeat;
    // background-size: 100% 100%;
  }
}
</style>
