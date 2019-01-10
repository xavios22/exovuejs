<template>
    <div class="edit">

        <div v-if="editing == false">
            <span @click="editing =!editing"><i id="pencil" class="fas fa-pencil-alt"></i> {{title}}</span>
        </div>
        <div v-else>
            <span>{{title}}</span><br>
            <input v-model="title" type="text" @keyup.enter="editing= !editing" >
        </div>
          
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            editing:false,
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