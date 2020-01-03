<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      
      <draggable class="list-group" :list="list1" group="people" @change="log" :move="checkMove" @start="drag=false">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log" @start="drag=false">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "wangling", id: 0 },
        { name: "aa", id: 1 },
        { name: "bb", id: 2 },
        { name: "cc", id: 3 },
        { name: "dd", id: 4 }
      ],
      list2: [
        { name: "55", id: 5 },
        { name: "66", id: 6 },
        { name: "77", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    checkMove(evt) {
      // console.log()
      return evt.draggedContext.element.name!=='wangling'
    }
  }
};
</script>
<style lang="scss" scoped>
.list-group {
  min-height: 500px;
  background: yellowgreen;
}
   .row {
     display: flex;
   }
   .col-3 {
     width: 100px;
     background: #dcdcdc;
     margin-right: 10px;
   }
   .list-group-item {
     cursor: pointer;
     margin: 10px 0px;
   }
</style>
