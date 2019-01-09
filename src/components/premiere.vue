<template>
    <div>
        <div class="bg-secondary">
            <div class="container text-white">
                <div class="row ">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-2 taillecase text-center pt-2" :class="{'bg-danger': choix == 'HOME'}" @click.prevent="choix = 'HOME'"><span class="txt" >HOME</span></div>
                    <div class="col-sm-2 taillecase text-center pt-2" :class="{'bg-danger': choix == 'PROJECTS'}" @click.prevent="choix = 'PROJECTS'"><span class="txt" >PROJECTS</span></div>
                    <div class="col-sm-2 taillecase text-center pt-2" :class="{'bg-danger opacity': choix == 'SERVICES'}" @click.prevent="choix = 'SERVICES'"><span class="txt" >SERVICES</span></div>
                    <div class="col-sm-2 taillecase text-center pt-2" :class="{'bg-danger': choix == 'CONTACT'}" @click.prevent="choix = 'CONTACT'"><span class="txt"> CONTACT</span></div>
                    <div class="col-sm-2 taillecase"></div>
                </div>
            </div>
        </div>
        <div class="texto">
            <span class="eleccion"><i id="pencil" class="fas fa-pencil-alt"></i>You chose: <strong class="bg-secondary text-white">{{choix}}</strong> </span>
        </div>
        
    </div>

    
</template>
<script>
module.exports= {
   data(){
       return{
           choix:""
       }
   }
}
</script>

<style lang="scss">
.texto{
    
    background-color: red;
    color: dimgray;
    height:100px;
	line-height:100px;
	text-align:center;
    #pencil{
        color: dimgray;
        font-size: 15px;
    }
}   

</style>