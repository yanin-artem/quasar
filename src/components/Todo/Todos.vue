<template>
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
</template>

<script>
export default {
  props: {
        todos: {
            type: Array,
            default() {
                return [];
            }
        }
    },
  emits:['deleteTodo'],
  setup (props,{emit}) {

    const deleteTodo=(index)=>{
      emit('deleteTodo',index);
    }
    return {
      deleteTodo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
