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
export default {
  head () {
    return {
      link: [
        { rel: 'preload', href: '/top_background_pc.png', as: 'image' },
        { rel: 'preload', href: '/top_background_phone.png', as: 'image' },
        { rel: 'preload', href: '/logo.png', as: 'image' },
      ]
    }
  }
};
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
    background: url("/top_background_phone.png") center center / cover no-repeat
      fixed;
  }
}

.logo {
  width: 100%;
}
</style>
