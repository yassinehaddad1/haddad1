import React from 'react';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import './Movies.css';

const movies = [
  {
    id: 1,
    title: 'Outer Banks',
    image: 'https://fr.web.img5.acsta.net/c_310_420/pictures/20/04/01/09/18/5584721.jpg',
    rating: 9.2,
    year: 2023,
    categories: ['Series', 'Drama']
  },
  {
    id: 2,
    title: 'Oppenheimer',
    image: 'https://fr.web.img2.acsta.net/pictures/23/05/26/16/52/2793170.jpg',
    rating: 8.9,
    year: 2023,
    categories: ['Movie', 'Biography']
  },
  {
    id: 3,
    title: 'House of the Dragon',
    image: 'https://fr.web.img2.acsta.net/c_310_420/pictures/23/05/17/14/30/0480031.jpg',
    rating: 8.5,
    year: 2023,
    categories: ['Series', 'Drama']
  },
  {
    id: 4,
    title: 'Wednesday',
    image: 'https://fr.web.img2.acsta.net/c_310_420/pictures/22/09/23/15/11/2942764.jpg',
    rating: 8.1,
    year: 2023,
    categories: ['Series', 'Comedy']
  },
  {
    id: 5,
    title: 'The Night Agent',
    image: 'https://fr.web.img3.acsta.net/c_310_420/pictures/23/03/29/11/43/2995383.jpg',
    rating: 8.7,
    year: 2023,
    categories: ['Movie', 'Action']
  },
  {
    id: 6,
    title: 'The Terminal List ',
    image: 'https://fr.web.img5.acsta.net/c_310_420/pictures/22/06/08/17/32/4826228.jpg',
    rating: 8.8,
    year: 2023,
    categories: ['Series', 'Drama']
  }
];

const Movies = () => {
  return (
    <section className="movies-section" id="movies">
      <div className="movies-container">
        <motion.div
          className="movies-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="movies-title">Latest Movies & Series</h2>
          <p className="movies-subtitle">
            Explore our vast collection of the latest movies and TV series
          </p>
        </motion.div>

        <div className="movies-grid">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className="movie-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={movie.image} alt={movie.title} className="movie-image" />
              <div className="movie-info">
                <div className="movie-header">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-meta">
                    <div className="movie-rating">
                      <StarIcon className="rating-icon" />
                      <span>{movie.rating}</span>
                    </div>
                    <div className="movie-year">{movie.year}</div>
                  </div>
                </div>
                <div className="movie-categories">
                  {movie.categories.map((category, i) => (
                    <span key={i} className="movie-category">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movies;
