class User{
    //static for constant   -- can't be accessed by this  ie obj.
    name;
    email = "paras@gmail.com";
    static phone;
    address;
    role; 
   
    constructor (name){
        this.name = name;
        
    }
   
   


    setName(phone){
        this.phone = phone;
    }
    getname(){
        return this.phone;
    }

}

let userObj = new User("name");
console.log(userObj)




class Student{
    name;
    marks;

    percentage;
    division;

    constructor(name, marks){
        this.name = name;
        this.marks = marks;
        this.getPercent();
        this.getDivision();
    }


    getPercent(){
        this.percentage = (this.marks / 500) *100;
    }

    getDivision(){
        if(this.percentage >= 80){
            this.division = "Distinction"
        }
        else if(this.percentage >= 60){
            this.division = "First Division"
        }
        else if(this.percentage >= 45){
            this.division = "Second Division"
        }
        else if(this.percentage >= 32){
            this.division = "Third Division"
        }
        else{
            this.division = "Failed"
        }
    }
}



let stu1 = new Student("paras" , 400);

console.log(stu1)




class Product{
    #name;
    #price;
    #brand;
    #categorie;
    #discount;
    #afterDiscountPrice;

    constructor(name,price,brand,categorie,discount){
        this.#name = name;
        this.#price = price;
        this.#brand = brand;
        this.#categorie = categorie;
        this.#discount = discount;
        this.#afterDiscount();
    }

    #afterDiscount(){
        this.#afterDiscountPrice = this.#price -( (this.#discount/100) * this.#price);
    }


    printValues(){
        console.log(this.#name);
        console.log(this.#price);
        console.log(this.#brand);
        console.log(this.#categorie);
        console.log(this.#discount);
        console.log(this.#afterDiscountPrice);
    }


}

let product1 = new Product("shoes",4000,"NIKE","wears",20);
product1.printValues();