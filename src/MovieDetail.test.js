import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'asgdsa'
  }
};

console.error = jest.fn();

test('<MovieDetail with match />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 'hi',
        title: 'Movies Rules'
      }
    })
  );

  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
