import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../comment.service';
import {Comment} from '../../../interfaces/comment';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {PostDetailComponent} from '../../post/post-detail/post-detail.component';
import {Post} from '../../../interfaces/post';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  createForm: FormGroup;
  currentUser: any;
  currentPost: any;


  constructor(private fb: FormBuilder,
              private commentService: CommentService,
              private token: TokenStorageService,
              private postDetail: PostDetailComponent) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.currentPost = this.postDetail.post;
/*    console.log(this.currentPost);*/
    this.createForm = this.fb.group({
      id: [''],
      description: [''],
      user: [''],
      post: [''],
    });
  }

  onSubmit() {
    const {value} = this.createForm;
    value.user = {id: this.currentUser.id};
    console.log(value.user);
    value.post = this.currentPost;
    console.log(value.post);
    this.commentService.createComment(value)
      .subscribe(next => {
        this.createForm.reset({
          description: '',
          user: '',
          post: ''
        });
      }, error => console.log(error));
  }
}
