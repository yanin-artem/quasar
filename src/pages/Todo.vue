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
        @deleteTodo="deleteTodo"
        @toggleDone="toggleDone"/>
      </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import gsap from 'gsap';
import { useQuasar } from 'quasar'
import Input from 'src/components/Todo/Input.vue';
import Todos from 'src/components/Todo/Todos.vue';
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from '../firebase';

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

    const cardDataCollectinRef = collection(db, "todos");
    const cardDataCollectinQuery = query(cardDataCollectinRef, orderBy("date", "desc"));

    const addTask = async (text,status) => {
      if (!todos.value.some(e => e.title === text)) {
        await addDoc(cardDataCollectinRef, {
          title: text,
          done: false,
          status: status,
          date: Date.now()
        });
      }
      else {
        $q.notify({
          message: 'You already have this task',
          icon: 'report_problem'
        })
      }

    }

    const deleteTodo = (id) => {
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
        deleteDoc(doc(cardDataCollectinRef, id));
        $q.notify({
          message: 'Task deleted',
          icon: 'done'
        })
      })
    }

    const toggleDone = (id) => {
      const index = todos.value.findIndex((card) => card.id === id);
      updateDoc(doc(cardDataCollectinRef, id), {
        done: !todos.value[index].done
      });
    }

    onMounted(() => {
      onSnapshot(cardDataCollectinQuery, (querySnapshot) => {
        const fbTodos = [];
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            title: doc.data().title,
            done: doc.data().done,
            status: doc.data().status
          }
          fbTodos.push(todo);
        });
        todos.value = fbTodos;
      });
    })

    return {
      todos,
      deleteTodo,
      todo_card,
      addTask,
      toggleDone,
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
