import React from "react";

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p
                    style={{
                        fontSize: props.fontSize,
                        textAlign: props.alignment,
                        fontWeight: props.isBold ? 'bold' : 'normal',
                        fontStyle: props.isItalic ? 'italic' : 'normal',
                        textDecoration: props.isUnderlined ? 'underline' : 'none'
                    }}
                >
                    {props.content}
                </p>
                <button className="btn" onClick={deleteNote}>🚮</button>
            </div>
        </>
    );
};

export default Note;
