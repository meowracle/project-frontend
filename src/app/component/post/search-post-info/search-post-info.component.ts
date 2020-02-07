import {Component, OnInit} from '@angular/core';
import {Post} from '../../../interfaces/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../user/_services/post.service';

@Component({
  selector: 'app-search-post-info',
  templateUrl: './search-post-info.component.html',
  styleUrls: ['./search-post-info.component.css']
})
export class SearchPostInfoComponent implements OnInit {
  postList: Post[];
  tittleSearch: string;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const tittle = param.tittle;
      console.log(name);
      this.tittleSearch = tittle;
      this.postService.findAllByTittleContaining(tittle).subscribe(next => {
        this.postList = next;
        console.log(this.postList);
      }, error => {
        console.log(error);
        this.postList = null;
      });
    });
  }

}
