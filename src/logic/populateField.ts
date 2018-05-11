import {CellModel, create} from './cellManager';

function populateField(cells: CellModel[]) {
    const occupiedCords = new Set();

    cells.forEach((cell: CellModel) => {
        occupiedCords.add(cell.x * 4 + cell.y);
    })

    if (occupiedCords.size === 16) {
        // console.log('Game over!');
        // may be not here
        return cells;
    }

    let x;
    let y;
    const startSize: number = occupiedCords.size;
    do {
        x = Math.floor(Math.random() * 3.9);
        y = Math.floor(Math.random() * 3.9);

        const sum = x * 4 + y;
        occupiedCords.add(sum);
    } while (startSize === occupiedCords.size);

    return {cells: [...cells, create(x,y,2)]};
};

// fieldRecured ACTION: POPULATE FIE
export { populateField };