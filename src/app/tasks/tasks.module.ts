import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { TaskComponent } from "./task/task";
import { NewTaskComponent } from "./new-task/new-task";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Card } from "../shared/card/card";
import { SharedModule } from "../shared/shared-module";

@NgModule({
    declarations: [
        Tasks,
        TaskComponent,
        NewTaskComponent
    ],
    imports: [CommonModule, FormsModule, SharedModule],
    exports: [Tasks]
})
export class TasksModule {}