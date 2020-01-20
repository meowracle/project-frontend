import {Component, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../../../interfaces/comment';
import {TokenStorageService} from '../../../user/_services/token-storage.service';


@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  listComment: Comment[];
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private commentService: CommentService) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.commentService.getComments()
      .subscribe(next => (this.listComment = next)
        , error => (this.listComment = []));
  }

}
