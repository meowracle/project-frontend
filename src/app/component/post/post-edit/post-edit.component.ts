import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  editForm: FormGroup;
  post: Post;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
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
        this.editForm.patchValue(this.post);
      }, error => {
        console.log(error);
        this.post = null;
      });
  }

  onSubmit() {
    const {value} = this.editForm;
    value.user = {id: this.post.user.id};
    this.postService.editPost(value)
      .subscribe(next => {
        alert('sua thong tin post thanh cong');
      }, error => {
        alert('co loi, sua khong thanh cong');
      });
  }
}
