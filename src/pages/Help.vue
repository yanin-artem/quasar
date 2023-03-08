<template>
  <q-page class="q-pa-xl">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1>
      Help
    </h1>
    </transition>
    <transition appear @before-enter="beforeEnterP" @enter="enterP">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit eveniet, dolore qui maiores hic ipsum voluptate doloribus quaerat atque labore eaque non in illo, deserunt eos. Explicabo, ad expedita?
    </p>
    </transition>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import gsap from 'gsap';
export default {
  setup () {
    const beforeEnter=(el)=>{
      el.style.opacity = '0';
      el.style.transform = 'translateY(-100px)'
    }
    const enter=(el)=>{
      gsap.to(el,{
        opacity:1,
        delay:1,
        duration:1,
        y:2
      })
    }

    const beforeEnterP=(el)=>{
      el.style.opacity = '0';
      el.style.transform = 'translateX(-100px)'
    }
    const enterP=(el)=>{
      gsap.to(el,{
        opacity:1,
        delay:2,
        duration:1,
        x:2
      })
    }

    return {
      enter,
      beforeEnter,
      beforeEnterP,
      enterP
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
