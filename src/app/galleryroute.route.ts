import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { ImageComponent } from "./image/image.component";
import { UploadComponent } from "./upload/upload.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticationGuard } from './app/services/authenticationGuard.service';

// const imgRoute: Routes = [
//   { path: 'gallery', component: GalleryComponent},
//   { path: 'image/:id', component: ImageComponent},
//   { path: '', redirectTo: '/gallery', pathMatch: 'full'}

// ];
const imgRoute: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
  { path: 'image/:id', component: ImageComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/gallery', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(imgRoute)],
  exports: [RouterModule]
})
export class GalleryRoute{}