function worldToGrid(worldValue) {
  return Math.floor(worldValue / 16);
}

function gridToWorld(gridValue) {
  return gridValue * 16;
}

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min) + 1 + min);
}

export { worldToGrid, gridToWorld, randomMinMax };
