<template>
  <q-page >
    <div class="q-pa-md row">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      class="col-4 offset-4 carousel"
    >
      <q-carousel-slide :name="1" img-src="~assets/img/7.png" />
      <q-carousel-slide :name="2" img-src="~assets/img/8.png" />
      <q-carousel-slide :name="3" img-src="~assets/img/9.png" />
    </q-carousel>
  </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      slide: ref(1),
    }
  }
})
</script>

<style>
  .carousel{
    min-height: 300px;
  }
</style>
