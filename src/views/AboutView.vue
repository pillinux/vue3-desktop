<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul class="list-group">
      <li v-for="movie in movies" :key="movie._id" class="list-group-item">{{ movie.tipo }} - {{ movie.nome }}</li>
    </ul>
    <div class="input-group mb-3">
      <input v-model="nome" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button @click="put" class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
     <button @click="read" class="btn btn-outline-primary" type="button">READ</button>
  </div>
</template>
<script>
import localDB from '@/store';


export default {
  data() {
    return {
      movies: [],
      nome: ''
    }
  },

  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    

  },
  methods: {
    read() {
      var $this = this
      
      
      localDB.find({
        selector: {tipo: "scontrino"}
        }).then(function(results) {
            console.log(results.docs)
            $this.movies = results.docs
        }).catch(function(error){
          console.log(error);
        }) 
      /*
      //.then(function(results){
        console.log(results.docs);
        this.$set('movies', results.docs);
      });
      */
    },
    put(){
      const doc = {
        _id: Date.now().toString(),
        tipo: 'scontrino',
        nome: this.nome
      }
      localDB.put(doc);
    }
  }
}
</script>
