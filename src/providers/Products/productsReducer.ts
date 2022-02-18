import { ProductsState } from '../../utils/types';

interface ProductsActionPayload {
  category: string;
}

export enum PRODUCTS_ACTIONS {
  ADD_ACTIVE_CATEGORY = 'ADD_ACTIVE_CATEGORY',
  REMOVE_ACTIVE_CATEGORY = 'REMOVE_ACTIVE_CATEGORY',
}

type ACTIONTYPE =
  | {
      type: PRODUCTS_ACTIONS.ADD_ACTIVE_CATEGORY;
      payload: Pick<ProductsActionPayload, 'category'>;
    }
  | {
      type: PRODUCTS_ACTIONS.REMOVE_ACTIVE_CATEGORY;
      payload: Pick<ProductsActionPayload, 'category'>;
    };

export default function productsReducer(
  state: ProductsState,
  action: ACTIONTYPE
): ProductsState {
  switch (action.type) {
    case PRODUCTS_ACTIONS.ADD_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategories: [
          ...state.activeCategories,
          action.payload.category.toLowerCase(),
        ],
      };
    case PRODUCTS_ACTIONS.REMOVE_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategories: state.activeCategories.filter(
          (item) => item !== action.payload.category.toLowerCase()
        ),
      };
    default:
      throw new Error('This action is invalid');
  }
}
