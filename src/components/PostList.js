import axios from 'axios';
import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/posts`)
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.location}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;