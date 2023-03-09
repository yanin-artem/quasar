<template>
  <q-page
  class="q-pa-lg">
      <q-list
      dark
      bordered
      separator>
        <Input @addTask="addTask"/>
        <Todos
        :todos="todos"
        @deleteTodo="deleteTodo"/>
      </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import gsap from 'gsap';
import { useQuasar } from 'quasar'
import Input from 'src/components/Todo/Input.vue';
import Todos from 'src/components/Todo/Todos.vue';

export default defineComponent({
  name: 'Todo',
  components: {
    Input,
    Todos
  },
  setup() {
    const todos = ref([
    ]);

    const todo_card = ref();

    const $q = useQuasar();

    const addTask = (text) => {
      if (!todos.value.some(e=>e.title===text))
      {
        todos.value.unshift({
          title: text,
          done: false
        });
      }
      else{
        $q.notify({
          message: 'You already have this task',
          icon: 'report_problem'
        })}

    }

    const deleteTodo = (index) => {
      // console.log(todo_card)
      // gsap.to(todo_card.value[index],{
      //   x: 200,
      //   duration:1,
      //   delay:1,
      //   rotation: 360
      // });
      $q.dialog({
        dark: true,
        title: 'Confirm',
        message: 'Would you like to delete task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        todos.value.splice(index, 1);
        $q.notify({
          message: 'Task deleted',
          icon: 'done'
        })
      })
    }

    return {
      todos,
      deleteTodo,
      todo_card,
      addTask,
    }
  }
})
</script>

<style lang="sass">
  .done
    background:#ff7f761f
    .q-item__label
      text-decoration: line-through
      color: grey
  .q-dialog-plugin
    button
      color: #ff7f76 !important
</style>
