export class CSSHelper {
  constructor() {}

  captheNumber() {
    return Math.floor(Math.random() * (255 - 1) + 1);
  }

  randomNumberwithInRange() {
    const max = 255,
      min = this.captheNumber();

    return Math.floor(Math.random() * (max - min) + min);
  }
}
