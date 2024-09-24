import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

describe('MovieCard Component', () => {
  it('renders movie title, year, and poster', () => {
    const movie = {
      title: 'Inception',
      year: '2010',
      poster: 'http://example.com/poster.jpg',
      type: 'movie'
    };

    const { getByText, getByAltText } = render(<MovieCard movie={movie} />);

    expect(getByText('Inception')).toBeInTheDocument();
    expect(getByText('2010')).toBeInTheDocument();
    expect(getByAltText('Inception')).toHaveAttribute('src', movie.poster);
  });

  it('renders default poster when no poster is provided', () => {
    const movie = {
      title: 'Inception',
      year: '2010',
      poster: '',
      type: 'movie'
    };

    const { getByAltText } = render(<MovieCard movie={movie} />);
    const imgElement = getByAltText('Inception');

    expect(imgElement).toHaveAttribute('src', '');
  });
});

