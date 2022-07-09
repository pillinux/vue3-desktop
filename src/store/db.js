import { defineStore } from 'pinia'
import PouchDB from 'pouchdb'
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

const localDB = new PouchDB('movies');

// remote CouchDB 
const remoteDB = new PouchDB('http://localhost:5984/movies', {
    auth: {
        username: 'admin',
        password: 'Emb57531!',
    },
});

localDB.createIndex({
    index: { fields: ['tipo'] }
});


localDB
    .info()
    .then(function (info) {
        console.log('init db', info)
    })

export const useDB = defineStore('db', {
    state: () => ({
        scontini: []
    }),
    getters: {
        getScontrini() {
            return this.scontini
        }
    },
    actions: {
        // any amount of arguments, return a promise or not
        async sync() {
            const _this = this
            await localDB.find({
                selector: { tipo: "scontrino" },
                sort:['_id']
            }).then(function (results) {
                console.log(results.docs)
                _this.$state.scontini = results.docs
            }).catch(function (error) {
                console.log(error);
            })
        },
        info() {
            localDB
                .info()
                .then(function (info) {
                    console.log(info);
                })
        },
        put(doc) {
            localDB.put(doc);
            storeDB.sync()
        },
        remove(doc) {
            localDB.remove(doc);
            storeDB.sync()
        }

    }
})

var storeDB = useDB();
storeDB.sync()

localDB.sync(remoteDB, {
    live: true,
    retry: true
}).on('change', function (change) {
    console.log('db synch change', change)
    storeDB.sync()
}).on('paused', function (info) {
    console.log('db synch paused', info)
}).on('active', function (info) {
    console.log('db synch active', info)
}).on('error', function (err) {
    console.log('db synch error', err)
});