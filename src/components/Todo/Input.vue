<template>
  <div class="q-pa-lg">
        <q-input @keyup.enter="addTask" dark filled bottom-slots v-model="todoText" label="Add task">
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
      </div>
</template>

<script>
import {ref} from 'vue';
import { useQuasar } from 'quasar';
export default{
  emits: ['addTask'],
  setup (props, { emit }) {
    const $q = useQuasar();
    const todoText = ref('');
    const addTask= ()=>{
      if(todoText.value.trim()){
      emit('addTask',todoText.value);
      }
      else{
      $q.notify({
          message: 'Write something',
          icon: 'report_problem'
        })
      }
      todoText.value='';
    }

    return {
      todoText,
      addTask
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
