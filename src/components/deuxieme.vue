<template>
    <div class="edit">
        
        <input v-model="title" >
        <h1 id="texte" > <i id="pencil" class="fas fa-pencil-alt"></i> {{title}}</h1>
        
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            title:'Edit me.'
        }
    }
}
</script>

<style lang="scss">

.edit{
    margin-top: 90px;
    input{
        text-align: center;
        border-color: grey
    }

    #pencil{
    font-size: 20px;
    
    }
    #texte{
    font-size: 20px;
    }
}
</style>