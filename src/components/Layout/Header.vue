<template>
  <q-header elevated>
      <div class="q-pa-md q-gutter-sm row items-center">
        <q-toolbar class="col-auto">
          <q-btn flat @click="drawerToggle" round dense icon="menu" />
        </q-toolbar>
        <div>
        <div class="text-h4 center">
          Todo
          <q-badge align='top'>cli v1.0.0</q-badge>
        </div>
        <div class="text-subtitle">{{ todayDate }}</div>
      </div>
  </div>
    </q-header>
</template>

<script>
import {ref} from 'vue';
import { date } from 'quasar';

export default {
  props: {
        drawer: {
            type: Boolean,
        }
    },
  emits:[
    'drawerToggle'
  ],
  setup (props,{emit}) {
    const drawerToggle=()=>{
      emit('drawerToggle');
    }
    return {
      drawerToggle
    }
  },
  computed: {
    todayDate() {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, "dddd D MMMM")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
