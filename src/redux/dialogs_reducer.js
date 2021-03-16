const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";


let initialState = {
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
}

const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,

            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export let updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
})


export default dialogs_reducer;