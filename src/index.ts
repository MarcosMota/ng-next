import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { ThemaModule } from '@thema/thema.module';
import { CoreModule } from '@core/core.module';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ThemaModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class NextModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NextModule,
      providers: [SampleService]
    };
  }
}
