class Contact {
    name;
    height;
    width;
    constructor(name,height, width) {
        this.name = name;
      this.height = height;
      this.width = width;
    }
    mail(){
        console.log(this.name, 'recive your email')
    }
  }

  const adnan = new Contact('Adnan',5.8, 72);
//   const rakib = new Contact('Rakib',5.7, 70);
  adnan.mail();
//   rakib.mail();
  console.log(adnan);
 