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
    texts:[["",""]],
    errors : {}
  }
},
  methods: {
    addInput() {
        this.texts.push([[""],[""]],); // 配列に１つ空データを追加する
    },
    removeInput(idx1) {
        this.texts.splice(idx1, 1);
        let store = this.$store;
        store.commit("people/settextchange", this.texts);
    },
    text_change() {

        let store = this.$store;
        store.commit("people/settextchange", this.texts);

        // 配列をオブジェクトに変換し、組だけまとめたあと配列として再度
        let map = new Map(JSON.parse(JSON.stringify(store.state.people.sch)));
        let setArray = []
        let feeArray = []

        map.forEach(function (value, key) {
            setArray.push(key)
            feeArray.push(value)
        });
        let setArrayParse = JSON.parse(JSON.stringify(setArray));
        let feeArrayParse = JSON.parse(JSON.stringify(feeArray));
        let feeArrayParseNumber = JSON.parse(JSON.stringify(feeArray)).map(Number);

        var feeArrayCalc = feeArrayParseNumber.reduce(function(a,b){
            return a + b;
        });

        // 組をここでコミット

        store.commit("people/set_change",setArrayParse)

        //人数をコミット
        store.commit("people/fee_change",feeArrayParse)

        //合計人数をコミット
        store.commit("people/calc_fee_change",feeArrayCalc)
    }
  }
}
</script>
