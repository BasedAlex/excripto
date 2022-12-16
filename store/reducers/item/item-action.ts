import { createAction } from '@reduxjs/toolkit'
import { ItemsType } from './item-reducer'

export const addToFavAction = createAction<ItemsType>('ADD_TO_FAV')
export const removeFromFavAction = createAction<ItemsType>('REMOVE_FROM_FAV')
export const decreaseFavAction = createAction<ItemsType>('DECREASE_FAV')
export const clearFavAction = createAction('CLEAR_FAV')
