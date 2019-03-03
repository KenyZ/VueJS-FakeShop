<template>
    <div class="container-fluid">
        <div class="container bg-light mt-5" style="max-width: 1000px">
            <div v-if="product" class="modal" id="afterAddCartModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Le produit a été ajouté au panier</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body bg-light">
                        <div class="row pl-3 pr-3">
                            <img :src="product.img" alt="" class="product-fiche-img" >
                            <div class="col pl-3 text-right h3">
                                <p class="">{{ product.name }}</p>
                                <h4 class="price">{{ panier.getItemCost({item: product, quantity: item_quantity}) }} €</h4>
                                <h5 class="">Quantité: {{ item_quantity }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Continuer mes achats</button>
                        <button data-dismiss="modal" @click="$router.push({name: 'cart'})" type="button" class="btn btn-success">Terminer la commande</button>
                    </div>
                    </div>
                </div>
            </div>

            <div v-if="product" class="row">
                
                <div class="col col-auto col-md-5 pl-0">
                    <img :src="product.img" alt="" class="product-fiche-img float-left">
                </div>

                <div class="col col-12 col-md-6 pl-3 pt-4 pb-4">
                    <div class="rate mb-3">
                        <div v-for="i in 5" :class="i <= product.rate ? 'active' : ''" class="star d-inline">
                            <svg height="24px" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"/></g></g></svg>
                        </div>
                        <span class="badge badge-warning text-dark p-2">{{ product.rate }} / 5</span>
                    </div>
                    <h4>{{ product.name }}</h4>
                    <h3 class="price">{{ product.price }} €</h3>
                    <hr>
                    <p class="mb-3 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente laborum voluptatibus, pariatur ad rem ipsum dolorum dolores quam labore veritatis sit culpa perspiciatis, eligendi optio.</p>
                    <div class="form-group">
                        <label for="product_quantity">Quantity : </label>
                        <input type="number" v-model="item_quantity" id="product_quantity" class="form-controls text-center product-input-quantity" min="1" >
                    </div>
                    <button @click="add_cart(product)" data-toggle="modal" data-target="#afterAddCartModal" type="button" class="btn btn-success" >Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    function setProduct(vm){

        vm.productId = vm.$route.params.productId

        vm.category = vm.$route.params.category

        let _product = vm._routerRoot.products.find(__product => __product.uid == vm.productId)

        if(typeof _product == 'undefined'){

            vm.$router.push({name: '404'})   

            // redirect
        } else {
            vm.product = _product
        }
    }

    export default {

        props: ['products', 'panier'],

        data(){
            return {
                productId: null,
                category: null,
                product: null,
                item_quantity: 1
            }
        },

        methods: {

            add_cart(_product){

                console.log(this)

                this.panier.add(_product, this.item_quantity)
            }
        },

        beforeRouteEnter(to, from, next){
            next(setProduct)
        },

        beforeRouteUpdate (to, from, next) {

            alert('on update')
            
            setProduct(this)

            next()
        },
        
    }
</script>
