# Pantry Management System

## Link: https://my-pantry-app-phi.vercel.app/

## Overview

The Pantry Management System is a web application designed to help users keep track of their pantry items, manage quantities, and generate AI-powered recipes based on available ingredients. The application leverages modern technologies like Next.js, Chakra UI, Firebase, and the Google Gemini API for a seamless user experience.


## Features

- **Item Management**: Add, edit, delete, and manage the quantities of pantry items.
- **Search and Sort**: Search for items and sort them by name or quantity.
- **AI-Generated Recipes**: Generate recipes based on selected pantry items using Google Gemini API.
- **Responsive Design**: User-friendly interface built with Chakra UI for a responsive and modern look.

## Project Structure

- `components/`: Contains React components such as `Navbar`, `PantryList`, `AddItemModal`, `SearchBar`, `SortingDropdown`, and `RecipeModal`.
- `context/`: Contains the `PantryContext` for managing global state.
- `pages/`: Contains Next.js pages, including the main `index.js`.
- `utils/`: Contains utility functions such as `fetchRecipe.js` for interacting with the Google Gemini API.
- `.env`: Environment variables file (not included in the repository).

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
- **Google Gemini API**: An API for generating content and managing conversations using Google's generative models.

## Setup and Deployment

### Prerequisites

- Node.js (v18 or higher)
- npm

### Local Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/pantry-management-system.git
   cd pantry-management-system
