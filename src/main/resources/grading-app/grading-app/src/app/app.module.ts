import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "@angular/http";

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
} from "@angular/material";

import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { APP_INITIALIZER } from "@angular/core";
import { ConfigService } from "./services/config/config.service";
import { DetailViewComponent } from "./components/student/detail-view/detail-view.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TableComponent } from "./components/common/table/table.component";
import { ReviewViewComponent } from "./components/student/review-view/review-view.component";
import { GradeDetailsViewComponent } from "./components/teacher/grade-details-view/grade-details-view.component";
import { StatisticsComponent } from "./components/teacher/statistics/statistics.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailViewComponent,
    TableComponent,
    ReviewViewComponent,
    GradeDetailsViewComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
  ],
  entryComponents:[
    ReviewViewComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function loadConfig(config: ConfigService) {
  return () => {
    return config.loadConfig();
  };
}
