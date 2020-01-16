import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Post} from '../../interfaces/post';
import {TokenStorageService} from '../_services/token-storage.service';
import {PostService} from '../_services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
/*  content: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }*/
  postList: Post[] = [];
  currentUser: any;

  constructor(private token: TokenStorageService,
              private postService: PostService) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.postService
      .getAllPosts()
      .subscribe(next => (this.postList = next)
        , error => (this.postList = []));
  }
}
