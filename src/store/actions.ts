import { CellModel } from "../logic/cellManager";

export function moveCellsAction(cells: CellModel[], direction: string) {
    return { type: 'MOVE_CELLS', payload: { cells, direction} }
  }
  
  export function populateFieldAction(cells: CellModel[]) {
    return { type: 'POPULATE_FIELD', payload: {cells} }
  }
  
  export function removeAndIncreaseCellsAction(currentState) {

    return { type: 'REMOVE_AND_INCREASE_CELLS', payload: {currentState}}
  }

  export function startGameAction() {
    return { type: 'START_GAME' }
  }