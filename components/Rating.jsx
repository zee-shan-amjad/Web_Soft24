import {BsStar} from 'react-icons/bs';

import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="star" key={`rating-key${i}`}>
          <FaStar strokeWidth='1px'/>
        </li>
      );
    } else {
      totalRating.push(
        <li className="star star-o" key={`rating-key${i}`}>
          <FaStar/>
        </li>
      );
    }
  }

  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;

