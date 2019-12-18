import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  image3 = 'https://www.goodnewsnetwork.org/wp-content/uploads/2019/09/Squirrel-Hugging-Flower-Feature-SWNS.jpg';

  constructor() { }

  ngOnInit() {
  }

}