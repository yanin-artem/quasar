<template>
  <q-page
  class="q-pa-lg">
      <q-list
      dark
      bordered
      separator
      ref="todo_card">
        <q-item
        v-for="(item,index) in todos"
        @click="item.done=!item.done"
        :key="item.title"
        v-ripple
        clickable
        class="row wrap todo_card"
        :class="{'done':item.done}">
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
      </q-list>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import gsap from 'gsap';

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


    const todo_card = ref();

    const deleteTodo = (index)=>{
      // gsap.to(todo_card.value[index],{
      //   x: 200
      // });
      todos.value.splice(index,1);
    }

    return {
      todos,
      deleteTodo,
      todo_card
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
</style>
