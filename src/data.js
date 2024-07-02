
const Posts = [];

const initializePosts = () => {
    const storedPosts = localStorage.getItem('posts');
    if (!storedPosts) {
        localStorage.setItem('posts', JSON.stringify(Posts));
    }
};

initializePosts();

export const getPosts = () => JSON.parse(localStorage.getItem('posts'));

export const savePost = (newPost) => {
    const posts = getPosts();
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
};

export const editPost = (updatedPost) => {
    let posts = getPosts();
    posts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
    localStorage.setItem('posts', JSON.stringify(posts));
};

export const deletePost = (id) => {
    let posts = getPosts();
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
};
