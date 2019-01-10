<template>
    <div>
        <div class=" quatre bg-secondary container">
            <h1 class="text-white ">SERVICES</h1>
                <ul class="services">
                    <li class="services__item" v-for="service in services" v-on:click="toggleActive(service)" v-bind:key="{ ' active' : service.active }">
                        <span>{{service.name}}</span> <span>{{service.price | currency}}</span>
                    </li>
                </ul>
            <p class="total">
                <span>total:</span><span>{{total()| currency}}</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            services:[
                {
                    name:'Web development',
                    price:300,
                    active:true

                },
                {
                    name:'Design',
                    price:400,
                    active:false
                },
                {
                    name:'Integration',
                    price:250,
                    active:false
                },
                {
                    name:'Training',
                    price:220,
                    active:false
                }
            ]
        }
    },
    methods: {
    toggleActive: function(s) {
      s.active = !s.active;
    },
    total: function() {
      var total = 0;
      
      this.services.forEach(function(s) {
        if (s.active) {
          total += s.price;
        }
      });
      
      return total;
    }
  }
    
}
</script>
<style lang="scss">

.quatre{
    margin-top: 200px;
    height: 500px;
    h1{
        line-height: 300px;
    }
    .services {
        margin-bottom: 20px;
        min-width: 50vw;
        background-color: rgb(211, 53, 53);
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: .5rem;
        list-style: none;
    }
    .services__item {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border-radius: .25rem;
  
    }
    .total {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
  
  
    }
}

</style>    