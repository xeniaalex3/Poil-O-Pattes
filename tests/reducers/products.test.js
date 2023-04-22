import reducer, {initialState} from '../../src/reducers/products';
import { setProductsList } from '../../src/actions/products';

describe('reducer for times', () => {
  describe('structure', () => {
    it('is a function', () => {
      expect(typeof reducer).toBe('function');
    });
  });

  describe('execution', () => {
    it('should return the initial state when called without arguments', () => {
        expect(reducer()).toEqual(initialState);
    });

    it('SET_PRODUCTS_LIST', () => {
        //Je crée une "fausse action"
        const list = [
            {id: 1, products: 'products-beauty'},
            {id: 2, products: 'products-beauty'}
        ];
        //J'appelle pour ça mon action creator (setRecipesList)
        const action = setProductsList(list);
        //Je passe cette action à mon appel du reducer
        expect(reducer(initialState, action)).toEqual({
            list: list,
        });
    });
});
})
