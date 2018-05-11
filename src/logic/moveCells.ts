import { CellModel, cellStates } from './cellManager';

import { cloneDeep } from 'lodash';
import matrixRotate from 'matrix-rotate';

const directions = {
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    UP: 'UP',
}

const moveCells = (initCells: CellModel[], direction: string) => {
    const cells = cloneDeep(initCells);

    const matrix: any[][] = Array.from(new Array(4), () =>
        Array.from(new Array(4), () => 0,
        ));

    cells.forEach((cell: CellModel) => {
        matrix[cell.y][cell.x] = cell;
    })

    rotateMatrixFromDirection(matrix, direction);

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (matrix[y][x] !== 0) {
                /* matrix = */ moveCell(matrix, x, y);
            }

        }
    }

    rotateMatrixToDirection(matrix, direction)

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (matrix[y][x] !== 0) {
                matrix[y][x].y = y;
                matrix[y][x].x = x;
            }

        }
    };

    cells.filter((cell: CellModel) => cell.by != null).forEach((cell: CellModel) => {
        cell.x = cell.by.x;
        cell.y = cell.by.y;
        delete cell.by;
    });
    return { cells };
}

// helper functions

const moveCell = (matrix: any, x: number, y: number) => {
    let nextRow = y - 1;
    let currentRow = y;

    while (nextRow >= 0) {
        if (matrix[nextRow][x] === 0) {
            matrix[nextRow][x] = matrix[currentRow][x];
            matrix[currentRow][x].state = cellStates.MOVING;
            matrix[currentRow][x] = 0;

            currentRow = nextRow;
        } else if (
            matrix[nextRow][x].value === matrix[currentRow][x].value &&
            (matrix[nextRow][x].state === cellStates.IDLE ||
                matrix[nextRow][x].state === cellStates.MOVING)
        ) {
            matrix[nextRow][x].state = cellStates.DYING;
            matrix[nextRow][x].by = matrix[currentRow][x];
            matrix[currentRow][x].state = cellStates.INCREASE;
            matrix[nextRow][x] = matrix[currentRow][x];
            matrix[currentRow][x] = 0;
            currentRow = nextRow;
        } else {
            break;
        }

        nextRow -= 1;
    }
}

const rotateMatrixFromDirection = (matrix: CellModel[][], direction: string) => {
    switch (direction) {
        case directions.LEFT:
            matrixRotate(matrix);
            break;
        case directions.DOWN:
            matrixRotate(matrix);
            matrixRotate(matrix);
            break;

        case directions.RIGHT:
            matrixRotate(matrix);
            matrixRotate(matrix);
            matrixRotate(matrix);
            break;

        default:
            break;

    }
}

const rotateMatrixToDirection = (matrix: CellModel[][], direction: string) => {
    switch (direction) {
        case directions.LEFT:
            matrixRotate(matrix);
            matrixRotate(matrix);
            matrixRotate(matrix);
            break;
        case directions.DOWN:
            matrixRotate(matrix);
            matrixRotate(matrix);
            break;

        case directions.RIGHT:
            matrixRotate(matrix);
            break;

        default:
            break;

    }
}

export { moveCells, directions };