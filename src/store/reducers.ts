const initialState = {cells: [], score: 0};

import { Action, Reducer } from 'redux';

import initCells from '../logic/initCells';
import { moveCells } from '../logic/moveCells';
import { populateField } from '../logic/populateField';
import { removeAndIncreaseCells } from '../logic/removeAndIncreaseCells';

// state: {cells, score} 
const reducer: Reducer<any, {type: string, payload: any}> = (state: {cells: any[], score: number} = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'REMOVE_AND_INCREASE_CELLS': {
            return Object.assign({}, state, removeAndIncreaseCells(state.cells, state.score));// .payload ;
        }

        case 'MOVE_CELLS': {
            return Object.assign({}, state, moveCells(state.cells, action.payload.direction));
        }

        case 'POPULATE_FIELD': {
            return Object.assign({}, state, populateField(state.cells));
        }

        case 'START_GAME': {
            return {
                cells: initCells(),
                score: 0
            };
        }
        default:
            return state;
    }

}

export default reducer;