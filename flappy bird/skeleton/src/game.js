import Level from './level';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }

  restart() {
    debugger
    this.level = new Level(this.dimensions);
    this.animate()
  }

  animate() {
    this.level.animate(this.ctx)
  }
}