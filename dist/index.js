"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    _age;
    constructor(id, name, email, password, phone, _age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this._age = _age;
        this.age = _age;
    }
    notebooks = [];
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    getNotebooks() {
        return this.notebooks;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this._age = value;
    }
    displayInfo() {
        console.log(`${this.id} | ${this.name} | ${this.email} | ${this.phone} | ${this.age}`);
    }
}
const user = new User(15, "Nadra", "nadora155@gmail.com", "2007", "01234567891", 19);
user.displayInfo();
class Admin extends User {
    manageNotes() {
        console.log("Admin is managing notes");
    }
}
const admin = new Admin(13, "Mohammed", "mohammed131@mail.com", "0000", "0108444789", 21);
admin.displayInfo();
admin.manageNotes();
class Note {
    id;
    title;
    content;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }
    preview(length = 20) {
        return this.content.length > length
            ? this.content.slice(0, length) + "..."
            : this.content;
    }
}
const note = new Note(20, "nm.", "typescript is typed superset of JavaScript", user);
console.log(note.preview());
console.log(note.author.name);
class NoteBook {
    title;
    notes = [];
    nextId = 1;
    constructor(title) {
        this.title = title;
    }
    addNote(title, content, author) {
        const note = new Note(this.nextId++, title, content, author);
        this.notes.push(note);
        return note;
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((n) => n.id !== noteId);
    }
    getNotes() {
        return [...this.notes];
    }
}
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
const nb = new NoteBook("Study");
nb.addNote("A", "first note content", user);
nb.addNote("B", "second note content", user);
console.log(nb.getNotes().length);
nb.removeNote(1);
console.log(nb.getNotes().length);
user.addNotebook(nb);
console.log(user.getNotebooks().length);
console.log(user.getNotebooks()[0]?.title);
const nums = new Storage();
nums.addItem(10);
nums.addItem(20);
nums.removeItem(10);
console.log(nums.getAllItems());
const names = new Storage();
names.addItem("noor");
console.log(names.getAllItems());
//# sourceMappingURL=index.js.map