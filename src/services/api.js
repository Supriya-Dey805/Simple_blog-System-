const LOCAL_STORAGE_KEY = 'simple_blog-system;';

const initialPosts = [
  { id: '1', title: 'Getting Started with React', content: 'React makes it painless to create interactive UIs...', category: 'Tech', tags: ['React', 'Frontend'], featured: true, date: '2026-05-15' },
  { id: '2', title: 'Mastering CSS Grid', content: 'Grid layout is one of the most powerful features of CSS...', category: 'Design', tags: ['CSS', 'Frontend'], featured: false, date: '2026-05-16' }
];

const getStoredPosts = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialPosts));
    return initialPosts;
  }
  return JSON.parse(stored);
};

export const fetchPosts = async () => {
  return getStoredPosts();
};

export const createPostApi = async (post) => {
  const posts = getStoredPosts();
  const newPost = { ...post, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] };
  posts.unshift(newPost);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  return newPost;
};

export const updatePostApi = async (id, updatedPost) => {
  const posts = getStoredPosts();
  const index = posts.findIndex(p => p.id === id);
  posts[index] = { ...posts[index], ...updatedPost };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  return posts[index];
};

export const deletePostApi = async (id) => {
  const posts = getStoredPosts();
  const filtered = posts.filter(p => p.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filtered));
  return true;
};