
<template>

    <div class="container-fluid bg-light mt-5 p-5 cart-container">
        <h1 class="display-4 mb-5">Votre panier</h1>
        <div class="table-responsive m-auto w-75">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="row">#</th>
                        <th scope="row">Article</th>
                        <th scope="row">Quantité</th>
                        <th scope="row">Prix</th>
                        <th scope="row"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(panier_item, i) in panier.array">
                        <td>{{ i }}</td>
                        <td>
                            <h5>{{ panier_item.item.name }}</h5>
                            <h6>Reference : <small>{{ panier_item.item.uid }}</small></h6>
                        </td>
                        <td>
                            <input type="number" v-model="panier_item.quantity" min="1" style="width: 55px" class="p-2 ">
                        </td>
                        <td>
                            <p class="m-0 p-0 font-weight-bold h5 font-italic">{{ panier.getItemCost(panier_item) }} €</p>
                            <p v-if="panier_item.quantity > 1" class="m-0 p-0">{{ panier_item.item.price }} € x {{ panier_item.quantity }} </p>

                        </td>
                        <td>
                            <button type="button" class="close text-danger" aria-label="Close" @click="remove_product(panier_item.item)">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row bg-white w-75 ml-auto mr-auto p-2 p-md-4 h2">
            <p class="col col-12 col-md-8 mb-0 font-weight-light">Total panier</p>
            <p class="col col-12 col-md-4 mb-0 price">{{ panier.getCost() }} €</p>
        </div>
        <div class="row justify-content-center p-3">
            <button class="col col-auto btn btn-outline-primary btn-lg" type="button" :disabled="panier.isEmpty()" >Poursuivre la commande</button>
        </div>
    </div>
    
</template>


<script>
    export default {

        props: ['panier'],

        methods: {

            remove_product(_product){

                this.panier.remove(_product)
            }
        }
        
    }
</script>
