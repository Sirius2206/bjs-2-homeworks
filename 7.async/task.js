class AlarmClock {
    alarmCollection = [];
    timerId = null;

    addClock (id, time, callback) {
        if (id === undefined) {
            throw new Error ("Отсутствует идентификатор создаваемого звонка");
        }
        if (this.alarmCollection.some((obj) => {obj.id === id})) {
            console.error("Будильник с заданным id уже существует");
            return;
        }
        let resultClock = {
            id: id,
            time: time,
            callback: callback
        }
        this.alarmCollection.push(resultClock);
    }

    removeClock (id) {
        let result = this.alarmCollection.filter((obj) => {obj.id !== id})
        if (result.length > 0) {
            console.log(`Будильник с id = ${id} удален.`)
            return;
        }
        console.log("Не удалось найти будильник с таким id");
    }

    getCurrentFormattedTime () {
        let date = new Date();
        let result = `${date.getHours}:${date.getMinutes}`;
        return result;
    }

    start() {

    }

    stop() {

    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach((el) => {
            console.log(`Будильник №${el.id} заведен на ${el.time}`);   
        })
    }
}
