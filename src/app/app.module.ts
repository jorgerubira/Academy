import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubheaderComponent } from './index/subheader/subheader.component';
import { HeaderComponent } from './index/header/header.component';
import { TopComponent } from './index/top/top.component';
import { ServicesComponent } from './index/services/services.component';
import { MeetingComponent } from './index/meeting/meeting.component';
import { ApplyComponent } from './index/apply/apply.component';
import { CoursesComponent } from './index/courses/courses.component';
import { OurfactsComponent } from './index/ourfacts/ourfacts.component';
import { ContactComponent } from './index/contact/contact.component';
import { FindComponent } from './find/find.component';
import { FindCategoriesComponent } from './find/find-categories/find-categories.component';
import { IndexComponent } from './index/index.component';
import { FindTopComponent } from './find/find-top/find-top.component';
import { FindBodyComponent } from './find/find-body/find-body.component';
import { FindHeaderComponent } from './find/find-header/find-header.component';
import { DebugComponent } from './debug/debug/debug.component';

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    HeaderComponent,
    TopComponent,
    ServicesComponent,
    MeetingComponent,
    ApplyComponent,
    CoursesComponent,
    OurfactsComponent,
    ContactComponent,
    FindComponent,
    FindCategoriesComponent,
    IndexComponent,
    FindTopComponent,
    FindBodyComponent,
    FindHeaderComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
