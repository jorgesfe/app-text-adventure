import { Component, OnInit } from '@angular/core';
import { WorldService } from './world.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  public terrain: Number;

  private world: Number[];

  constructor(private worldService: WorldService) { }

  ngOnInit() {
    this.world = this.worldService.generateWorld();
    this.terrain = this.world[0];
  }

}
