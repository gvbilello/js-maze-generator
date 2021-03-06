function Cell(i, j) {
  this.i = i;
  this.j = j
  // walls array order: top, right, bottom, left
  this.walls = [true, true, true, true];
  this.visited = false;

  this.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(255, 0, 0, 100);
    rect(x, y, w, w);
  }

  this.checkNeighbors = function() {
    var neighbors = [];

    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + w, y); // top wall
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w); // right wall
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w); // bottom wall
    }
    if (this.walls[3]) {
      line(x, y + w, x, y); // left wall
    }

    if (this.visited) {
      // color visited cell
      noStroke();
      fill(05, 150, 0, 100);
      rect(x, y, w, w);
    }
  }
}
