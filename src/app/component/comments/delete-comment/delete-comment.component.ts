import {Component, OnInit} from '@angular/core';
import {Comment} from '../../../interfaces/comment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {
  comment: Comment;
  deleteForm: FormGroup;
  currentUser: any;

  constructor(private fb: FormBuilder,
              private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.deleteForm = this.fb.group({
      id: [''],
      description: ['']
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentById(id).subscribe(next => {
      this.comment = next;
      this.deleteForm.patchValue(this.comment);
    }, error => {
      console.log(error);
      this.comment = null;
    });
  }

  onsubmit() {
    const s = confirm('You want delete this comment ?');
    if (s) {
      const {value} = this.deleteForm;
      console.log(value);
      this.commentService.deleteComment(value.id).subscribe(next => {
        alert('deleted');
        this.router.navigate(['']);
      });
    }

  }

}
