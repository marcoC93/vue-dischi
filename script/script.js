var app = new Vue({
  el: '#root',
  data: {

      risultato: '' ,
      albums: [],
      indiceCorrente : 0 ,
},
  methods : {

},

  mounted () {



            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {

            //indice corrente deve essere uguale a 5
            // this.indiceCorrente = 5

            // this.indiceCorrente = i ;
          console.log(response.data.response);
          this.albums = response.data.response
          // this.albums.push(response.data.response);
          console.log(this.albums);
        })






        }



})
