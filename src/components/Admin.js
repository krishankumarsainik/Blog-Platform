import React, { useState, useEffect, useContext } from 'react';
import { getPosts, savePost, deletePost } from '../data';
import { AuthContext } from '../Authcontext';
import { useNavigate, Link } from 'react-router-dom';

const Admin = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', snippet: '', content: '', date: '' });
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log(posts)

    useEffect(() => {
        setPosts(getPosts());
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPostWithId = { ...newPost, id: getPosts().length + 1 };
        savePost(newPostWithId);
        setNewPost({ title: '', snippet: '', content: '', date: '' });
        setPosts(getPosts());
    };

    // const handleEdit = (id) => {
    //     navigate(`/edit/${id}`)
    // }
    const handleDelete = (id) => {
        deletePost(id);
        setPosts(getPosts());
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Admin Page</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-4">Logout</button>
            <h2 className="text-xl mb-4">Create New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <input name="title" value={newPost.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
                <input name="snippet" value={newPost.snippet} onChange={handleChange} placeholder="Snippet" className="border p-2 w-full" />
                <textarea name="content" value={newPost.content} onChange={handleChange} placeholder="Content" className="border p-2 w-full" />
                <input name="date" type="date" value={newPost.date} onChange={handleChange} placeholder="Date" className="border p-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Post</button>
            </form>
            <h2 className="text-xl mb-4">Manage Posts</h2>
            {posts.map(post => (
                <div key={post.id} className="mb-4 p-4 border rounded">
                    <h3 className="text-xl">{post.title}</h3>
                    <p>{post.snippet}</p>
                    <p className="text-gray-500">{post.date}</p>
                    <Link to={`/admin/edit/${post.id}`} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</Link>
                    <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Admin;
