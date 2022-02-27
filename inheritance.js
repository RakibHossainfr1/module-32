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
    
}

class ClasNine extends Madrasah {
   
}
class ClassTen extends Madrasah {
    
}
const habib = new ClassEight('Habib', 'Eight', 12);
const asad = new ClasNine('asad', 'Nine', 8);
const arif = new ClassTen('arif', 'Ten', 1)
console.log(habib, asad, arif);