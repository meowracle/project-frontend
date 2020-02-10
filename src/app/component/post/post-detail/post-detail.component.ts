import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class PostDetailComponent implements OnInit {
  @Input() url = location.href;
  post: Post;
  currentUser: any;
  src;
  constructor(
    private token: TokenStorageService,
    private postService: PostService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    console.log(this.url);
    this.currentUser = this.token.getUser();
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next => {
        this.post = next;
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.post.video);
      }, error => {
        this.post = null;
      }
    );
  }

}
