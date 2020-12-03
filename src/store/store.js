import {loadState, saveState} from './load-save'
import { createStore  } from 'redux'
import initialData from './initialData'


function reducer(state, action){
    if(action.type == 'addCart') {
        const product = action.product
        let cartProduct = state.cart.find(el => el.product.id === product.id)
        if(cartProduct) {
            cartProduct.n++
        }
        else {
            cartProduct = {
                n: 1,
                product: product
            }
            state.cart.push(cartProduct)
        }
    }
    return state
}

const store = createStore(
    reducer,
    loadState() || initialData,
)

store.subscribe( function () {
  saveState(store.getState())
})

export default store