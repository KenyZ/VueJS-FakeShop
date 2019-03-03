
<template>

    <nav class="pl-5 pr-5 pt-3 pb-3 navbar navbar-expand-md navbar-dark _bg-secondary">
        <router-link :to="{name: 'root'}" class="navbar-brand">
            <img src="./logo.svg" width="50px" height="50px" alt="Logo de FakeShop">
        </router-link>

        <button data-toggle="collapse" class="navbar-toggler" data-target="#navbarWrapper" type="button" aria-controls="navbarWrapper" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarWrapper" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                <li class="nav-item active mr-3">
                    <router-link :to="{name: 'root'}" class="nav-link">Accueil</router-link>
                </li>
                <li class="nav-item dropdown mr-3">
                    <a href="#" class="nav-link dropdown-toggle" id="navDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Les produits</a>
                    <div class="dropdown-menu" aria-labelledby="navDropdown">
                        <router-link :to="{name:'allproducts'}" class="dropdown-item">Tous les produits</router-link>

                        <router-link :to="{name: 'allproductsFiltered', params: {category: products_category.vegetables}}" class="dropdown-item">Fruits et Légumes</router-link>

                        <router-link :to="{name: 'allproductsFiltered', params: {category: products_category.drinks}}" class="dropdown-item">Boissons</router-link>

                        <router-link :to="{name: 'allproductsFiltered', params: {category: products_category.breakfast}}" class="dropdown-item">Petit déjeuner</router-link>
                    </div>
                </li>
            </ul>
            
            <router-link :to="{name: 'cart'}" class="btn btn-dark pl-3 pr-3 mr-4 mb-2 mb-lg-0 text-light">
                Votre panier
                <span class="d-block d-md-inline mt-1 mt-md-0 badge badge-secondary ml-2">{{ panier.getLength() }}</span>
                <span v-if="!panier.isEmpty()" class="mt-1 mt-md-0 d-block d-md-inline badge badge-success ml-2">{{ panier.getCost() }}€</span>
            </router-link>

            <!-- <form class="form-inline my-2 my-lg-0 navbar-search">
                <input type="search" class="form-control col-7" arial-label="Search" placeholder="Rechercher">
                <button class="btn btn-success col-4 ml-3" type="submit">Rechercher</button>
            </form> -->

        </div>



    </nav>
    
</template>

<script>

import Kernel from '../js/Kernel'

export default {

    props: ['panier'],

    data(){
        return {
            products_category: Kernel.products_category()
        }
    }
    
}
</script>

