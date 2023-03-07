<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <div class="q-pa-md q-gutter-sm">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
    <div class="text-h4">
      Коты
      <q-badge align="top">cli v1.0.0</q-badge>
    </div>
        </q-toolbar>
  </div>
    </q-header>
    <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit"
        :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding
          style="margin-top: 150px;">
            <q-item to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Todo
              </q-item-section>
            </q-item>

            <q-item to="/help" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item to="/about" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <q-avatar size="40px"
        class="absolute z-max user-avatar"
        :class="{'active':!miniState}">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <q-img v-show="!miniState" class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <div class="text-weight-bold">Yanin Artem</div>
            <div>@yaartemmm</div>
          </div>
        </q-img>
      </q-drawer>
    <q-page-container>
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'



export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true)
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
</style>
