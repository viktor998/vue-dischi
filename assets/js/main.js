Vue.config.devtools= true;

var app = new Vue({
    el: '#root',
    data:{
        dischi: [],
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
            this.dischi = response.data.response;
        })
    }
})