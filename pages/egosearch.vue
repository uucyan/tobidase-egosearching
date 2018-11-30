<template>
<section id="continer" class="container tv-off">
  <div v-show="isShowSearchForm" class="search-form">
    <img
      src='@/static/egoogle.png'
      alt="Egoogle"
      class="search-logo"/>
    <el-input placeholder="" v-model="searchWord" class="input-with-select">
      <el-select v-model="searchUrl" slot="prepend" placeholder="" class="select-box">
        <el-option-group
          v-for="group in searchTargets"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.label"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchByTarget"></el-button>
    </el-input>
  </div>
</section>
</template>

<script>
export default {
  head () {
    return {
      link: [
        { rel: 'preload', href: '/egosearch_background_pc_tv_on.png', as: 'image' },
        { rel: 'preload', href: '/egosearch_background_tablet_tv_on.png', as: 'image' },
        { rel: 'preload', href: '/egosearch_background_phone_tv_on.png', as: 'image' },
        { rel: 'preload', href: '/egosearch_background_pc_tv_off.png', as: 'image' },
        { rel: 'preload', href: '/egosearch_background_tablet_tv_off.png', as: 'image' },
        { rel: 'preload', href: '/egosearch_background_phone_tv_off.png', as: 'image' },
        { rel: 'preload', href: '/egoogle.png', as: 'image' },
      ]
    }
  },
  data() {
    return {
      isShowSearchForm: false,
      searchWord: "丸山 彩",
      searchUrl: "",
      searchTargets: [{
        label: 'SNS',
        options: [{
          label: 'Twitter',
          value: 'https://twitter.com/search?q='
        }, {
          label: 'Mastodon',
          value: 'http://mastodonsearch.jp/cross/?q='
        }, {
          label: 'Instagram',
          value: 'https://www.instagram.com/explore/tags/'
        }]
      }, {
        label: '検索エンジン',
        options: [{
          label: 'Google',
          value: 'https://www.google.co.jp/search?q='
        }, {
          label: 'Yahoo',
          value: 'https://search.yahoo.co.jp/search?ei=UTF-8&p='
        }, {
          label: 'Bing',
          value: 'https://www.bing.com/search?q='
        }, {
          label: 'DuckDuckGo',
          value: 'https://duckduckgo.com/?q='
        }, {
          label: 'Qwant',
          value: 'https://www.qwant.com/?q='
        }, {
          label: 'Yandex',
          value: 'https://yandex.com/search/?text='
        }]
      }],
    };
  },
  created: function() {
    // Googleを初期値にする
    this.searchUrl = this.searchTargets[1].options[0].value
    // 1.3秒後にテレビをON状態にする
    setTimeout(this.tvOn, 1300)
  },
  methods: {
    searchByTarget() {
      let word = this.searchWord
      // Instagram の場合は半角全角スペースを削除する
      if (this.searchUrl == 'https://www.instagram.com/explore/tags/') {
        word = word.replace(/\s+/g, "")
      }
      window.open(this.searchUrl + word)
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
}

.tv-on {
  background: url("/egosearch_background_pc_tv_on.png") center center / cover
    no-repeat fixed;
  @media screen and (max-width: 1100px) {
    background: url("/egosearch_background_tablet_tv_on.png") center center / cover
      no-repeat;
  }
  @media screen and (max-width: 760px) {
    background: url("/egosearch_background_phone_tv_on.png") center center / cover
      no-repeat;
  }
}

.tv-off {
  background: url("/egosearch_background_pc_tv_off.png") center center / cover
    no-repeat fixed;
  @media screen and (max-width: 1100px) {
    background: url("/egosearch_background_tablet_tv_off.png") center center / cover
      no-repeat;
  }
  @media screen and (max-width: 760px) {
    background: url("/egosearch_background_phone_tv_off.png") center center / cover
      no-repeat;
  }
}

.search-form {
  top: 35%;
  bottom: 50%;
  left: 18%;
  right: 36%;
  position: absolute;
  @media screen and (max-width: 1100px) {
    padding-bottom: 30%;
    width: 90%;
    position: static;
  }
}

.search-logo {
  margin-bottom: 30px;
  @media screen and (max-width: 320px) {
    width: 100%;
  }
}

.select-box {
  width: 120px;
   @media screen and (max-width: 200px) {
    width: 100%;
  }
}
</style>
