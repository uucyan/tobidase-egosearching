<template>
<section class="container animated bounceIn">
  <div>
    <nuxt-link to="/egosearch">
      <img
        src='@/static/logo.png'
        alt="とびだせ エゴサーチ！"
        class="logo animated bounceIn"
      />
    </nuxt-link>
  </div>
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
  background: url("/top_background_pc.png") center center / cover no-repeat
    fixed;
  @media screen and (max-width: 1080px) {
    // background: url("/top_background_phone.png") center no-repeat;
    background: url("/top_background_phone.png") center center / cover no-repeat
      fixed;
    // background-size: 100% 100%;
    // background-size: 50% 100%;
  }
}

.logo {
  width: 100%;
}
</style>
