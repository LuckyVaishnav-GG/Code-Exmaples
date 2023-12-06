import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.scss'],
})
export class SocialPostsComponent implements OnInit {
  postData: { title: any; id: any; userId: any; body: any }[];
  currntPageNumber: number = 1;
  totalPageCount : number =0;
  constructor(private httpServcie: HttpserviceService) {
    this.postData = [
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
    ];
  }

  ngOnInit(): void {
    this.getPostData(this.currntPageNumber);
  }

  getPostData(pageNumber: number) {
    try{
    this.httpServcie
      .getData(`http://localhost:3000/social/posts/${pageNumber}`)
      .subscribe((data: any) => {
        console.log(data);
        this.postData  = data.socialPosts as any;
      });
    }catch(error){
      console.log(error);
    }
  }

  onNext() {
    this.currntPageNumber += 1;
    this.getPostData(this.currntPageNumber);


  }

  onPrevious() {
    if(this.currntPageNumber !=1){
    this.currntPageNumber -= 1;
    this.getPostData(this.currntPageNumber);
    }
  }
}
