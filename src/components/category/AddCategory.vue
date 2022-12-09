<script >

    import {ref } from 'vue'
    import CategoryService from '../../services/CategoryServices'

    export default {
        name: "add-tutorial",
        data() {
            return {
                category: {
                    name: "",
                    description: ""
                },
                submitted: false,
                title : "Create new Category"
            };
        },
        methods: {
            async saveCategory() {
                var data = {
                    name: this.category.name,
                    description: this.category.description
                };
                await CategoryService.create(data)
                    .then(response => {
                        console.log(response.data);
                        this.submitted = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            newCategory() {
                this.submitted = false;
                this.category = {};
            }
        }
    };


</script>

<template>
    <div class="content-add-category">
        <h1 class="title-add-category">{{ title }}</h1>
        <form v-if="!submitted" class="form-add">
            <input class="form-control" type="text" name="name" placeholder="name" id="name" v-model="category.name" required>
            <input class="form-control" type="text" name="description" placeholder="Description" id="description" v-model="category.description"
                required>
            <button @click="saveCategory" class="btn btn-primary">Create</button>
        </form>
        <div v-else class="text-center">
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newCategory">Add</button>
        </div>
    </div>
</template>

<style>

.content-add-category{
    width: 100%;
    display: grid;
    justify-content: center;
}

.title-add-category{
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