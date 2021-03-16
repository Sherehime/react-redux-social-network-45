import classes from "./Post.module.css";

const Post = (props) => {
    return <div>
        <div className={classes.item}>
            <img src={"https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"}/>
            {props.messages}
        </div>
        <span>Likes :{props.like_count}</span>
        <br/>
        <span>Like</span>
    </div>

}
export default Post;