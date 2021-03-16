const UPDATE_NEW_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState= {posts: [
    {id: 1, messages: 'message1', like_count: '2'},
    {id: 2, messages: 'message2', like_count: '55'},
    {id: 3, messages: 'message3', like_count: '65'},
],
    newPostText: 'newPostText'}

const profile_reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                messages: state.newPostText,
                like_count: 0,

            }
           return {
                ...state,
                posts:[...state.posts,newPost],
                newPostText:'',
            }

        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText : action.newText,
            };

        }
        default :
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export let updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profile_reducer;