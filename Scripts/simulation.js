import { renderWalls } from "./engine.mjs";
import { carveDungeon, generateWalls, introRender } from "./mapGenerator.mjs";
import { gridToWorld, worldToGrid, randomMinMax } from "./utilities.mjs";

let value = document.querySelector("input").value;
const WIDTH =
  16 *
  Math.floor(
    ((document.getElementsByClassName("simulation")[0].offsetWidth / 100) *
      value) /
      16
  );
const HEIGHT =
  16 *
  Math.floor(
    document.getElementsByClassName("simulation")[0].offsetHeight / 16
  );
console.log(value);

const WIDTH_GRID = worldToGrid(WIDTH);
const HEIGHT_GRID = worldToGrid(HEIGHT) + 1;

const canvas = document.querySelector("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
const context = canvas.getContext("2d");

context.font = "16px serif";

generateWalls(WIDTH_GRID, HEIGHT_GRID);
// renderWalls(context);

const maxRooms = randomMinMax(WIDTH / 50, WIDTH / 2);
console.log(maxRooms);
carveDungeon(context, maxRooms, WIDTH_GRID, HEIGHT_GRID);

introRender(context, 0.3);
