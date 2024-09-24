import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import movieService from '../services/movieService';

jest.mock('../services/movieService');  

describe('MovieDetails Component', () => {
  it('displays loading text initially and then renders movie details', async () => {
    const mockMovieDetails = {
      title: 'John Wick',
      year: '2014'
    };

    movieService.getMovieById.mockResolvedValue(mockMovieDetails);  

    render(
      <MemoryRouter initialEntries={['/movie/tt2911666']}>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('John Wick')).toBeInTheDocument();
      expect(screen.getByText('Year: 2014')).toBeInTheDocument();
    });
  });

  it('handles error when fetching movie details fails', async () => {
    movieService.getMovieById.mockRejectedValue(new Error('API Error'));

    render(
      <MemoryRouter initialEntries={['/movie/tt2911666']}>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'Error fetching movie details:', expect.any(Error)
      );
    });
  });
});
