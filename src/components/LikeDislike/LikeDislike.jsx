export const LikeDislike = ({ reaction, onLike, onDislike }) => {
  return (
    <div>
      <button
        onClick={onLike}
        style={{ 
          color: reaction === "like" ? "green" : "black",
          fontWeight: reaction === "like" ? "bold" : "normal"
        }}
      >
        👍 Like
      </button>

      <button
        onClick={onDislike}
        style={{ 
          color: reaction === "dislike" ? "red" : "black",
          fontWeight: reaction === "dislike" ? "bold" : "normal"
        }}
      >
        👎 Dislike
      </button>
    </div>
  )
}