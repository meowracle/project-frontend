import {Component, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {Comment} from '../../../interfaces/comment';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {PostDetailComponent} from '../../post/post-detail/post-detail.component';


@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  listComment: Comment[];
  currentUser: any;
  currentPost: any;

  constructor(
    private token: TokenStorageService,
    private commentService: CommentService,
    private postDetail: PostDetailComponent) {
  }

  ngOnInit() {
    this.listComment = [];
    this.currentUser = this.token.getUser();
    this.currentPost = this.postDetail.post;
    this.commentService.getComments()
      .subscribe(next => {
        console.log(next);
        for (const cmt of next) {
          if (cmt.post.id === this.currentPost.id) {
            this.listComment.push(cmt);
            console.log(this.listComment);
          }
        }
      }, error => {
        console.log(error);
        this.listComment = [];
      });
  }

}
