import React from 'react'
import PostCard from './PostCard'
import posts from './postData'
import './BlogPosts.css'
const BlogPosts = () => {
  return (
    <div>
      <h2>Blog Posts </h2>
      {
        posts.map((post) => <PostCard
            key={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
          voews={post.views}
        />)
      }
      
    </div>
  )
}

export default BlogPosts