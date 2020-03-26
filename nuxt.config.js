const siteName = '全国の新型コロナウイルス対策サイト'
const siteDesc = '東京都のサイトを元に作られた各都道府県のサイトをまとめています。'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://stopcovid19japan.com/' },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDesc },
      { hid: 'og:image', property: 'og:image', content: 'https://stopcovid19japan.com/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        // 切り替える言語を定義
        locales: [
          {
            code: 'ja',
            name: '日本語',
            iso: 'ja-JP',
            file: 'ja.json',
            description: 'Japanese'
          },
          {
            code: 'en',
            name: 'English',
            iso: 'en-US',
            file: 'en.json',
            description: 'English'
          },
          {
            code: 'zh-cn',
            name: '简体中文',
            iso: 'zh-CN',
            file: 'zh_CN.json',
            description: 'Simplified Chinese'
          },
          {
            code: 'zh-tw',
            name: '繁體中文',
            iso: 'zh-TW',
            file: 'zh_TW.json',
            description: 'Traditional Chinese'
          },
          {
            code: 'ko',
            name: '한국어',
            iso: 'ko-KR',
            file: 'ko.json',
            description: 'Korean'
          },
          // {
          //   code: 'pt-BR',
          //   name: 'Portuguese',
          //   iso: 'pt-BR',
          //   file: 'pt_BR.json',
          //   description: 'Portuguese'
          // },
          {
            code: 'ja-basic',
            name: 'やさしい にほんご',
            iso: 'ja-JP',
            file: 'ja-Hira.json',
            description: 'Easy Japanese'
          },
        ],
        // デフォルトの言語を↑で定義したcodeで記載
        defaultLocale: 'ja',
        vueI18n: {
          // ファイルが読めなかった場合の言語を定義
          fallbackLocale: 'en',
        },
        vueI18nLoader: true,
        lazy: true,
        // 言語ファイル(.json)のディレクトリを記載
        langDir: 'locales/',
      }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
