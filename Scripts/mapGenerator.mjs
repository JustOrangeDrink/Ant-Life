function generateWalls(walls, width, height) {
  for (let i = 0; i < width; i++) {
    for (let k = 0; k < height; k++) {
      let wall = {
        x: i,
        y: k,
        integrity: 1,
        color: "#555555",
      };
      walls.push(wall);
    }
  }
}

export { generateWalls };
