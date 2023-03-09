<template>
  <div class="q-pa-lg">
        <q-input @keyup.enter="addTask" dark filled bottom-slots v-model="todoText" label="Add task">
        <template v-slot:append>
          <q-btn v-for="item in statuses"
          :key="item.id"
          :icon="item.status"
          round dense flat
          @click="pickStatus(item.status,$event)"
          ref="btn"
          class="status"
          />
          <q-btn @click="addTask" icon="add" />
        </template>
      </q-input>
      </div>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
export default {
  emits: ['addTask'],
  setup(props, { emit }) {
    const $q = useQuasar();
    const statuses = [
      {
        id: 1,
        status: 'rocket'
      },
      {
        id: 2,
        status: 'history'
      },
      {
        id: 3,
        status: 'work'
      },
      {
        id: 4,
        status: 'favorite'
      },
    ];
    // const btn=ref();
    const status =ref('rocket');
    const todoText = ref('');
    const addTask = () => {
      if (todoText.value.trim()) {
        emit('addTask', todoText.value,status.value);
      }
      else {
        $q.notify({
          message: 'Write something',
          icon: 'report_problem'
        })
      }
      todoText.value = '';
    };
    const pickStatus=(text,e)=>{
      document.querySelectorAll('.status i').forEach(e=>e.classList.remove('text-primary'));
      status.value=text;
      e.target.classList.add('text-primary');
    }

    return {
      todoText,
      addTask,
      status,
      statuses,
      pickStatus,
      // btn
    }
  }
}
</script>

<style lang="scss" scoped></style>
