import reducer, {initialState} from '../../src/reducers/times';
import { setTimeList } from '../../src/actions/times';

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

    it('SET_TIME_LIST', () => {
        //Je crée une "fausse action"
        const list = [
            {id: 1, time: '10:00:00'},
            {id: 2, time: '11:00:00'}
        ];
        //J'appelle pour ça mon action creator (setRecipesList)
        const action = setTimeList(list);
        //Je passe cette action à mon appel du reducer
        expect(reducer(initialState, action)).toEqual({
            list: list,
        });
    });
});
})
