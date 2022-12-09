<script>
import PostService from '../../services/PostServices';
import CategoryService from '../../services/CategoryServices';

export default {
    name: "posts",
    data() {
        return {
            posts: [],
            currentPost: null,
            currentIndex: -1,
            currentCategory: null,
            title: "Listado de Posts"
        }
    },
    methods: {

        async retrievePosts() {
            await PostService.getAll()
                .then(response => {
                    this.posts = response.data.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        refreshList() {
            this.retrievePosts();
            this.currentPost = null;
            this.currentIndex = -1;
        },
        setActivePost(post, index) {
            this.currentPost = post;
            this.currentIndex = index;
            this.getCategory();
        },

        async getCategory(){
            await CategoryService.get(this.currentPost.category_id)
            .then(response => {
                this.currentCategory = response.data.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
        },
        async deletePost(id) {
            await PostService.delete(id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrievePosts();
    }
}
</script>
<template lang="">
    <h1 class="title-list" > {{ title }}</h1>
    <div class="container">
        <div class="row">
            <div class="col col-7">
                <div class="row">
                    <div  v-for="(post, index) in posts" :key="index" class="card card-list m-3" style="width: 15rem;">
                        <div class="card-body">
                            <h4 class="card-title">{{post.name}}</h4>
                            <h5 class="card-subtitle mb-2 text-muted">{{post.state}}</h5>
                            <p class="card-text description">{{post.description}}</p>
                            <a @click="setActivePost(post, index)" class="btn-link">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-5">
                <div v-if="currentPost" class="card" style="width: 19rem;">
                    <div class="card-body">
                        <h4 class="card-title text-center" > <span > {{ currentPost.id }}</span>  Post. </h4>
                        <div>
                            <label class="card-text"><strong>name:</strong></label> {{ currentPost.name }}
                        </div>
                        <div>
                            <label class="card-text" ><strong>Description:</strong></label> {{ currentPost.description }}
                        </div>
                        <div>
                            <label class="card-text" ><strong>Estado:</strong></label> {{ currentPost.state }}
                        </div>
                        <div>
                            <label class="card-text" ><strong>Categoria:</strong></label> {{ currentCategory ? currentCategory.name : "null" }}
                        </div>
                        <div class="form-group mt-3">
                            <router-link class="card-link m-5" :to="'/post/' + currentPost.id">Edit</router-link>
                            <a class="link-danger m-5" href="javascript:void(0)" @click="deletePost(currentPost.id)">Delete</a>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <br />
                    <p>Preciona Click en un Post</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

.card-list{
    overflow: hidden;
    text-overflow: ellipsis;
}
.card-list .card-body .description{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 20px;
}
</style>