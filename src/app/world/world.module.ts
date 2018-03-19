import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldRoutingModule } from './world-routing.module';
import { WorldComponent } from './world/world.component';
import { WorldService } from './world/world.service';

@NgModule({
  imports: [
    CommonModule,
    WorldRoutingModule
  ],
  declarations: [WorldComponent],
  providers: [WorldService]
})
export class WorldModule { }
