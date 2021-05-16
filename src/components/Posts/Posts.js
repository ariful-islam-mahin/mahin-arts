import React, { useEffect, useState } from 'react';
import PostsData from '../../PostsData/PostsData'
import PostItem from '../PostItem/PostItem';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(PostsData)
    }, [])

    return (
        <div>
            {
                posts.map((post, idx) => <PostItem key={idx} post={post}></PostItem>)
            }
        </div>
    );
};

export default Posts;