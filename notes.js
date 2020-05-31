const chalk = require('chalk')

const fs = require('fs');

// 1. Add Note

const addNote = (title, body) => {
    const notes = loadNotes();
    // console.log(notes);

    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added...'));
    } else {
        console.log(chalk.bgRed('Note title taken'));
    }
    // console.log(notes);
}

// 2. Remove Note

const removableNote = (title) => {
    let notes = loadNotes();
    console.log(notes);
    const deleteNote = notes.filter(note => note.title === title)
    if (deleteNote.length === 0) {
        console.log(chalk.bgRed('Note does not exist'));
    } else {
        notes = notes.filter(note => note.title !== title)
        saveNotes(notes);
        console.log(notes);
        console.log(chalk.bgGreen('Note removed'));
    }
}

// 3. List Notes

const listNotes = () => {
    const notes = loadNotes();
    // console.log(notes.length);
    let i=1
    notes.forEach(note => {
            console.log(chalk.white(`${i++}: ${note.title}`));
    });
}

// 4. Read Note

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find(note => note.title === title)
    if (foundNote){
        console.log(chalk.green.bold(`${foundNote.title}:`), chalk.white(`${foundNote.body}`));
    }
    else {
        console.log(chalk.bgRed('No note found with that title'));
    }
}

// Save Note

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Load Notes

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        // console.log('Error loading notes');
        return []
    }
}

module.exports = {
    addNote: addNote,
    removableNote: removableNote,
    listNotes: listNotes,
    readNote: readNote
}