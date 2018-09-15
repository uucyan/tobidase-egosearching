<template>
<section class="container">
  <div class="search-form">
    <el-input placeholder="" v-model="searchWord" class="input-with-select">
      <el-select v-model="searchUrl" slot="prepend" placeholder="" class="select-box">
        <el-option v-for="(value, key) in searchTargets" :key="key" :label="key" :value="value"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchByTarget"></el-button>
    </el-input>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "丸山 彩",
      searchUrl: "",
      searchTargets: {
        Google: 'https://www.google.co.jp/search?q=',
        Twitter: 'https://twitter.com/search?q=',
        Mastodon: 'http://mastodonsearch.jp/cross/?q=',
        Yahoo: 'https://search.yahoo.co.jp/search?ei=UTF-8&p=',
        Bing: 'https://www.bing.com/search?q=',
        DuckDuckGo: 'https://duckduckgo.com/?q=',
        Qwant: 'https://www.qwant.com/?q=',
        Yandex: 'https://yandex.com/search/?text=',
      }
    };
  },
  created: function() {
    this.searchUrl = this.searchTargets.Google
  },
  methods: {
    searchByTarget() {
      window.open(this.searchUrl + this.searchWord);
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
  // background: url("/background_piko_pasupare_tv.png") center center / cover
  //   no-repeat fixed;
  // background: url("/egosearch_background_pc.png") center no-repeat;
  background: url("/egosearch_background_pc.png") center center / cover
    no-repeat fixed;
  // background: url("/egosearch_background_pc.png") center center no-repeat;
  // background-size: 100% 100%;
  // background-size: 100% 100%;
  // max-height: 80%;
  @media screen and (max-width: 760px) {
    // background: url("/egosearch_background_phone.png") center no-repeat;
    background: url("/egosearch_background_phone.png") center center / cover
      no-repeat;
    // background-size: 100% 100%;
  }
}

.search-form {
  // width: 600px;
  left: 18%;
  right: 36%;
  // left: 18%;
  // right: 37%;
  position: absolute;

  // @media screen and (max-width: 1230px) {
  //   width: 600px;
  //   left: 20%;
  //   position: absolute;
  // }
  // @media screen and (max-width: 1080px) {
  //   width: 600px;
  //   position: static;
  // }
  @media screen and (max-width: 760px) {
    width: 80%;
    position: static;
  }
  @media screen and (max-width: 430px) {
    width: 90%;
    position: static;
  }
}

.select-box {
  width: 100px;
  // background-color: #ff9fca;
  // color: #fff;
}

.search-button {
  background-color: #ff9fca;
}

// .el-select .el-input {
//   width: 110px;
// }

.input-with-select .el-input-group__prepend {
  background-color: #ff9fca;
}
</style>
