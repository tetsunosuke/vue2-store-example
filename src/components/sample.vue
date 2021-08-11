<template>
<div> <!-- root 要素での v-for 避け -->
  <!-- 入力ボックスを表示する場所 ① -->
  <div v-for="(text,idx1) in texts" :key="idx1" class="custom_form_parent">
      <!-- 各入力ボックス -->
      <div v-for="(col, idx2) in text" :key="idx2">
          <input ref="texts"
              type="text"
              class="reserveForm"
              v-model="texts[idx1][idx2]"
              @change="text_change"
              v-bind:class="{ 'is-alert' : errors.school_student , 'is-alert' : errors.school_student_number }"
              />
      </div>

      <div class="reserveForm_copy">
          <div class="reserveForm_copy_btn is-plus" @click="addInput">
          <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
          <div
              class="reserveForm_copy_btn is-minus"
              @click="removeInput(idx1),text_change()"
              v-if="idx1 >= 1"
          >
          <i class="fa fa-minus" aria-hidden="true"></i>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
data : function() {
  return {
    //texts:[["",""]],
    errors : {}
  }
},
computed: {
   texts: {
      get () { 
          console.log("get", this.$store.state.text_change);
          if (this.$store.state.text_change) {
            return this.$store.state.text_change
          } else {
              return [["",""]];
          }
      },
    },
},
  methods: {
    addInput() {
        this.texts.push([[""],[""]],); // 配列に１つ空データを追加する
    },
    removeInput(idx1) {
        this.texts.splice(idx1, 1);
        let store = this.$store;
        store.commit("settextchange", this.texts);
    },
    text_change() {
        let store = this.$store;
        console.log("Storeに保存させるためにstore.commitを呼びます", this.texts);
        store.commit("settextchange", this.texts);
    }
  }
}
</script>
