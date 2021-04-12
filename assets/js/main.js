Vue.config.devtools= true;

var app = new Vue({
    el: '#root',
    data:{
        dischi: [],
        selected:'All',
        checked: false,
        genre:[],
        
    },    
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            
            this.dischi = response.data.response;
              
            this.dischi.forEach((element) => {
                
                if(!this.genre.includes(element.genre)){
                    this.genre.push(element.genre)
                    
                }
                
                
            }); 
            
        });   
    },
    methods: {
        sortF: function(){
            this.checked = !this.checked;
            if(this.checked){
                console.log(this.checked)
                this.dischi.sort((a, b) =>a.year - b.year)

            }else{
                axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    this.dischi = response.data.response;
                });   
            }
        }
    }
    

})