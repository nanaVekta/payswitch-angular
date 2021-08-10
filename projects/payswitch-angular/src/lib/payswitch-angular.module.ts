import { PUBLIC_KEY_TOKEN } from './theteller-token';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PayswitchAngularComponent } from './payswitch-angular.component';
import { PayswitchAngularService } from './payswitch-angular.service';

@NgModule({
  declarations: [
    PayswitchAngularComponent
  ],
  imports: [
  ],
  exports: [
    PayswitchAngularComponent
  ]
})
export class PayswitchAngularModule {
  static forRoot(token: string): ModuleWithProviders<PayswitchAngularModule> {
    return {
      ngModule: PayswitchAngularModule,
      providers: [
        { provide: PUBLIC_KEY_TOKEN, useValue: token },
        PayswitchAngularService
      ]
    };
  }
 }
