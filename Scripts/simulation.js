import { renderWalls } from "./engine.mjs";
import { generateWalls } from "./mapGenerator.mjs";
import { gridToWorld, worldToGrid } from "./utilities.mjs";

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

const WIDTH_GRID = worldToGrid(WIDTH);
const HEIGHT_GRID = worldToGrid(HEIGHT) + 1;

const canvas = document.querySelector("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;
const context = canvas.getContext("2d");

context.font = "16px serif";

let walls = [];
generateWalls(walls, WIDTH_GRID, HEIGHT_GRID);
renderWalls(context, walls);
