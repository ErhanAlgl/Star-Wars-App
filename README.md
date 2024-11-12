# Star Wars Ships Explorer

This project is a React application built with Vite that allows users to explore Star Wars ships. Users can list ships, search for specific ships, view detailed information about each ship, and load more ships dynamically.

## Features

- **List Ships**: Display a list of Star Wars ships.
- **Search Ships**: Search for ships by name or model.
- **View Details**: Click on a ship to view detailed information.
- **Load More**: Load more ships with a "Load More" button.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Axios**: Promise-based HTTP client for making API requests.
- **Star Wars API (SWAPI)**: API for accessing Star Wars data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ErhanAlgl/Star-Wars-App.git
   cd Star-Wars-App
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Components

- **ShipList.jsx**: Displays a list of ships and handles search and pagination.
- **ShipDetail.jsx**: Displays detailed information about a selected ship.
- **SearchBar.jsx**: Provides a search input for filtering ships by name or model.
- **LoadMoreButton.jsx**: Button to load more ships when clicked.

## API Service

The `api.js` file in the `services` directory handles API requests to the Star Wars API (SWAPI). It provides functions to fetch ships and ship details.

## Styling

The `App.css` file in the `styles` directory contains the CSS styles for the application.