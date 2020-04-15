type SquareState = 'dead' | 'alive'
type BoardState = 'stopped' | 'running';

const Square = () => {
    const state: SquareState = 'dead';

    const toggleState = () => state === 'dead' ? 'alive' : 'dead';
}

class Board {
    private state: BoardState
    private grid

    constructor() {
        this.state = 'stopped'
        this.grid = []
        for(let i = 0; i < 50; i++) {
            for(let j = 0; j < 50; j++) {
                this.grid[i][j] = new Square();
            }
        }
    }

    toggleBoardState() {
        return this.state === 'dead' ? 'alive': 'dead';
    }
};


const board = new Board();
