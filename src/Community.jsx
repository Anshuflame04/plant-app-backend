// Community.jsx
import React, { useState } from 'react';
import './Community.css'; // Importing external CSS for better styling

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAtnnDbDX-PdB24-tPLEoFoXDVzfQdt7a2dMuczvQBg2iealEtZQOTlgJCqWifFkJveYQD4lkv3O4x_ZW35IEfAguGsKytyBQbslWMZu17oMLGyv2BUfmeJw-wBBSMwd9Fq-EUoKDYFTw/s1600/importance-of-leaves', likes: 4, comments: ['Nice post!', 'Awesome!'], username: 'user1' },
    { id: 2, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXo6Pt7goxImjNTktsUCmZKmCYkDgcdWPgtQ&s', likes: 5, comments: ['Love it!', 'Great picture!'], username: 'user2' },
    { id: 3, imageUrl: 'https://www.researchgate.net/publication/323799995/figure/fig1/AS:631592431124497@1527594778397/Fig-1-a-normal-rice-leaf-b-defective-rice-leaf.png', likes: 8, comments: ['Beautiful leaf!', 'Stunning!'], username: 'user3' },
    { id: 4, imageUrl: 'https://pestsofbhutan.nppc.gov.bt/wp-content/uploads/2017/03/leaf-folder.jpg', likes: 12, comments: ['So green!', 'Looks healthy!'], username: 'user4' },
    { id: 5, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmzb323joopCHIXV8zXkOO5drCCGeViMPwg&s', likes: 15, comments: ['I want this plant!', 'Gorgeous!'], username: 'user5' },
  ]);

  const handleLike = (id) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (id, comment) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="community-container">
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="post-header">
            <span className="username">{post.username}</span>
          </div>
          <img src={post.imageUrl} alt="post" className="post-image" />
          <div className="post-actions">
            <button onClick={() => handleLike(post.id)} className="like-button">
              <span role="img" aria-label="like">❤️</span> {post.likes}
            </button>
            <div>
              {post.comments.map((comment, index) => (
                <p key={index} className="comment">{comment}</p>
              ))}
            </div>
            <CommentInput onSubmit={(comment) => handleComment(post.id, comment)} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentInput = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && comment.trim()) {
      onSubmit(comment.trim());
      setComment('');
    }
  };

  return (
    <input
      type="text"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Add a comment..."
      className="comment-input"
    />
  );
};

export default Community;
