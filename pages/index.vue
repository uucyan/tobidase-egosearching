<template>
<section class="container">
  <div>
    <img src='@/static/logo.png' alt="とびだせ エゴサーチ！" class="logo animated bounceIn"/>
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
  background: url("/background.jpg") center center / cover no-repeat fixed;
}

.logo {
  width: 100%;
}
</style>
