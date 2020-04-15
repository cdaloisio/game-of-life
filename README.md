# Game of Life

## Goal
Build a 'Game of Life' game.

### User Acceptance Criteria

1. Your game should have a 50 x 50 sqaure grid
2. Each square on your grid should start 'dead'
3. While the game is not running (before clicking 'Start') you should be able to click on any square to swap it's life-state. If it is dead, it should become alive. If it is alive, it should become dead.
4. The following transitions should occur once you click 'Start', and repeat every 1 second:
  > Any **live** cell with **fewer than two live** neighbours **dies**, as if by underpopulation.
  > Any **live** cell with **two or three live** neighbours **lives** on to the next generation.
  > Any **live** cell with **more than three live** neighbours **dies**, as if by overpopulation.
  > Any **dead** cell with **exactly three live** neighbours becomes a **live** cell, as if by reproduction.

### For bonus points
1. Write your game in typescript
2. Add a button that clears the board so you can restart the game with a clean slate.
3. Add a button that randomly assigns each square with an 'alive' or 'dead' state.