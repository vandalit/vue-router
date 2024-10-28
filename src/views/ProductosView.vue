<script>
import Card from "@/components/Card.vue";

export default {
    name: "ProductosView",
    components: {
        Card,
    },
    props: {
        nombre: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            required: true,
        },
        cantidad: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <section class="container text-center" id="productos">
        <h1>Detalle del producto</h1>
        <div class="row">
            <div class="col-sm-4 col-12 px-5 mb-4">
                <div class="card">
                    <img src="../../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ nombre }}</h5>
                        <p class="card-text">{{ descripcion }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Precio: ${{ precio }}</li>
                        <li class="list-group-item">Cantidad: {{ cantidad }}</li>
                    </ul>
                    <div class="card-body">
                        <router-link class="card-link" to='/'>Ver mas</router-link>
                        <router-link class="card-link" :to="{name:'contacto'}">Comprar</router-link>
                    </div>
                </div>
            </div>
            <router-link to="/">Volver al inicio</router-link>
        </div>
    </section>

    
</template>

