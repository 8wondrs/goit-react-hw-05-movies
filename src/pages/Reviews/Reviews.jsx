import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from '../../services/TheMovieDbAPI';
import { useParams } from 'react-router-dom';
import {
  Title,
  Block,
  Text,
  ReviewsList,
  ReviewsItem,
} from './Reviews.styled.jsx';
import PropTypes from 'prop-types';

const theMovieDbAPI = new TheMovieDbAPI();

export function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await theMovieDbAPI.getReviews(moviesId);

        if (data.results.length === 0) {
          setError('Oooops! There is no reviews');
        } else {
          setReviews(data.results);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getReviews();
  }, [moviesId]);

  return (
    <Block>
      <Title>Reviews</Title>

      <ReviewsList>
        {reviews.map(review => (
          <ReviewsItem key={review.id}>
            <h4>Author: {review.author}</h4>
            <Text>{review.content}</Text>
          </ReviewsItem>
        ))}
      </ReviewsList>

      {error && <p>{error}</p>}
    </Block>
  );
}

Reviews.propTypes = {
  moviesId: PropTypes.number,
};
