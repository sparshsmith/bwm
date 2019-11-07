
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component'
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
import { CommonModule } from '@angular/common';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports:[
    MapComponent
  ],
  imports: [
  CommonModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM'
    })
  ],
  providers: [
    MapService,
    CamelizePipe
  ]

})
export class MapModule { }
