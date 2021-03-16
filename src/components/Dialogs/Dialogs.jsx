import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs_reducer";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElement = state.dialogs.map(dialog =>
        <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    );

    let messageElements = state.messages.map(message =>
        <MessagesItem  key={message.id} message={message.message}/>
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}

            </div>
            <div className={classes.messagesItems}>
                <div> {messageElements}</div>
                <div>

                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>xxxxxxx</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;