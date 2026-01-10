function Rating({ rating }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fa-star rating__star ${
            star <= rating ? "fa-solid rating__star--active" : "fa-regular"
          }`}
        ></i>
      ))}
    </div>
  );
}

export default Rating;
