import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { MyGreeterComponent } from './my-greeter/my-greeter.component';

@NgModule({
  declarations: [
    // AppComponent,
    // We still need to declare the component
    MyGreeterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [MyGreeterComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    /**
     * IMPORTANT
     *
     * There is a bug with zone.js, this fixes that.
     */
    const strategyFactory = new ElementZoneStrategyFactory(
      MyGreeterComponent,
      injector
    );
    const myGreeterContructor = createCustomElement(MyGreeterComponent, {
      injector,
      strategyFactory
    });
    customElements.define('my-greeter', myGreeterContructor);
  }

  ngDoBootstrap() {

  }
}
