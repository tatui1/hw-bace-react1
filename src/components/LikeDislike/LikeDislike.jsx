export const LikeDislike = ({ reaction, onLike, onDislike }) => {
  return (
    <div>
      <button
        onClick={onLike}
        style={{ color: reaction === "like" ? "green" : "black" }}>Like</button>

      <button
        onClick={onDislike}
        style={{ color: reaction === "dislike" ? "red" : "black" }}>Dislike
      </button>
    </div>
  )
}