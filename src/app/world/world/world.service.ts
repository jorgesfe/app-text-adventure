import { Injectable } from '@angular/core';

@Injectable()
export class WorldService {

  constructor() { }

  /**
   * Method to create a random world.
   *
   * @returns
   * @memberof WorldService
   */
  public generateWorld() {
    // tslint:disable-next-line:prefer-const
    let world: Number[] = new Array<Number>(1000);
    for (let x = 0; x < 1000; x++) {
      const terrain = Math.floor(Math.random() * 10) + 1;
      let longitude = Math.floor(Math.random() * 20) + 1;
      // In case that the map don't have enought size
      if (x + longitude > 1000) {
        console.log('Map:', x);
        console.log('Longitud:', longitude);
        longitude = (x + longitude) - 1000;
        console.log('Longitude 2:', longitude);
      }

      while (longitude !== 0) {
        world[x] = terrain;
        x++;
        longitude--;
      }
    }
    return world;
  }

}
