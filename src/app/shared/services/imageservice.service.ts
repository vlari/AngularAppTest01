import { Injectable } from '@angular/core';
import images from '../../shared/data/images';

@Injectable()
export class ImageserviceService {

  constructor() { }
  imagesColl  = [];

  getImages(){
    return this.imagesColl = images.slice(0);
  }

  getImage(id: number){
    return images.slice(0).find(image => image.id == id);
  }

}


