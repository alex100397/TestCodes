// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard({ title, body, tags, reactions, views }) {
    return (
      <div className='post-card'>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className='tags'>
          {tags?.map((tag, index) => <p key={index} className='tag'>#{tag}</p>)}
        </div>
        <div className='reactions'>
        <p>👍 {reactions?.likes} | 👎 {reactions?.dislikes} | 👁️ {views}</p>
        </div>
      </div>
    );
  }
  