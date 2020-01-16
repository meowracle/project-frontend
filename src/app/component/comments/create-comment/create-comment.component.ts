import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../comment.service';
import {Comment} from '../../../interfaces/comment';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  private createForm: FormGroup;


  constructor(private fb: FormBuilder, private commentService: CommentService) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      description: ['']
    });
  }

  onsubmit() {
    const {value} = this.createForm;
    this.commentService.createComment(value).subscribe(next => {
      this.createForm.reset({
        description: ['']
      });
    });
  }
}
