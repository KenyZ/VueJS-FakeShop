
export default class Panier{

    constructor(){

        this.array = []

    }



    add(_product, quantity = 1){

        quantity = parseInt(quantity)

        function already_in(){
            let test = null
            this.array.map((_item) => {

                if(_item.item == _product){
                    test = _item
                }

            })

            return test
        }

        let already_in_item = already_in.call(this)

        if(already_in_item){
            already_in_item.quantity += quantity
        } else {
            this.array.push({item: _product, quantity})
        }

        return this
    }

    remove(item_index){
        
        this.array.splice(item_index, 1)
    }

    getItemCost(_item){

        return Math.floor(_item.item.price * _item.quantity * 100) / 100
    }

    getCost(){
        let sum = 0
        this.array.map(_item => sum += this.getItemCost(_item))
        return Math.floor(sum * 100) / 100
    }

    getLength(){
        let str = ''
        let nb_product = 0

        this.array.map(_item => nb_product += parseInt(_item.quantity))
        
        if(nb_product == 0){
            str = '0 article'
        }
        else if(nb_product == 1){
            str = '1 article'
        }
        else {
            str = nb_product + ' articles'
        }

        return str
    }

    isEmpty(){
        return this.array.length == 0 
    }
}