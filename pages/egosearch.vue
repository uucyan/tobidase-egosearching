<template>
<section id="continer" class="container tv-off">
  <div v-if="isShowSearchForm" class="search-form">
    <img
      src='@/static/egoogle.png'
      alt="Egoogle"
      class="search-logo"
    />
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
      isShowSearchForm: false,
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
    setTimeout(this.tvOn, 1300)
  },
  methods: {
    searchByTarget() {
      window.open(this.searchUrl + this.searchWord)
    },
    tvOn() {
      let continer = document.getElementById('continer')
      continer.className = 'container tv-on'
      this.isShowSearchForm = true
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

  // これ使ってた
  // background: url("/egosearch_background_pc.png") center center / cover
  //   no-repeat fixed;

  // background: url("/egosearch_background_pc.png") center center no-repeat;
  // background-size: 100% 100%;
  // background-size: 100% 100%;
  // max-height: 80%;

  // @media screen and (max-width: 760px) {
  //   // background: url("/egosearch_background_phone.png") center no-repeat;
  //   background: url("/egosearch_background_phone.png") center center / cover
  //     no-repeat;
  //   // background-size: 100% 100%;
  // }

}

.tv-on {
  background: url("/egosearch_background_pc.png") center center / cover
    no-repeat fixed;
  @media screen and (max-width: 760px) {
    background: url("/egosearch_background_phone.png") center center / cover
      no-repeat;
  }
}

.tv-off {
  background: url("/egosearch_background_pc_tv_off.png") center center / cover
    no-repeat fixed;
  @media screen and (max-width: 760px) {
    background: url("/egosearch_background_phone_tv_off.png") center center / cover
      no-repeat;
  }
}

.search-form {
  // width: 600px;
  top: 35%;
  bottom: 50%;
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
    padding-bottom: 30%;
    width: 90%;
    position: static;
  }
  // @media screen and (max-width: 430px) {
  //   padding-bottom: 30%;
  //   width: 90%;
  //   position: static;
  // }
}

.search-logo {
  margin-bottom: 30px;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
}

.select-box {
  width: 100px;
  // background-color: #ff9fca;
  // color: #fff;
   @media screen and (max-width: 200px) {
    width: 100%;
  }
}

.search-button {
  @media screen and (max-width: 200px) {
    width: 100%;
  }
}

// .el-select .el-input {
//   width: 110px;
// }

.input-with-select .el-input-group__prepend {
  background-color: #ff9fca;
}
</style>
