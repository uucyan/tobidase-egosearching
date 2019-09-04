<template>
<section class="container">
  <nuxt-link to="/egosearch">
    <img
      src='/logo.png'
      alt="とびだせ エゴサーチ！"
      class="logo animated bounceIn delay"
    />
  </nuxt-link>
</section>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: 'preload', as: 'style', href: '/animate.min.css' },
        { rel: 'preload', href: '/logo.png', as: 'image' },
        { rel: 'preload', href: '/top_background_pc.png', as: 'image' },
        { rel: 'preload', href: '/top_background_phone.png', as: 'image' },
      ]
    }
  },
  // transition: {
  //   name: 'zoom',
  //   enterActiveClass: 'animated bounceIn',
  // },
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
}

.logo {
  width: 100%;
}

.delay {
  animation-delay: 0.3s;
}
</style>
