import { Component, OnInit } from '@angular/core';
import { ImageserviceService } from '../shared/services/imageservice.service';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image: any;
  constructor(private imageService: ImageserviceService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(+this.route.snapshot.params['id']);
  }

}
