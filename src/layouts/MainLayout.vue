<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <div class="q-pa-md q-gutter-sm row items-center">
        <q-toolbar class="col-auto">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
        <div>
        <div class="text-h4 center">
          Todo
          <q-badge align="top">cli v1.0.0</q-badge>
        </div>
        <div class="text-subtitle">{{ todayDate }}</div>
      </div>
  </div>
    </q-header>
    <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="250"
        :breakpoint="600"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit"
        :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding
          style="margin-top: 150px;">
            <q-item to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Todo
              </q-item-section>
            </q-item>

            <q-item to="/help" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help_outline" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item to="/about" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="supervisor_account" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>
            <q-item to="/contacts" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="contact_phone" />
              </q-item-section>

              <q-item-section>
                Contancts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <q-avatar size="40px"
        class="absolute z-max user-avatar"
        :class="{ 'active': !miniState }">
              <img src="../assets/img/xtc0X1VuDRf2wTTtae40_t3BF-wAEDXPAg_PLIsK5TrCQEI-6CE6ANkWq3mU8de2qWsUqLx8KdgNF5OKR-9lc0aH.jpg">
        </q-avatar>
        <q-img v-show="!miniState" class="absolute-top" src="../assets/img/gLc9sXAJ-Pbrae7usTic6bq-q39WnKYIkM-W015vWKxV6rAgZB0RZWQhQrmLEct2H1XcHkIqbZkAQgSfSAeFA0_Z.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <div class="text-weight-bold">Yanin Artem</div>
            <div>@yaartemmm</div>
          </div>
        </q-img>
      </q-drawer>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { date } from 'quasar';


export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true)
    }
  },
  computed: {
    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, "dddd D MMMM")
    }
  }
})
</script>

<style lang="sass">
  .user-avatar
    top: 30px
    left: 0
    right: 0
    margin: 0 auto
  .user-avatar.active
    left: auto
    right: auto
    margin-left: 16px
  .q-header
    background: url('../assets/img/header_bg.jpg') 100% 50%/cover no-repeat
    height: 100px
  .q-page-container
    background: #1d1d1d
    color: #fff

</style>
