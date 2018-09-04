<template>
<section class="container">
  <!-- <div class="background"> -->
  <div>
    <img src='@/static/logo_and_pasupare.png' alt="ガルパピコ パスパレ" class="logo2 animated bounceIn"/>
  </div>
  <!-- <div class="title">
    <img src='@/static/logo-and-pasupare.png' alt="ガルパピコ パスパレ" class=""/> -->
    <!-- <div class="logo">
      <img src='@/static/piko-pasupare.png' alt="ガルパピコ パスパレ" class="piko-pasupare"/>
    </div> -->
    <!-- <div class="piko-pasupare">
      <img src='@/static/tobidase-egosearching-logo.png' alt="ガルパピコ パスパレ" class="logo"/>
    </div> -->
    <!-- <img src='@/static/tobidase-egosearching-logo.png' alt="ロゴ" class="logo"/> -->
    <!-- <img src='@/static/piko-pasupare.png' alt="ガルパピコ パスパレ" class="piko-pasupare"/> -->
    <!-- <h1 class="title">
      とびだせ
    </h1>
    <h1 class="title">
      エゴサーチ
    </h1> -->
    <!-- <h2 class="subtitle">
      とびだせ エゴサーチ
    </h2> -->
    <!-- <el-button type="primary" icon="el-icon-search">Search</el-button> -->
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
  // padding: 52.5% 0 0;
  background: url("/background.jpg") center center / cover no-repeat fixed;
  // background-size: cover;
  // background-size: auto 100vh;
  // width: 100%;
  // padding-top: 20%;
}

.title {
  position: relative;
  // text-align: center;
}

.background {
  // width: 100%;
  // margin: 68px 0 0;
  padding: 52.5% 0 0;
  background: url("/background.jpg") 0 0 no-repeat;
  background-size: cover;
  // position: relative;
}

.logo2 {
  // background-size: cover;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  // margin: 0 auto;
  width: 100%;
}

.logo {
  // padding: 52.5% 0 0;
  // background: url("/tobidase-egosearching-logo.png") 0 0 no-repeat;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  // margin: 0 auto;
  // width: 100%;
  // background: url("/tobidase-egosearching-logo.png") 0 0 no-repeat;
  // top: 50pt;
  // left: 50%;
  // background-size: cover;
  position: absolute;
}

.piko-pasupare {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  background: url("/piko-pasupare.png") 0 0 no-repeat;
  background-size: cover;
  // width: 100%;
  // position: absolute;
  position: relative;
  // top: 0%;
  // left: 0%;
}

// .idx-Keyvisual_Logo {
//   width: 32.13542%;
//   position: absolute;
//   top: 23.71032%;
//   left: 33.95833%;
//   -webkit-transform: scale(0);
//   -ms-transform: scale(0);
//   transform: scale(0);
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
// }
</style>
