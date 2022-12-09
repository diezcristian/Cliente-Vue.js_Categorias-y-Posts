<script>
import { ref } from 'vue'

import CategoryService from '../../services/CategoryServices';

export default {
    name: "categories-list",
    data() {
        return {
            categories: [],
            currentCategory: null,
            currentIndex: -1,
            name: "",
            Title: "Lista de Categorias"
        };
    },
    methods: {
        retrieveCategories() {
            CategoryService.getAll()
                .then(response => {
                    this.categories = response.data.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveCategories();
            this.currentCategory = null;
            this.currentIndex = -1;
        },

        setActiveCategory(category, index) {
            this.currentCategory = category;
            this.currentIndex = index;
        },

        async deleteCategory(id) {
            await CategoryService.delete(id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    mounted() {
        this.retrieveCategories();
    }
};

const Title = "List Category"
</script>

<template>
    <h1 class="title-list" > {{ Title }}</h1>
    <div class="container-categories">
        <div class="list">
            <div class="categories">
                <table class="table">
                    <thead>
                        <th>name</th>
                        <th>description</th>
                    </thead>
                    <tbody>
                        <tr v-for="(category, index) in categories" :key="index"
                            @click="setActiveCategory(category, index)">
                            <td>{{ category.name }}</td>
                            <td>
                                {{
                                        category.description
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="category-info">
                <div v-if="currentCategory" class="card">
                    <div class="card-body">
                        <h4 class="card-title text-center" >Category</h4>
                        <div>
                            <label class="card-text" ><strong>Id:</strong></label> {{ currentCategory.id }}
                        </div>
                        <div>
                            <label class="card-text"><strong>name:</strong></label> {{ currentCategory.name }}
                        </div>
                        <div>
                            <label class="card-text" ><strong>Description:</strong></label> {{ currentCategory.description }}
                        </div>
                        <div class="form-group mt-3">
                            <router-link class="card-link m-5" :to="'/category/' + currentCategory.id">Edit</router-link>
                            <a class="link-danger m-5" href="javascript:void(0)" @click="deleteCategory(category.id)">Delete</a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <br />
                    <p>Por Favor Has Click en una Categoría...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.container-categories{
    display: grid;
    justify-content: center;
}

.title-list{
    text-align: center;
    letter-spacing: 2px;
    font-size: 1.7rem;
    margin:30px 0px;
}

.list{
    width: 1000px;
    min-width: 800px;
    display: flex;
    justify-content: space-around;
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 1.5rem;
}
.table{
    width: 300px;
}
.category-info{
    max-width: 300px;
    display: grid;
    place-items: center;
}

.card{
    width: 100%;
}
</style>