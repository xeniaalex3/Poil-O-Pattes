import reducer, {initialState} from '../../src/reducers/services';
import { setServicesList } from '../../src/actions/services';

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

    it('SET_SERVICES_LIST', () => {
        //Je crée une "fausse action"
        const list = [
            {id: 1, spa: 'spa'},
            {id: 2, grooming: 'toilettage'}
        ];
        //J'appelle pour ça mon action creator (setRecipesList)
        const action = setServicesList(list);
        //Je passe cette action à mon appel du reducer
        expect(reducer(initialState, action)).toEqual({
            list: list,
        });
    });
});
})
