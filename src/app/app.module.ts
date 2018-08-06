import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageserviceService } from './shared/services/imageservice.service';
import { FilterPipe } from './filter.pipe';
import { GalleryRoute } from './galleryroute.route';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    FilterPipe,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    GalleryRoute
  ],
  providers: [ImageserviceService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
