import { Component, OnInit, OnChanges, Input } from '@angular/core';
//import { ImageserviceService } from '../shared/services/imageservice.service';
import { ImageService } from '../shared/services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../shared/models/galleryimage.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  imagesDisplay: any[] = [];
  @Input() filterBy?: string = 'all';

  images: Observable<GalleryImage[]>;

  // constructor(private imageService: ImageserviceService) { }
  constructor(private imageService: ImageService) { }
  
  ngOnInit() {
    //this.imagesDisplay = this.imageService.getImages();

    this.images = this.imageService.getImages();
  }

  ngOnChanges(){
    //this.imagesDisplay = this.imageService.getImages();
    this.images = this.imageService.getImages();
  }

}
