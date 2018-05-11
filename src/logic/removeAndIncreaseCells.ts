import { CellModel, cellStates } from './cellManager';

function removeAndIncreaseCells(cells, score) {
    // let newScore = state.score;
    let newScore = score;
    const newCells = cells.
    filter((cell: CellModel) => cell.state !== cellStates.DYING)
    .map((cell: CellModel) => {
        if (cell.state === cellStates.INCREASE) {
            cell.value *= 2;
            console.log('Last new score: ', newScore);
            newScore += cell.value;
            console.log('New score: ', newScore);
        }

        cell.state = cellStates.IDLE;

        return cell;
    })
    return { cells: newCells, score: newScore};
}

export { removeAndIncreaseCells };


// state: cells, score, 