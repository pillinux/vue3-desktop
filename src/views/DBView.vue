<template>
    <div>
        <h3>DB</h3>
        <ul>
            <li v-for="scontrino in list" :key="scontrino._id">
                {{ scontrino.tipo }} - {{ scontrino.nome }}
                <button @click="remove(scontrino)" class="btn btn-icon" type="button">DEL</button>
            </li>
        </ul>
        <div class="input-group mb-3">
        <input v-model="nome" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button @click="put" class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
         <button @click="db.info" class="btn btn-outline-secondary" type="button" id="button-addon2">INFO</button>
       
    </div>
</template>
<script>
import { useDB } from '@/store/db'

export default {
    data(){
        return {
            nome: '',
            db: useDB()
        }
    },
    computed: {
        list(){
            return this.db.$state.scontini
        } 
    },
    methods: {
        put(){
            const doc = {
                _id: Date.now().toString(),
                tipo: 'scontrino',
                nome: this.nome
            }
            console.log('put',doc);
            this.db.put(doc);
        },
        remove(doc) {
            console.log('remove',doc);
            this.db.remove(doc);
        }
    }
}
</script>

<!--
<script setup>
import { useDB } from '@/store/db'
const storeDB = useDB()
const nome = ''
const put = () => {
    const doc = {
        _id: Date.now().toString(),
        tipo: 'scontrino',
        nome: nome
    }
    console.log(doc);
    storeDB.put(doc);
}

</script>
-->