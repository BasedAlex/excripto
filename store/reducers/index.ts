import { combineReducers } from 'redux'
import { cartReducer } from './item/item-reducer'

const rootReducer = combineReducers({
	item: cartReducer,
})

export default rootReducer
