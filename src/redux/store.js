import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'message1', like_count: '2'},
                {id: 2, messages: 'message2', like_count: '55'},
                {id: 3, messages: 'message3', like_count: '65'},
            ],
            newPostText: 'newPostText'

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Katya'},
                {id: 2, name: 'Nastya'},
                {id: 3, name: 'Julia'},

            ],
            messages: [
                {id: 1, message: 'message1'},
                {id: 2, message: 'message2'},
                {id: 3, message: 'message3'},
            ],
            newMessageBody: '',
        },
        sidebar: {},

    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        //alert('cc');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {//{type: 'ADD-POST'}
        this._state.profilePage = profile_reducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebar_reducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }


}


export default store;
window.store = store;