class Madrasah {
    name;
    clases;
    roll;
    constructor(name, clases, roll){
        this.name = name;
        this.clases = clases;
        this.roll = roll;
    }
}
class ClassEight extends Madrasah {
    vaccice;
    constructor (name, clases, roll, vaccice){
    super(name, clases, roll)
    this.vaccice = vaccice;
    }
}

class ClasNine extends Madrasah {
   vaccice;
   constructor(name, clases, roll, vaccice){
       super(name, clases, roll)
       this.vaccice = vaccice;
   }
}
class ClassTen extends Madrasah {
    vaccice;
    constructor(name, clases, roll, vaccice){
        super(name, clases, roll)
        this.vaccice = vaccice;
    }
}
const habib = new ClassEight('Habib', 'Eight', 12, 'Complete');
const asad = new ClasNine('asad', 'Nine', 8, 'No-Complete');
const arif = new ClassTen('arif', 'Ten', 155, 'Complete')
// console.log(habib, asad, arif);


// Building calculation use maltiple class 

class Building {
    name = 'Building';
    room;
    window;
    door;
    constructor(name, room, window, door){
        this.name = name;
        this.room = room;
        this.window = window;
        this.door =  door;
    }
}
class FourRoomBuil extends Building {
    
}
class SixRoomBuil extends Building {

}
class NineRoomBuil extends Building {

}

const fourRoom = new FourRoomBuil('Four Room',4, 12, 10);
const sixRoom = new SixRoomBuil('Six Room',6, 18, 15);
const nineRoom = new NineRoomBuil('Nine Room',9, 12, 22.5);

console.log(fourRoom, fourRoom, sixRoom, nineRoom);
