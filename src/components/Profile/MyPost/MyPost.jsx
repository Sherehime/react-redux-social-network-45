import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import React, {Component} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";


const MyPost = (props) => {
    let postElement = props.posts.map(post =>
        <Post messages={post.messages} like_count={post.like_count}/>
    );
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={classes.postBlock}>
        <h3>my post</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}> Add post</button>
            </div>
        </div>
        <div className={classes.post}>
            {postElement}
        </div>
    </div>

}
export default MyPost;