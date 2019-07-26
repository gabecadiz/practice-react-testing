import React, { Component } from 'react';
import MovieForm from '../MovieForm/MovieForm.component';

export default class NewMovie extends Component {
  render() {
    return (
      <div>
        <h1 data-testid='page-title'>New Movie</h1>
        <MovieForm />
      </div>
    );
  }
}
