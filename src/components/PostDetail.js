import React from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from '../data';

const PostDetail = () => {
    const { id } = useParams();
    const post = getPosts().find(p => p.id === parseInt(id));

    return (
        <div className="container mx-auto p-4">
            {post ? (
                <>
                    <h1 className="text-2xl mb-4">{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{post.snippet}</p>
                    <p className="text-gray-500">{post.date}</p>
                </>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
};

export default PostDetail;
