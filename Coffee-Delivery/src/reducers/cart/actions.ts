import { Item } from "./reducer"


export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    CHECKOUT_CART = 'CHECKOUT_CART',
  }

  export type Actions = 
  {
    type: ActionTypes.ADD_ITEM
    payload:{
        item: Item
    }
  }


  export function addItemAction(item: Item) {
    return {
      type: ActionTypes.ADD_ITEM,
      payload: {
        item,
      },
    } satisfies Actions
  }