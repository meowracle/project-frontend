import {Component, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../../../interfaces/comment';


@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  listComment: Comment[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.commentService.getComments()
      .subscribe(next => (this.listComment = next)
        , error => (this.listComment = []));
  }

}
