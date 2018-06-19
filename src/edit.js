import { initializeEditPage, lastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const spanElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)


titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    spanElement.textContent = lastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    spanElement.textContent = lastEdited(note.updatedAt)
})


document.querySelector('button').addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        initializeEditPage(noteId)
    }
})

