import React, { useState } from "react";
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight, FaFont, FaThumbtack, FaEdit, FaTrash } from 'react-icons/fa';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [notes, setNotes] = useState([]); // List of notes
    const [editingNote, setEditingNote] = useState(null); // Note being edited
    const [note, setNote] = useState({
        title: '',
        content: '',
        fontSize: '16px',
        alignment: 'left',
        isBold: false,
        isItalic: false,
        isUnderlined: false,
        isPinned: false, // Pin functionality
    });

    // Handle input changes
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => ({ ...prevData, [name]: value }));
    };

    // Add or update a note
    const addOrUpdateNote = (event) => {
        event.preventDefault();

        if (editingNote !== null) {
            // Update existing note
            setNotes((prevNotes) =>
                prevNotes.map((item, index) =>
                    index === editingNote ? { ...item, ...note } : item
                )
            );
        } else {
            // Add new note
            setNotes((prevNotes) => [...prevNotes, note]);
        }

        // Reset note and editing state
        setNote({
            title: '',
            content: '',
            fontSize: '16px',
            alignment: 'left',
            isBold: false,
            isItalic: false,
            isUnderlined: false,
            isPinned: false,
        });
        setEditingNote(null);
    };

    // Delete a note
    const deleteNote = (index) => {
        setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    };

    // Edit a note
    const editNote = (index) => {
        setEditingNote(index);
        setNote(notes[index]);
        setExpand(true);
    };

    // Toggle pin
    const togglePin = (index) => {
        setNotes((prevNotes) =>
            prevNotes.map((item, i) =>
                i === index ? { ...item, isPinned: !item.isPinned } : item
            )
        );
    };

    const expandIt = () => setExpand(true);
    const backToNormal = () => setExpand(false);

    // Formatters
    const toggleBold = () => setNote((prev) => ({ ...prev, isBold: !prev.isBold }));
    const toggleItalic = () => setNote((prev) => ({ ...prev, isItalic: !prev.isItalic }));
    const toggleUnderline = () => setNote((prev) => ({ ...prev, isUnderlined: !prev.isUnderlined }));
    const changeFontSize = (size) => setNote((prev) => ({ ...prev, fontSize: size }));
    const changeAlignment = (alignment) => setNote((prev) => ({ ...prev, alignment }));

    return (
        <>
            {/* Note Creation */}
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
                    {expand && (
                        <input
                            type="text"
                            name="title"
                            value={note.title}
                            onChange={inputEvent}
                            placeholder="Title"
                            autoComplete="off"
                        />
                    )}

                    <div className="editor_controls">
                        <button type="button" onClick={toggleBold}>
                            <FaBold />
                        </button>
                        <button type="button" onClick={toggleItalic}>
                            <FaItalic />
                        </button>
                        <button type="button" onClick={toggleUnderline}>
                            <FaUnderline />
                        </button>
                        <button type="button" onClick={() => changeAlignment('left')}>
                            <FaAlignLeft />
                        </button>
                        <button type="button" onClick={() => changeAlignment('center')}>
                            <FaAlignCenter />
                        </button>
                        <button type="button" onClick={() => changeAlignment('right')}>
                            <FaAlignRight />
                        </button>
                        <button type="button" onClick={() => changeFontSize('20px')}>
                            <FaFont />
                        </button>
                        <button type="button" onClick={() => changeFontSize('12px')}>
                            <FaFont />
                        </button>
                    </div>

                    <textarea
                        rows="4"
                        name="content"
                        value={note.content}
                        onChange={inputEvent}
                        placeholder="Write a note..."
                        onClick={expandIt}
                        style={{
                            fontSize: note.fontSize,
                            textAlign: note.alignment,
                            fontWeight: note.isBold ? 'bold' : 'normal',
                            fontStyle: note.isItalic ? 'italic' : 'normal',
                            textDecoration: note.isUnderlined ? 'underline' : 'none',
                        }}
                    ></textarea>

                    {expand && (
                        <button className="plus_sign" onClick={addOrUpdateNote}>
                            {editingNote !== null ? "✎ Update" : "➕ Add"}
                        </button>
                    )}
                </form>
            </div>

            {/* Notes List */}
            <div className="notes_list">
                {notes
                    .sort((a, b) => b.isPinned - a.isPinned) // Pinned notes first
                    .map((item, index) => (
                        <div key={index} className="note_item">
                            <h3>{item.title}</h3>
                            <p
                                style={{
                                    fontSize: item.fontSize,
                                    textAlign: item.alignment,
                                    fontWeight: item.isBold ? 'bold' : 'normal',
                                    fontStyle: item.isItalic ? 'italic' : 'normal',
                                    textDecoration: item.isUnderlined ? 'underline' : 'none',
                                }}
                            >
                                {item.content}
                            </p>
                            <div className="note_actions">
                                <button onClick={() => togglePin(index)}>
                                    <FaThumbtack style={{ color: item.isPinned ? 'gold' : 'gray' }} />
                                </button>
                                <button onClick={() => editNote(index)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteNote(index)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default CreateNote;
