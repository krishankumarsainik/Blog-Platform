import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosts, editPost } from '../data';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: '', snippet: '', content: '', date: '' });

    useEffect(() => {
        const postToEdit = getPosts().find(p => p.id === parseInt(id));
        if (postToEdit) {
            setPost(postToEdit);
        } else {
            navigate('/admin');
        }
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editPost(post);
        navigate('/admin');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Edit Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" value={post.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
                <input name="snippet" value={post.snippet} onChange={handleChange} placeholder="Snippet" className="border p-2 w-full" />
                <textarea name="content" value={post.content} onChange={handleChange} placeholder="Content" className="border p-2 w-full" />
                <input name="date" value={post.date} onChange={handleChange} placeholder="Date" className="border p-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
            </form>
        </div>
    );
};

export default EditPost;
