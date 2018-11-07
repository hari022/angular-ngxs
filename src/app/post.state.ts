import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {GetData} from './post.actions';
import {Post} from './post';
import {ApiService} from './api.service';

export interface PostStateModel {
  posts: Post[];
  loading: boolean;
}

@State<PostStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    loading: true
  }
})

export class PostState {

  constructor(private api: ApiService) {
  }

  @Selector()
  public static post(state: PostStateModel) {
    return state.posts.filter((post) => {
      return post.userId = 1;
    });
  }


  @Action(GetData)
  getPosts({getState, setState}: StateContext<PostStateModel>) {
    const state = getState();
    let data: Post[];
    this.api.getData().subscribe((post) => {
      console.log(post);
      data = post;

      setState({
        ...state,
        posts: data,
        loading: false
      });

    });

  }

}
