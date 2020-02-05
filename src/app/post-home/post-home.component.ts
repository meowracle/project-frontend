import { Component, OnInit } from '@angular/core';
import {Post} from '../interfaces/post';
import {TokenStorageService} from '../user/_services/token-storage.service';
import {PostService} from '../user/_services/post.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit {
  postList: Post[] = [];
  currentUser: any;

  constructor(private token: TokenStorageService,
              private postService: PostService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.postService
      .getAllPosts()
      .subscribe(next => (this.postList = next)
        , error => (this.postList = []));
  }
}
