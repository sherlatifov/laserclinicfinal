export default function ReviewList({ reviews }) {
  return (
    <div className="row g-4">
      {reviews.map((review, index) => (
        <div className="col-12 col-lg-4" key={index}>
          <div className="card shadow-sm h-100">
            {review.type === 'video' ? (
              <div className="ratio ratio-16x9 object-fit-cover h-100">
                <iframe
                  src={review.url}
                  title={`video-review-${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="card-body">
                <div className="card-title">
                    Отличный результат!
                </div>
                <p className="card-text fst-italic">"{review.text}"</p>
                <h6 className="card-subtitle mt-2 text-muted">— {review.author}</h6>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
