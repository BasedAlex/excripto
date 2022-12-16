import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import {
	addToFavAction,
	clearFavAction,
	decreaseFavAction,
	removeFromFavAction,
} from './item-action'

export type InitialStateType = {
	items: Array<ItemsType>
	favTotalQuantity: number
}

export type ItemsType = {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
	cartQuantity: number
}

export const initialState: InitialStateType = {
	items: [],
	favTotalQuantity: 0,
}

export const cartReducer = createReducer(initialState, builder => {
	builder
		.addCase(addToFavAction, (state, action: PayloadAction<ItemsType>) => {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			)
			state.favTotalQuantity++
			if (itemIndex >= 0) {
				state.items[itemIndex].cartQuantity += 1
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 }
				state.items.push(tempProduct)
			}
		})
		.addCase(removeFromFavAction, (state, action: PayloadAction<ItemsType>) => {
			const nextCartItems = state.items.filter(
				cartItem => cartItem.id !== action.payload.id
			)
			state.items = nextCartItems
		})
		.addCase(decreaseFavAction, (state, action: PayloadAction<ItemsType>) => {
			const itemIndex = state.items.findIndex(
				item => item.id === action.payload.id
			)
			state.favTotalQuantity--
			if (state.items[itemIndex].cartQuantity > 1) {
				state.items[itemIndex].cartQuantity -= 1
			} else {
				const nextCartItems = state.items.filter(
					cartItem => cartItem.id !== action.payload.id
				)
				state.items = nextCartItems
			}
		})
		.addCase(clearFavAction, state => {
			state.items = []
			state.favTotalQuantity = 0
		})
})
