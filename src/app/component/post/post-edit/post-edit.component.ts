import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../interfaces/post';
import {PostService} from '../../../user/_services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {PictureService} from '../picture.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  editForm: FormGroup;
  post: Post;
  currentUser: any;
  usedPictureFiles: any[];
  previewUrl: any[];
  pictures: any[];

  constructor(
    private token: TokenStorageService,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private pictureService: PictureService,
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.editForm = this.formBuilder.group({
      id: '',
      user: [''],
      title: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(6)]],
      date: [''],
      shareStatus: [''],
      video: [''],
    });
    this.usedPictureFiles = [];
    this.previewUrl = [];
    this.pictures = [];
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id)
      .subscribe(next => {
        this.post = next;
        console.log(this.post);
        this.editForm.patchValue(next);
        for (const picture of next.pictures) {
          this.previewUrl.push(picture.src);
        }
        console.log(this.previewUrl);
      }, error => {
        console.log(error);
        this.post = null;
      });
  }

  onSubmit() {
    const {value} = this.editForm;
    value.user = {id: this.post.user.id};
    this.post = value;
    for (const preview of this.previewUrl) {
      this.pictures.push({
        id: '',
        src: preview
      });
    }
    this.post.pictures = this.pictures;
    this.postService.editPost(this.post)
      .subscribe(next => {
        alert('chinh sua post thanh cong');
        console.log(next);
        this.ngOnInit();
      });
  }

  onSelectFile(event) {
    this.usedPictureFiles = [];
    this.usedPictureFiles = event.srcElement.files;
    this.preview();
  }

  preview() {
    this.previewUrl = [];
    for (let i = 0; i < this.usedPictureFiles.length; i++) {
      const myType = this.usedPictureFiles[i].type;
      if (myType.match(/image\/*/) == null) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(this.usedPictureFiles[i]);
      reader.onload = event => {
        if (typeof reader.result === 'string') {
          this.previewUrl[i] = reader.result;
        }
      };
    }
  }
}
