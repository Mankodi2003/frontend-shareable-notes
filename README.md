# Notes App 📒
A simple React-based Notes App to create, view, and delete notes. The app is styled beautifully to provide a user-friendly interface.

## Folder Structure

```
src/
│
├── App.css           // Styling for the application.
├── App.jsx           // Main component managing the app logic.
├── CreateNote.jsx    // Component for creating new notes.
├── Footer.jsx        // Footer component displaying copyright info.
├── Header.jsx        // Header component with the app logo and title.
├── images/keep.png   // App logo.
├── index.css         // Global CSS styles.
├── index.js          // Entry point of the app.
└── Note.jsx          // Component for displaying individual notes.
```

## Features

- **Create Notes**: Add a new note with a title and description.
- **Delete Notes**: Remove unwanted notes with a single click.
- **Dynamic Interface**: The app updates in real time as notes are created or deleted.

## Technologies Used

- **React.js**: For building the user interface.
- **CSS**: For styling components.
- **JavaScript (ES6+)**: For app functionality.

## How to Run Locally

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd notes-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).


## Future Enhancements

- Add functionality to edit existing notes.
- Implement a search feature to quickly find notes.
- Use local storage or a backend to save notes persistently.

## License

This project is open-source and available under the [MIT License](LICENSE).
