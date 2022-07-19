import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import { TestState, testStore } from './modules/test';

export interface RootState {
  testStore: TestState
}
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<RootState>> = Symbol();

export const store: Store<RootState> = createStore({
  modules: {
    testStore
  }
});

// 自訂義組合式函數
export function useStore () {
  return baseUseStore(key);
}

// // vue 组件
// import { useStore } from './store'

// export default {
//   setup () {
//     const store = useStore()

//     store.state.count // 类型为 number
//   }
// }
