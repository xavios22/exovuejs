<template>
    <div>
        <div id="exo" class="container bg-secondary" >
            <span><i class=" search fas fa-search"></i></span><input class="boton"  placeholder="Entrer your search terms" v-model="valeur">
            <div class="resultat" v-for="item in test" :key="item.id">{{item.text}}</div>
                
                
            </div>

    </div>
       
    
</template>
<script>
export default {

    data(){
        return{
            valeur:"",
            items:[
                {
                    id:1,
                    text: "html"
                },
                {
                    id:2,
                    text:"css"
                },
                {
                    id:3,
                    text:"boot"
                },
                {
                    id:4,
                    text:"vue"
                },
            ]
        }
        
    },
    computed:{
        test(){
            let valeur = this.valeur;
            return valeur.toLowerCase
            ? this.items.filter(item => item.text.includes(valeur.toLowerCase()))
            :[];
        }
    }     
}
</script>
<style lang="scss">


#exo{
    margin-top: 150px;
    height: 200px;
    text-align: center;
    .boton{    
        margin-top: 100px;
        width: 250px;
    }
    .search{
        background-color: white;
        font-size: 23px;
        height: 30px;
    }

}

</style>