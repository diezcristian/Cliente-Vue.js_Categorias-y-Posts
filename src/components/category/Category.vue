<script>
import { ref } from 'vue'
import CategoryServices from '../../services/CategoryServices';

export default {
    name: "category",
    data() {
        return {
            currentCategory: null,
            message: '',
            Title: "Category Component"
        };
    },
    methods: {

        async getCategory(id) {
            await CategoryServices.get(id)
                .then(response => {
                    this.currentCategory = response.data.data;
                    console.log(response);
                });
        },

        async updateCategory(e) {
            e.preventDefault();
            await CategoryServices.update(this.currentCategory.id, this.currentCategory)
                .then(response => {
                    console.log(this.currentCategory);
                    console.log(response.data.data);
                    this.message = "The Category has been updated"
                })
                .catch(e => {
                    console.log(e);
                });
        },

        async deleteCategory() {
            await CategoryServices.delete(this.currentCategory.id)
                .then(response => {
                    console.log(response.data.data);
                    this.$router.push({ name: "categories" })
                })
                .catch(e => {
                    console.log(e);
                });
        }

    },
    mounted() {
        this.getCategory(this.$route.params.id);
    }
};
</script>

<template>
    <header>
        <h1 class="title-update-category" >{{ Title }}</h1>
        <router-link  class="btn  btn-secondary" :to="'/categories'"> Volver </router-link>
    </header>
    <div class="content-add-category">
        <div v-if="currentCategory">
            <form class="form-update">
                <label class="text-center" id="id"> <strong> Id:     </strong> {{ currentCategory.id }}</label>
                <input class="form-control" type="text" name="name" placeholder="name" id="name" v-model="currentCategory.name" required>
                <input class="form-control" type="text" name="description" placeholder="Description" id="description" v-model="currentCategory.description"
                    required>
                <button @click="updateCategory" class="btn btn-primary">Update</button>
                <button @click="deleteCategory" class="btn btn-danger   ">Delete</button>
            </form>
            <p>{{ message }}</p>
        </div>
        <div v-else>
            <br />
            <p>Please click on a Tutorial...</p>
        </div>
    </div>
</template>

<style>
header{
    margin: 1.5rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.content-add-category{
    width: 100%;
    display: grid;
    justify-content: center;
}

.form-update{
    padding: 2rem;
    background-color: #e0e0e0;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
}
</style>
