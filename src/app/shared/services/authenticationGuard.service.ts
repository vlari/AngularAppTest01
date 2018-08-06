import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';
import { GalleryImage } from '../models/galleryimage.model';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate{

user: Observable<firebase.User>;

}