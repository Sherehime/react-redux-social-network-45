import classes from "./../Dialogs.module.css";


const MessagesItem = (props) => {
    return <div className={classes.message}> {props.message} </div>
}


export default MessagesItem;