var app = new Vue({
  el: '#root',
  data: {

      risultato: '' ,
      albums: [],
},
  methods : {

},

  mounted () {

        for (var i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(response => {
          console.log(response.data.response[0].title);
           this.albums.push(response.data.response[0]);

        })


        }


    }
})
