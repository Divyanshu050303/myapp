class human{
    constructor(){
        this.gender="male"
    }
    printGender=()=>{
        console.log(this.gender)
    }
}

class person extends human {
    constructor() {
        super()
        this.person = "Divyanshu"
    }
    printPerson=() =>{
        console.log(this.person)
    }
}
const p=new person();
console.log(p.printPerson())
console.log(p.printGender())
