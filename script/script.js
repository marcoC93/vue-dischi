var app = new Vue({
  el: '#root',
  data: {


      message: 'Hello Vue!'
},
  methods : {

},

  mounted () {

          axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(response => {
        console.log(response.data.response);
    })


  }
})
