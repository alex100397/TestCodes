import React, { useEffect, useState } from 'react';
import './Recipe.css';
import recipesData from './recipesData';

const Recipe = () => {
  const [count, setCount] = useState(0);
  const [recipeCount, setRecipeCount] = useState(0);
  const [average, setAverage] = useState(0);
  const [rating, setRating] = useState(0);
  const ratingCal = recipesData.filter((data) => data.rating >= rating);
  const countCal = ratingCal.reduce((acc, cumm) => (acc + cumm.rating), 0);
  useEffect(() => {
    setRecipeCount(ratingCal.length);
    setAverage(countCal)
  }, [rating, ratingCal, countCal]);
  return (
    <div>
      <h1 className='heading'>🍽️ Recipe Explorer</h1>
      <div className='filter-div'>
        <div className='filter'>
          <label htmlFor='rating'>Filter by Rating: </label>
          <select id='rating-select' aria-labelledby='select-dropdown' value={rating} onChange={(e) => setRating(e.target.value)} className='dropdown'>
            <option value='4.0'>4.0+</option>
            <option value='4.3'>4.3+</option>
            <option value='4.5'>4.5+</option>
            <option value='4.7'>4.7+</option>
            <option value='4.9'>4.9+</option>
          </select>
        </div>
        <div>
          <h1>{`Cart Items: ${count}`}</h1>
        </div>
      </div>
      <div className='average-rating'>
        <h1 className='heading'>{`Average Rating: ${average / recipeCount} (${recipeCount} recipes)`}</h1>
      </div>
      <div className='product-list'>
        {
          ratingCal.map((data) =>
            <div className='product-card'>
              <img src={data.image} aria-label='product-image' alt='Product' />
              <h2>{data.name}</h2>
              <h2>Cusisine: {data.cuisine}</h2>
              <h2>Rating: {data.rating} ({data.reviewCount} reviews)</h2>
              <button onClick={() => setCount((prev) => ++prev)}>Add to Cart</button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Recipe;
