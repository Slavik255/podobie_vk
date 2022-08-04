import React, { Component } from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return (
        <div className={s.item}>
            <img className={s.posts__img} src="http://pm1.narvii.com/7098/6c3f2b0e89cca0015d4deec8510c271588fa67bdr1-794-1006v2_uhq.jpg" />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;
