import { TestBed, inject } from '@angular/core/testing';

import { WorldService } from './world.service';

describe('WorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldService]
    });
  });

  it('should be created', inject([WorldService], (service: WorldService) => {
    expect(service).toBeTruthy();
  }));

  it('World must have 1000', inject([WorldService], (service: WorldService) => {
    const world = service.generateWorld();
    console.log(world.length);
    expect(world.length === 1000).toBe(true);
  }));

  it('World must have numbers between 1 - 10', inject([WorldService], (service: WorldService) => {
    const world = service.generateWorld();
    let isOk = true;
    for (let x = 0; x < 1000; x++) {
      if (!(world[x] >= 1 && world[x] < 11)) {
        isOk = false;
        break;
      }
    }
    expect(isOk).toBe(true);
  }));
});
