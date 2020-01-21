import {Component, Injectable, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class PostDetailComponent implements OnInit {
  post: Post;
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private postService: PostService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    const currentUrl = this.router.url;
    console.log('http://localhost:4200/' + currentUrl);
    this.currentUser = this.token.getUser();
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.post = next;
      }, error => {
        this.post = null;
      }
    );
  }

}
