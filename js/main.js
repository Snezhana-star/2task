let app = new Vue({
    el: '#app',
    data: {
        name: 'Заметки'
    }
})

Vue.component('createCard',{
    template:`
       <div>
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
    `
})