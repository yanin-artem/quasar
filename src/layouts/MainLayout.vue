<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="q-pa-md q-gutter-sm">
    <div class="text-h4">
      Коты
      <q-badge align="top">cli v1.0.0</q-badge>
    </div>
  </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'



export default defineComponent({
  name: 'MainLayout',
})
</script>
