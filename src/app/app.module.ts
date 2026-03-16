import { NgModule } from "@angular/core";
import { App as AppComponent} from './app';
import HeaderComponent from "./header/header";
import { UserComponent } from "./user/user";;
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared-module";
import { TasksModule } from "./tasks/tasks.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {}