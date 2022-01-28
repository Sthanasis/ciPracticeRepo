import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import api from './api';

const PostsContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get('/posts')
      .then((response) => {
        setPosts(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      {posts.map((post) => (
        <Text key={post.id}>{post.title}</Text>
      ))}
    </View>
  );
};

export default PostsContainer;
