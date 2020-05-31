const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2]

// console.log(process.argv);

// Customize yargs version
// yargs.version('1.1.1')

// Create add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Title: ' + argv.title + '; ' + 'Content: ' + argv.body);
        // console.log(argv.title);
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removableNote(argv.title)
    }
})

// Create list Command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log(chalk.bold.bgBlue('Your Notes'));
        notes.listNotes()
    }
})

// Create read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv);