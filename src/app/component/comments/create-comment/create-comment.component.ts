import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../comment.service';
import {Comment} from '../../../interfaces/comment';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  private createForm: FormGroup;
  currentUser: any;


  constructor(private fb: FormBuilder,
              private commentService: CommentService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.createForm = this.fb.group({
      description: [''],
      user: ['']
    });
  }

  onsubmit() {
    const {value} = this.createForm;
    value.user = {id: this.currentUser.id};
    this.commentService.createComment(value).subscribe(next => {
      this.createForm.reset({
        description: ['']
      });
    });
  }
}
