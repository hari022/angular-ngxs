import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Post} from './post';
import {Select, Store} from '@ngxs/store';
import {PostState} from './post.state';
import {GetData} from './post.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService, private store: Store, private postModel: Post) {

  }

  @Select(PostState.post) posts$: Post[];


  ngOnInit() {

    this.store.dispatch(new GetData());


  }

  displayData() {

    // this.posts$.map((post) => {
    //   console.log(post);
    // });

  }


}
