<template>
  <q-item
        v-for="item in todos"
        @click="toggleDone(item.id)"
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
          <q-item-section class="col-10">
            <q-item-label>
              {{item.title}}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <i class="q-icon notranslate material-icons text-primary">
              {{ item.status }}
            </i>
          </q-item-section>
          <q-item-section
          v-if="item.done"
          side>
          <q-btn @click.stop="deleteTodo(item.id)" flat round color="primary" icon="delete" />
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
  emits:[
    'deleteTodo',
    'toggleDone'
],
  setup (props,{emit}) {

    const toggleDone=(id)=>{
      emit('toggleDone',id);
    }
    const deleteTodo=(id)=>{
      emit('deleteTodo',id);
    }
    return {
      deleteTodo,
      toggleDone
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
