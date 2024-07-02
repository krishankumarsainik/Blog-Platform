import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../data';

const Home = () => {
    const [posts, setPosts] = useState([]);
    // console.log(posts)
    useEffect(() => {
        setPosts(getPosts());
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Recent Blog Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="mb-4 p-4 border rounded">
                    <Link to={`/post/${post.id}`} className="text-xl">{post.title}</Link>
                    <p>{post.snippet}</p>
                    <p className="text-gray-500">{post.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
