import {
  Component,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from '@angular/core'


@Component({
  selector: 'app-root',
  template: `
    <h3>Hello {{name}}</h3>
  `
})
export class AppComponent {
  name = 'World!'
}

renderComponent(AppComponent as ComponentType<AppComponent>);
