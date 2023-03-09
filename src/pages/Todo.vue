<template>
  <q-page
  class="q-pa-lg">
      <q-list
      dark
      bordered
      separator>
      <div class="q-pa-lg">
        <q-input @keyup.enter="addTask" dark filled bottom-slots v-model="todoText" label="Add task">
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
      </div>
      <transition-group>
        <q-item
        v-for="(item,index) in todos"
        @click="item.done=!item.done"
        :key="item.title"
        v-ripple
        clickable
        class="row wrap todo_card"
        :class="{'done':item.done}"
        ref="todo_card">
          <q-checkbox keep-color
          v-model="item.done"
          color="teal"
          class="no-pointer-events"/>
          <q-item-section>
            <q-item-label>
              {{item.title}}
            </q-item-label>
          </q-item-section>
          <q-item-section
          v-if="item.done"
          side>
          <q-btn @click.stop="deleteTodo(index)" flat round color="primary" icon="delete" />
          </q-item-section>
        </q-item>
      </transition-group>
      </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref} from 'vue';
import gsap from 'gsap';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'Todo',
  setup () {
    const todos=ref([
      {
        title:'fst',
        done:false
      },
      {
        title:'scnd',
        done:false
      },
      {
        title:'third',
        done:false
      }
    ]);

    const todoText = ref('');

    const todo_card = ref();

    const $q = useQuasar();

    const addTask=()=>{
      todos.value.unshift({
        title: todoText.value,
        done:false
      });
      todoText.value = '';
    }

    const deleteTodo = (index)=>{
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
      todos.value.splice(index,1);
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
      todoText
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
