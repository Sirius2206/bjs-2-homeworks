class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, newState = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = newState;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state (newState) {
        this._state = (newState < 0) ? 0 : (newState > 100) ? 100 : newState;

    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state = 100) {
        this.author = author;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if (book instanceof PrintEditionItem) {
            if (book.state >= 30) {
                this.books.push (book);
            }
        }
    }

    findBookBy (type, value) {
        let result = null;
        this.books.forEach(book => {
            if (book[type] === value) {
                return book;
            }
        })
    }

    giveBookByName (bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1);
            }
        }
    }
}