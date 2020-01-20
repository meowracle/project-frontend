import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {
  post: Post;
  deleteForm: FormGroup;
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.deleteForm = this.formBuilder.group({
      id: '',
      user: [''],
      title: [''],
      content: [''],
      date: [''],
      shareStatus: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id)
      .subscribe(next => {
        this.post = next;
        this.deleteForm.patchValue(this.post);
      }, error => {
        console.log(error);
        this.post = null;
      });
  }

  onSubmit() {
    const s = confirm('Are you sure?');
    if (s) {
      const {value} = this.deleteForm;
      value.user = {id: this.post.user.id};
      console.log(value);
      this.postService.deletePost(value.id)
        .subscribe(next => {
          alert('xoa post thanh cong');
          this.router.navigate(['']);
        });
    }
  }

}
