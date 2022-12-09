<script>
import CategoryService from '../../services/CategoryServices';
import PostService from '../../services/PostServices';

export default {

    name: "post",
    data() {
        return {
            currentPost: null,
            categories: [],
            title: "Editar Posts",
            message: ''
        }
    },
    methods: {
        async getCategories() {
            await CategoryService.getAll()
                .then(response => {
                    this.categories = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                })
        },

        async getPost(id) {
            await PostService.get(id)
                .then(response => {
                    this.currentPost = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                })
        },

        async updatePost(e) {
            e.preventDefault();
            await PostService.update(this.currentPost.id, this.currentPost)
                .then(response => {
                    console.log(this.currentPost);
                    console.log(response.data);
                    this.message = "El Posts  ha sido actualizado de manera Exitosa";
                })
                .catch(er => {
                    console.log(er);
                })
        },

        async deletePost() {
            await PostService.deletePost(this.currentPost.id)
                .then(response => {
                    console.log(response);
                    this.$router.push({ name: "posts" })
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted() {
        this.getPost(this.$route.params.id);
        this.getCategories();
    },
};
</script>
<template lang="">
    <header>
        <h1 class="title-update-post">{{ this.title }}</h1>
        <router-link class="btn btn-secondary" :to="'/posts'">
        Volver
        </router-link>
    </header>
    <div class="content-add-post">
        <div v-if="currentPost">
        <form class="form-update">
            <label class="text-center" id="id">
            <strong> Id: </strong> {{ currentPost.id }}</label
            >
            <input
            class="form-control"
            type="text"
            name="name"
            placeholder="name"
            id="name"
            v-model="currentPost.name"
            required
            />
            <input
            class="form-control"
            type="text"
            name="description"
            placeholder="Description"
            id="description"
            v-model="currentPost.description"
            required
            />
            <select  v-model="currentPost.state" class="form-select" id="state" name="state" >
                    <option disabled >Selecciona el estado</option>
                    <option value="Publicado">Publicado</option>
                    <option  value="No Publicado">No Publicado</option>
                </select>
                <select class="form-select" name="category" id="category" v-model="currentPost.category_id">
                    <option disabled >Selecciona un Categoria</option>
                    <option v-for="category in categories" :value="category.id">{{category.name}}</option>
                </select>
            <button @click="updatePost" class="btn btn-primary">Update</button>
            <button @click="deletePost" class="btn btn-danger">Delete</button>
        </form>
            <p>{{ message }}</p>
        </div>
        <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
        </div>
    </div>
</template>
<style lang=""></style>
