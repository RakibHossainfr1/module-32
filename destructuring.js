const phone = {
    name: 'Samsung A10',
    ram: '4GB',
    rom: '32GB',
    display: '6.4 Inch',
    camera: 16,
}

const {display, ram, camera} = phone;
// console.log(display, ram, camera);

const book = {
    name: 'Quran',
    ayat: 6666,
    surah : {
        name: 'fateha',
        ayat: 7,
        page: 1,
    },
    totalSurah: 114,
}

const {name, totalSurah, surah, ayat} = book;
console.log(name, totalSurah, surah.page, ayat);

