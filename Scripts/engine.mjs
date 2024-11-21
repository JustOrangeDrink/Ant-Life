import { gridToWorld } from "./utilities.mjs";
import { walls } from "./mapGenerator.mjs";

function renderWalls(context) {
  for (let i = 0; i < walls.length; i++) {
    context.fillStyle = walls[i].color;
    context.fillText(
      walls[i].char,
      gridToWorld(walls[i].x),
      gridToWorld(walls[i].y)
    );
  }
}

export { renderWalls };
