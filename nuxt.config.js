module.exports = {
  /*
   ** Headers of the page
   */
  mode: 'spa',
  head: {
    title: 'とびだせ エゴサーチ！',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'ガルパピコの第一話で紹介される、丸山 彩の二つ名「とびだせ エゴサーチ」をテーマにしたネタサイトです🎨'
      },
      {
        name: 'keywords',
        content: 'ガルパ ピコ,ガルパピコ,バンドリ,BanG Dream!,丸山彩,丸山 彩,エゴサ'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'animate.min.css' },
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#FFA2C3',
    background: 'white'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['element-ui']
  },
  plugins: [
    '~plugins/element-ui'
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-97105935-2'
    }]
  ]
}
