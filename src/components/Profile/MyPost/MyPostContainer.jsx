import React, {Component} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{ //формируем данны из стейта
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
    }
}

let mapDispatchToProps=(dispatch)=>{ // формируем колбеки   из диспача
    return{
        addPost:()=>{
            dispatch(addPostActionCreator());

        },
        updateNewPostText:(text)=>{
           dispatch(updateNewPostTextActionCreator(text));
        },
    }
}

const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost);
// возвращает контейнерную компонентку в которой передает пропсы и колбеки для презентационной

export default MyPostContainer;