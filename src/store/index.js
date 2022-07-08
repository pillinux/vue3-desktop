import PouchDB from 'pouchdb'
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

const localDB = new PouchDB('movies');

// remote CouchDB 
const remoteDB = new PouchDB('http://127.0.0.1:5984/movies',{
    auth: {
      username: 'admin',
      password: 'Emb57531!',
    },
  });

  localDB.createIndex({
    index: {fields: ['tipo']}
  });

localDB.sync(remoteDB, {
    live: true,
    retry: true
}).on('complete', function () {
    // yay, we're in sync!
  }).on('error', function (err) {
    console.log(err);
  });

// localDB
//   .replicate
//   .to(remoteDB)
//   .on('complete', function () {
//     // local changes replicated to remote
//   }).on('error', function (err) {
//     // error while replicating
//     console.log(err);
//   })

localDB
 .info()
 .then(function (info) {
   console.log(info);
 })
 
 

 export default localDB
 /* {
    
    put: function(doc) {
        localDB.put(doc)
    },
    find: function(){
      return localDB.find({
        selector: {tipo: "scontrino"}
        }).then(function(results) {
            return results.docs;
        }).catch(function(error){
          console.log(error);
        }) 
         
    }
 }
 */
 