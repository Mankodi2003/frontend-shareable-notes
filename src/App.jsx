import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  // Add a new note
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, { ...note, isPinned: false }];
    });
  };

  // Delete a note by its index
  const onDelete = (id) => {
    setAddItem((oldData) => oldData.filter((_, index) => index !== id));
  };

  // Toggle pin state for a note
  const togglePin = (id) => {
    setAddItem((oldData) =>
      oldData.map((note, index) =>
        index === id ? { ...note, isPinned: !note.isPinned } : note
      )
    );
  };

  // Edit a note
  const editNote = (id, updatedNote) => {
    setAddItem((oldData) =>
      oldData.map((note, index) =>
        index === id ? { ...note, ...updatedNote } : note
      )
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem
        .sort((a, b) => b.isPinned - a.isPinned) // Pinned notes go to the top
        .map((val, index) => (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            togglePin={togglePin}
            editNote={editNote}
            isPinned={val.isPinned}
          />
        ))}
      <Footer />
    </>
  );
};

export default App;
