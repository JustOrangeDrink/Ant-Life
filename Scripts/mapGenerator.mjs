import { gridToWorld, randomMinMax } from "./utilities.mjs";

const introTimers = [];
function introRender(context, speed) {
  for (let index = 0; index < walls.length; index++) {
    const element = walls[index];
    introTimers.push(
      setTimeout(() => {
        context.fillStyle = element.color;
        context.fillText(
          element.char,
          gridToWorld(element.x),
          gridToWorld(element.y)
        );
      }, index / speed)
    );
  }
}

const walls = [];
function generateWalls(width, height) {
  for (let i = 0; i < width; i++) {
    for (let k = 0; k < height; k++) {
      let wall = {
        name: "wall",
        x: i,
        y: k,
        char: "#",
        integrity: 1,
        color: "#FFFFFF",
      };
      walls.push(wall);
    }
  }
}

function carveTile(context, grid_x, grid_y, map_width, map_height) {
  if (
    grid_x == map_width - 1 ||
    grid_x == 0 ||
    grid_y == map_height - 2 ||
    grid_y == 1
  ) {
    return;
  }
  context.clearRect(
    gridToWorld(grid_x),
    gridToWorld(grid_y),
    gridToWorld(1),
    gridToWorld(1)
  );
  context.fillStyle = "#000000";
  context.fillRect(
    gridToWorld(grid_x),
    gridToWorld(grid_y),
    gridToWorld(1),
    gridToWorld(1)
  );
  for (let i = 0; i < walls.length; i++) {
    if (walls[i].x == grid_x && walls[i].y == grid_y) {
      walls.splice(i, 1);
    }
  }
}

function carveRoom(
  context,
  x,
  y,
  grid_width,
  grid_height,
  map_width,
  map_height
) {
  for (let i = x; i < grid_width + x; i++) {
    for (let k = y; k < grid_height + y; k++) {
      carveTile(context, i, k, map_width, map_height);
    }
  }
}

function carveDungeon(context, maxRooms, map_width, map_height) {
  for (let i = 0; i < maxRooms; i++) {
    // const roomWidth = randomMinMax(1, 1000 / maxRooms);
    const roomWidth = randomMinMax(1, 5);
    // const roomHeight = randomMinMax(1, 1000 / maxRooms);
    const roomHeight = randomMinMax(1, 5);
    const roomX = randomMinMax(0, map_width - roomWidth - 1);
    const roomY = randomMinMax(0, map_height - roomHeight - 1);
    carveRoom(
      context,
      roomX,
      roomY,
      roomWidth,
      roomHeight,
      map_width,
      map_height
    );
  }
}

export { generateWalls, carveDungeon, carveRoom, walls, introRender };
