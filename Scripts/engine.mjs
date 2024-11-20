import { gridToWorld } from "./utilities.mjs";

function renderWalls(context, walls) {
  for (let i = 0; i < walls.length; i++) {
    context.fillStyle = walls[i].color;
    context.fillText("~", gridToWorld(walls[i].x), gridToWorld(walls[i].y));
  }
}

export { renderWalls };
