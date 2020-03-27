<template>
  <div class="container">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v6.0&appId=209494423668707&autoLogAppEvents=1"></script>
    <div>
      <h1 class="title">
        {{ $t('title') }}
      </h1>
      <!-- <h2 class="subtitle">
        All prefectures stop covid19 websites
      </h2> -->
      <div>
        <nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link>
      </div>
      <div>
        <nuxt-link :to="switchLocalePath('ja-basic')">やさしいにほんご</nuxt-link>
      </div>
      <div>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      </div>
      <div class="links">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <div class="fb-share-button" data-href="https://stopcovid19japan.com/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstopcovid19japan.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">シェア</a></div>
      </div>
      <japan-map />
      <div class="links">
        <a
          href="https://github.com/tokyo-metropolitan-gov/covid19/blob/development/FORKED_SITES.md"
          target="_blank"
          class="button--green"
        >
          Based on
        </a>
        <a
          href="https://github.com/hidehiro98/stopcovid19japan"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import JapanMap from '~/components/JapanMap.vue'

export default {
  components: {
    JapanMap
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

@media screen and (min-width: 768px) {
  .title {
    width: 600px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 16px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fb_iframe_widget > span {
  vertical-align: baseline !important;
}
</style>
