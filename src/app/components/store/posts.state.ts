import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AgregarPost, RemoverPost } from "./posts.actions";
import { PostsStateModel } from "./posts.model";

@State<PostsStateModel>({
    name: 'posts',
    defaults: {
        listPosts: []
    }
})
export class PostState {

    @Selector() static getPosts(state: PostsStateModel) {
        return state.listPosts;
    }

    // Agregamos un post al state
    /*  @Action(AgregarPost) add(ctx: StateContext<PostsStateModel>, action: AgregarPost) {
         const state = ctx.getState();
         ctx.setState({
             ...state,
             listPosts: [
                 ...state.listPosts,
                 action.payload
             ]
         })
     } */
    /* @Action(AgregarPost) add({ getState, setState }: StateContext<PostsStateModel>, { payload }: AgregarPost) {
        setState({
            ...getState(),
            listPosts: [
                ...getState().listPosts,
                payload
            ]
        })
    } */

    @Action(AgregarPost) add({ getState, patchState }: StateContext<PostsStateModel>, { payload }: AgregarPost) {
        patchState({
            listPosts: [
                ...getState().listPosts,
                payload
            ]
        })
    }

    @Action(RemoverPost) remove({ getState, patchState }: StateContext<PostsStateModel>, { id } :RemoverPost) {
        patchState({
            listPosts: [
                ...getState().listPosts.filter(post => post.id !== id)
            ]
        })
    }
}