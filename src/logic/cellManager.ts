// like action creator

import { uniqueId } from 'lodash';

interface CellModel  {
    x: number,
    y: number,
    id?: number,
    value: number
    state?: string,
    by? : any
}
const cellStates = {
    IDLE: 'IDLE',
    MOVING: 'MOVING',
    DYING: 'DYING',
    INCREASE: 'INCREASE',
}

export type StateModel = 'IDLE' | 'MOVING' | 'DYING' | 'INCREASE';

function create(x: number, y: number, value: number, id: number = uniqueId()): CellModel {
    return {
        x, y, id, value, state: cellStates.IDLE
    };
}

export { create, cellStates, CellModel };


//  cellReducer
// create

// fieldRedurec