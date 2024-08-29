import React, { useState } from 'react';
import './App.css';
import StarRating from './components/StarRating/StarRating';
import logo from '../src/assets/supabase-logo.svg'

function App() {

  const [username, setUsername] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && reviewText.trim() && rating) {
      const newReview = { username, reviewText, rating };
      setReviews([...reviews, newReview]);

      // Reset form fields
      setUsername('');
      setReviewText('');
      setRating(1);
    }
  };

  return (
    <div className="App">
      <div className='box'>
        <img src={logo} className='logo' />
      <h1>Submit Your Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-white'>Username:</label>
          <input className='text-white'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='text-white'>Review:</label>
          <textarea className='text-white' style={{ height: '100px' }}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='text-white'>Rating:</label>
          <StarRating rating={rating} setRating={setRating} />
        </div>
        <button type="submit" className='btn btn-primary rounded-pill' style={{ marginTop: '10px' }}>Submit Review</button>
      </form>

      <h2>Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3> Username : {review.username}</h3>
            <p> Review :{review.reviewText}</p>
            <p>Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
