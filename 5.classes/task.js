class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    fix() {
        this.setState (this.state * 1.5);
    }

    set state (state) {
        this.state = (state < 0) ? 0 : (state > 100) ? 100 : state;
    }

    get state () {
        return this.state;
    }
}
