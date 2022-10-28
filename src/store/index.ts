import { createStore ,useStore as baseUseStore, Store,} from 'vuex'
import { InjectionKey } from 'vue'

interface State {
  variant:string,
  variantScore:string,
  dialog:boolean,
  dialogInfo:string

}
export const key: InjectionKey<Store<State>> = Symbol()
export default createStore<State>({
  state: {
    variantScore:'default',
    variant:'default',
    dialog:false,
    dialogInfo:''
  },
  getters: {
  },
  mutations: {
    updateVarian(state,payload:string){
      state.variant = payload
    },
    updateVariantScore(state,payload:string){
      state.variantScore = payload
    },
    openDialog(state,payload:boolean){
      state.dialog = payload
    },
    setDialogInfo(state,payload:string){
      state.dialogInfo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
export function useStore () {
  return baseUseStore(key)
}