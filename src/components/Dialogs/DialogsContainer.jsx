import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{ //формируем данны из стейта
    return{
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps=(dispatch)=>{ // формируем колбеки   из диспача
    return{
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));

        },
        sendMessage:()=>{
            dispatch(sendMessageCreator());
        },
    }
}

const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs); // возвращает контейнерную компонентку в которой передает пропсы и колбеки для презентационной

export default DialogsContainer;