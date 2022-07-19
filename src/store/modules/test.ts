import { Module } from 'vuex';
import { RootState } from '../index';

interface Todo {
  id: number,
  text: string,
  done: boolean
}
export interface TestState {
  testCount: number,
  listData: number,
  todos: Todo[]
}

export const testStore: Module<TestState, RootState> = {
  namespaced: true, // 使用 modules 要加這行
  state: {
    testCount: 1,
    listData: 2,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
    setData (state: TestState, value) {
      state.listData = value;
    },
    setTodos (state: TestState, payload) {
      state.todos[1].done = true;
      console.log('setTodo', state);
    }

  },
  actions: {
    actionSetData ({ commit, state, dispatch }, value) {
      commit('setData', value);
    }
  },
  getters: {
    testGetters: (state) => {
      return state.todos.filter(todo => todo.done);
    }
  }
};
