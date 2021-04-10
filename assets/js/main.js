Vue.config.devtools= true;

var app = new Vue({
    el: '#root',
    data:{
        dischi: [],
        selected:'All',
        checked: 'no',
        genre:[],
        years:[],
        
    },    
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            
            this.dischi = response.data.response;
              
            this.dischi.forEach((element) => {
                
                if(!this.genre.includes(element.genre)){
                    this.genre.push(element.genre)
                    
                }
                this.years.push(element.year)
                
            }); 
        });   
    },
    methods: {
        sortF: function(){
            this.dischi.sort((a, b) =>{
                console.log(a)
                return a.year - b.year;
                
            })
        }
    }
    

})