function worldToGrid(worldValue) {
  return Math.floor(worldValue / 16);
}

function gridToWorld(gridValue) {
  return gridValue * 16;
}

export { worldToGrid, gridToWorld };
