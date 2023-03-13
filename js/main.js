let eventBus = new Vue()
Vue.component('columns', {
    template: `
        <h2 class="error" v-for="error in errors">{{error}}</h2>
        <div>
        <ul>
        <li v-for="card in column1"><p>{{card.title}}</p>
        <ul>
        <li v-for="t in card.subtasks" v-if="t.title !=null">
        <input @click="Status1(card,t)" type="checkbox" :disabled="t.completed">
        <p>{{t.title}}</p>
</li>
</ul>
</li>      
</ul>    
</div>
        <div>
        <ul>
        <li v-for="card in column2"><p>{{card.title}}</p>
        <ul>
        <li v-for="t in card.subtasks" v-if="t.title !=null">
        <input @click="Status2(card,t)" type="checkbox" :disabled="t.completed">
        <p>{{t.title}}</p>
</li>
</ul>
</li>      
</ul>    
</div>
        <h2 class="error" v-for="error in errors">{{error}}</h2>
        <div>
        <ul>
        <li v-for="card in column3"><p>{{card.title}}</p>
        <ul>
        <li v-for="t in card.subtasks" v-if="t.title !=null">
        <input @click="Status3(card,t)" type="checkbox" :disabled="t.completed">
        <p>{{t.title}}</p>
</li>
</ul>
</li>      
</ul>    
</div>
    `,
    data(){
        return{
            column1: [],
            column2: [],
            column3: [],
            errors: []
        }
    },

})
Vue.component('createcard',{
    template:`
       <div class="form">
         <h2>Создание заметки</h2>

        <form @submit.prevent="onSubmit">
            <input id="title" required v-model="title" type="text" placeholder="Название"><br>
            <input required id="subtask1" v-model="subtask1" placeholder="Задание"><br>
            <input required id="subtask2" v-model="subtask2" maxlength="30" placeholder="Задание"><br>
            <input required id="subtask3" v-model="subtask3" maxlength="30" placeholder="Задание"><br>
            <input  id="subtask4" v-model="subtask4" maxlength="30" placeholder="Задание"><br>
            <input  id="subtask5" v-model="subtask5" maxlength="30" placeholder="Задание"><br>
            <button type="submit">Создать заметку</button>
        </form>
    </div>
    `,
    data(){
        return{
            title: null,
            subtask1: null,
            subtask2: null,
            subtask3: null,
            subtask4: null,
            subtask5: null,
            errors: [],
        }
    },
    methods:{
        onSubmit() {
            let card = {
                title: this.title,
                subtasks: [{title: this.subtask1, completed: false},
                    {title: this.subtask2, completed: false},
                    {title: this.subtask3, completed: false},
                    {title: this.subtask4, completed: false},
                    {title: this.subtask5, completed: false}],
                date: null,
                status: 0
            }
            eventBus.$emit('card-submitted', card)
            this.title = null
            this.subtask1 = null
            this.subtask2 = null
            this.subtask3 = null
            this.subtask4 = null
            this.subtask5 = null
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        name: 'Заметки'
    }
})