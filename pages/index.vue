<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ $t('title') }}
      </h1>
      <!-- <h2 class="subtitle">
        All prefectures stop covid19 websites
      </h2> -->
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
</style>
