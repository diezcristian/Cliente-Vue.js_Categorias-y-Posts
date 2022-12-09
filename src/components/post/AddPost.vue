<script>
import CategoryService from '../../services/CategoryServices'
import PostService from '../../services/PostServices'
export default {

    data() {
        return {
            categories: [],
            post: {
                category_id: "",
                name: "",
                description: "",
                state: "",
            },
            submitted: false,
            title: "Crear Post"
        }
    },
    methods: {
        async savePost(e) {
            e.preventDefault();
            var data = {
                category_id: this.post.category_id,
                name: this.post.name,
                description: this.post.description,
                state: this.post.state,
            };
            await PostService.create(data)
                .then(response => {
                    console.log(response);
                    this.submitted = true
                })
                .catch(e => {
                    console.log(e);
                })

        },
        async getCategories() {
            await CategoryService.getAll()
                .then(response => {
                    this.categories = response.data.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        newPost() {
            this.submitted = false;
            this.post = {}
        },
    },
    mounted() {
        this.getCategories();
    }

}
</script>
<template lang="">
    <div>
        <div class="content-add-post">
            <h1 class="title-add-post">{{ this.title }}</h1>
            <form v-if="!submitted" class="form-add">
                <input class="form-control" type="text" name="name" placeholder="name" id="name" v-model="post.name" required>
                <input class="form-control" type="text" name="description" placeholder="Description" id="description" v-model="post.description"
                    required>
                <select  v-model="post.state" class="form-select" id="state" name="state" >
                    <option disabled >Selecciona el estado</option>
                    <option value="Publicado">Publicado</option>
                    <option  value="No Publicado">No Publicado</option>
                </select>
                <select class="form-select" name="category" id="category" v-model="post.category_id">
                    <option disabled >Selecciona un Categoria</option>
                    <option v-for="category in categories" :value="category.id">{{category.name}}</option>
                </select>
                <button @click="savePost" class="btn btn-primary">Crear</button>
            </form>
            <div v-else class="text-center">
                <h4>You submitted successfully!</h4>
                <button class="btn btn-success" @click="newCategory">Add</button>
            </div>
        </div> 
    </div>
</template>
<style>
.content-add-post{
    width: 100%;
    display: grid;
    justify-content: center;
}

.title-add-post{
    margin: 2rem auto;
}

.form-add{
    padding: 2rem;
    background-color: #e0e0e0;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
}
</style>