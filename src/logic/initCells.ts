import {CellModel, create} from './cellManager';

const initCells = () => {

    const cell1: CellModel = create(getRandomCoord(), getRandomCoord(), 2);
    const cell2: CellModel = create(getRandomCoord(), getRandomCoord(), 2);

    if (cell1.x === cell2.x && cell1.y === cell2.y) {
        cell1.x = cell1.x === 0? 1: cell1.x-1;
        // todo RANDOM 
    };
    return [cell1, cell2];
}

const getRandomCoord = () => {
    return Math.floor(Math.random() * 3.9);
}

export default initCells;


// fieldReducer 