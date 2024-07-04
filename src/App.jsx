import React, { useEffect, useState } from 'react';
import { getCategories, getJokeByCategory, getRandomJoke } from './api';
import './App.css';
import chuckNorrisImage from './assets/ChuckNorris.jpg';
import CategoryButton from './components/CategoryButton';
import JokeDisplay from './components/JokeDisplay';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
    fetchRandomJoke();
  }, []);

  const fetchRandomJoke = async () => {
    const jokeData = await getRandomJoke();
    setJoke(jokeData.value);
  };

  const fetchJokeByCategory = async (category) => {
    const jokeData = await getJokeByCategory(category);
    setJoke(jokeData.value);
  };

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
        <img src={chuckNorrisImage} alt="Chuck Norris the Goat" />
      <div className="categories">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            onClick={fetchJokeByCategory}
          />
        ))}
      </div>
      <JokeDisplay joke={joke} />
    </div>
  );
};

export default App;
