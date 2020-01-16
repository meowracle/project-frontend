import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Comment} from '../../../interfaces/comment';
import {CommentService} from '../comment.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  editForm: FormGroup;
  comment: Comment;
  currentUser: any;

  constructor(private fb: FormBuilder,
              private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.editForm = this.fb.group({
      id: [''],
      description: ['']
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentById(id).subscribe(next => {
      this.comment = next;
      console.log(this.comment);
      this.editForm.patchValue(this.comment);
    }, error => {
      console.log(error);
      this.comment = null;
    });
  }

  onsubmit() {
    const {value} = this.editForm;
    value.user = {id: this.comment.user.id};
    console.log(value);
    this.commentService.editComment(value).subscribe(next => {
      confirm('edited');
    });
  }

}
