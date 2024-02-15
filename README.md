# CLOCK APP

- [Clock App](#clock-app)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [Author](#author)

## Overview

![Project Preview](./src/assets/images/preview.jpg "Project Preview")

The Clock App is a web application that displays the current time and provides additional functionalities such as dynamic greetings based on the time of day, background image changes according to the time of day, and random programming quote generation. The app is designed to be responsive, ensuring a seamless user experience across various devices.

## Features

- **Dynamic Greeting:** The app greets the user with "Good morning," "Good afternoon," or "Good evening" based on the time of day.
- **Background Image Change:** The background image of the app changes dynamically to reflect whether it is daytime or nighttime.
- **Random Quote Generation:** Clicking the refresh icon generates a new random programming quote, providing users with motivational and insightful programming-related quotes.

## Technologies Used

The Clock App is built using the following technologies:

- HTML: For the structure of the web page.
- CSS: For styling the app and making it visually appealing.
- JavaScript: For the app's functionality, including time calculations and API interactions.

## APIs Used

The Clock App utilizes the following APIs:

- World Time API: Sets the time based on the visitor's IP address and provides additional data, such as the day of the year.
- IP Geolocation API: Retrieves the user's city and country information based on their IP address.
- Quotes API: Generates random programming quotes for an inspirational touch.

## Project Structure

The project is organized into the following components:

- components: Contains React components used to build the UI.
- styles: Contains CSS styles for the components, ensuring a consistent and visually appealing design.
- assets: Contains images and other assets used in the project, enhancing the user experience.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/gurgenidzegiorgi/Github-user-search-app.git

cd Github-user-search-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the app:

```bash
pnpm run dev
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/my-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/my-feature.
5. Submit a pull request.

## Author

- GitHub Repo - [Clock App](https://github.com/gurgenidzegiorgi/Clock-App)
- Live URL - [Netlify](https://clock-app-giorgi-gurgenidze.netlify.app/)
- Author - [Giorgi Gurgenidze](https://www.linkedin.com/in/george-gurgenidze-5801501a0/)
