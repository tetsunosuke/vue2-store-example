import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        sch:null,
        sch_set:'',
        sch_fee:'',
        sch_calc_fee:'',
        tea_bool:'',
        text_change: '',
    },
    getters: {
        tea_bool: state => state.tea_bool,
        sch: state => state.sch,
        sch_set: state => state.sch_set,
        sch_fee: state => state.sch_fee,
        text_change: state => state.text_change,
    },
    actions: {
        get_sch: function({ commit }, sch) {
            commit('settextchange', sch)
        },
        get_sch_set: function({ commit }, sch_set) {
            commit('set_change', sch_set)
        },
        get_sch_fee: function({ commit }, sch_fee) {
            commit('fee_change', sch_fee)
        },
    },
    mutations: {
        set_tea_fee: function (state,tea_fee) {
            state.tea_fee = tea_fee
        },
        set_school_allergies : function (state,school_allergies) {
            state.school_allergies = school_allergies
        },
        set_school_allergies_detail : function (state,school_allergies_detail) {
            state.school_allergies_detail = school_allergies_detail
        },
        // ここから一旦仮実装
        settextchange: function(state, value) {
            console.log("state.text_changeを", value, "で更新します");
            state.text_change = value;
        },
    },
});
