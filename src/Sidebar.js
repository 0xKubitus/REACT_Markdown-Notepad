// import ... from '...';


const Sidebar = ( { notes, onAddNote } ) => { 
  
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>0xKubitus Notes</h1>
        <button onClick={onAddNote}>Create new Note</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) =>(
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            
            <p>{note.body && note.body.substr(0, 100) + '...'}</p>

            <small className="note-meta">Last modified {new Date(note.lastModified).toLocaleDateString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}

      </div>
    </div>













      


  );
};

export default Sidebar;