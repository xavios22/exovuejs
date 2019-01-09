<template>
    <div>
        <div id="exo" class="container bg-secondary" >
             
                <input v-model="name" class="boton"  placeholder="Entrer your search terms">
                <ul>
                    <li v-for ="item in items">
                        {{item.message}}
                    </li>
                </ul>
                
            </div>

    </div>
       
    
</template>
<script>
export default {

    data(){
        return{
            items:[
                {message:"uno"},
                {message:"dos"}
            ]
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

}

</style>