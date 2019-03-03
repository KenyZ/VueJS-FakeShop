
import Utils from './utils'
import Kernel from './Kernel'


const img_vegetables = require('../assets/img/vegetables.jpg')
const img_drinks = require('../assets/img/drinks.jpg')
const img_breakfast = require('../assets/img/breakfast.jpg')

export var Product = class {
    
    constructor(name, price, rate = 1, category){
        this.name = name
        this.price = price
        this.rate = rate
        this.category = category
        this.img = "https://via.placeholder.com/400"
    }

    static randomIndexIn(array, n){
        n = n >= array.length ? array.length - 1 : n
        
        let k = n;
        let randomIndex = []
        let key = 0
        do{
            key = Math.floor(Math.random() * (array.length - 1))
            if(!randomIndex.includes(key)){
                randomIndex.push(key)
            }
        }while(randomIndex.length != n)

        return randomIndex
    }

    static randomPrice(min, max){
        return Utils.randomInt(min * 100, max * 100) / 100
    }

    static randomRate(){
        return Utils.randomInt(0, 5)
    }
    
}

export class Vegetable extends Product{

    constructor(name, price, rate){
        super(
            name + ' ' + Vegetable.randomWeight() + ' kg', 
            price, 
            rate, 
            Kernel.products_category()['vegetables']
        )

        this.img = img_vegetables
    }

    static randomWeight(){
        return Utils.randomInt(1, 4)
    }

}

export class Drink extends Product{

    constructor(name, price, rate){
        super(
            name, 
            price, 
            rate, 
            Kernel.products_category()['drinks']
        )
        this.img = img_drinks

    }
    
    static randomLitre(){
        return Utils.randomInt(1, 2)
    }

}


export class Breakfast extends Product{

    constructor(name, price, rate){
        super(
            name, 
            price, 
            rate, 
            Kernel.products_category()['breakfast']
        )
        this.img = img_breakfast
    }

}