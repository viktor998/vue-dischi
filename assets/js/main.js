Vue.config.devtools= true;

var app = new Vue({
    el: '#root',
    data:{
        dischi: [],
        dischiBu: [],
        selected:'All',
        checked: 'no',
        genre:[],
        years:[],
        
    },    
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            
            this.dischi = response.data.response;
            // this.dischiBu = JSON.parse(JSON.stringify(this.dischi));
            // console.log(this.dischiBu);

            
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
                
                if(this.checked === 'no'){
                    if (a.year < b.year ){
                    
                        return -1;
                        
                        
                    }
                    if (a.year > b.year ){
                        
                        return 1;
                        
                        
                    }

                    return 0
                    
                    
                }else if(this.checked === 'yes'){
                    
                    
                    return this.dischiBu
                } 
                
            })

        //    let mapped = this.dischi.map((item) =>{
        //        return item
        //    });
        //    mapped.sort((a, b) => {
        //     if (a.year < b.year ){
                
        //         return -1;
                                
                                
        //     }
        //    })
        //     this.dischiBu.push(mapped)
        //     console.log(this.dischiBu)
        // }
        }
    }
    

})