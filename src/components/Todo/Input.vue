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
export default{
  emits: ['addTask'],
  setup (props, { emit }) {
    const todoText = ref('');
    const addTask= ()=>{
      emit('addTask',todoText.value);
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
