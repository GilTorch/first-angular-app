import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { App as AppComponent } from './app/app';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);

