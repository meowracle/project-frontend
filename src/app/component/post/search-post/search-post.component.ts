import {Component, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';


@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {
  searchList: Post[];
  tittleSearch: '';

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  searchPost(event) {
    this.tittleSearch = event.value;
    this.postService.findAllByTittleContaining(event.value).subscribe(next => {
      this.searchList = next;
    }, error => {
      this.searchList = [];
      console.log(error);
    });
  }
}
