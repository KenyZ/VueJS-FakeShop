
import {Vegetable, Drink, Breakfast, Product} from './Product'
import Utils from './utils';

const store = {
    vegetables: {
        type: Vegetable,
        name: 'Fruits et Légumes',
        price: [1, 3],
        array: [
            'Pomme', 
            'Poire', 
            'Fraise', 
            'Salade', 
            'Tomates']
    },
    drinks: {
        type: Drink,
        name: 'Boissons',
        price: [1, 3],
        array: [
            'Coca cola', 
            'Fanta', 
            'Oasis tropical', 
            'Schweppes agrum', 
            'Eau Badoit']
    },

    breakfast: {
        type: Breakfast,
        name: 'Petit déjeuner',
        price: [2, 4],
        array: [
            'Biscotte', 
            "Miel pop's", 
            "Krisprolls", 
            'Barre de céréales', 
            'Poudre de cacao', 
            'Confiture de fraise']
    }

}


export default class Faker{

    static getProducts(n = 3){
        
        let array = []
        let uid = 0

        for(let _productKey in store){
            let randomIndex = Product.randomIndexIn(store[_productKey].array, n)
            let _product = null
            let _product_class = store[_productKey].type


            randomIndex.map((idx) => {

                _product = new _product_class(
                    store[_productKey].array[idx],
                    Product.randomPrice(...store[_productKey].price),
                    Product.randomRate()
                )
                _product.uid = uid
                array.push(_product)

                uid++
            })
    
        }

        return Utils.shuffle(array)
    }

}