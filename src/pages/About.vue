<template>
  <q-page class="q-pa-xl">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1>
      About
    </h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit eveniet, dolore qui maiores hic ipsum voluptate doloribus quaerat atque labore eaque non in illo, deserunt eos. Explicabo, ad expedita?
    </p>
  </q-page>
</template>

<script>
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
        delay:2,
        duration:1,
        y:2
      })
    }

    return {
      enter,
      beforeEnter
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
