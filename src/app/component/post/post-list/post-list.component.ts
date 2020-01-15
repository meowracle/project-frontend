import {Component, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
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
