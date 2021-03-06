import ReactMarkdown from "react-markdown";

function Mainbar({ notes, activeNote, onUpdateNote }) {

    let updatedNote = notes.find((note) => note.noteid === activeNote);

    const onEditField = (key, value) => {
        updatedNote = {
            ...updatedNote,
            [key]: value
        };
    };

    if (!activeNote)
        return <div className="no-active-note">No note selected</div>;

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id="title"
                    value={activeNote.notetitle}
                    onChange={(e) => onEditField("notetitle", e.target.value)}
                    autoFocus
                />
                <textarea
                    id="body"
                    placeholder="Write your note here..."
                    value={activeNote.notetext}
                    onChange={(e) => onEditField("notetext", e.target.value)}
                />
            </div>
            <button
                onClick={() => onUpdateNote(updatedNote)}>
                Update
            </button>
            <div className="app-main-note-preview">
                <h1 className="preview-title" style={{color:"black"}}>
                    {notes.find((note) => note.noteid === activeNote).notetitle}
                </h1>
                <ReactMarkdown className="markdown-preview">
                    {notes.find((note) => note.noteid === activeNote).notetext}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Mainbar