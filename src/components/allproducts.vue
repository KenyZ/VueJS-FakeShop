
<template>

    <div class="container bg-light mt-5 p-5 rounded">
        <h1 class="display-4 mb-4">Tous les produits</h1>
        <hr>

        <div class="products-wrapper row mt-4">
            <div v-if="products" v-for="product in getProducts($route.params.category)" class="products-item col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                <router-link :to="{name: 'single-product', params: {productId: product.uid, category: product.category}}" class="nounderline" >
                    <div class="card shadow-sm border-0 ml-auto mr-auto" style="width: 13rem;">
                        <img :src="product.img" alt="" style="width: 13rem; height: 13rem" class="product-fiche-img card-img-top">
                        <div class="card-body pb-1 pt-2">
                            <h5 class="card-title mb-0 text-center">{{ product.name }}</h5>
                            <p class="text-center text-success m-0">{{ product.price }} €</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    props: ['products'],
    
    data(){
        return {

        }
    },

    methods: {
        getProducts(filter = null){


            if(filter && typeof filter != 'undefined'){

            console.log('filter')
            console.log(this)
            console.log('filter')

                return this.products.filter(_product => _product.category == filter)

            }

            return this.products
        }
    }
}
</script>
