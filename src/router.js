import { createRouter, createWebHashHistory } from 'vue-router';

import ListCategory from './components/category/ListCategory.vue';
import AddCategory from './components/category/AddCategory.vue';
import Category from './components/category/Category.vue';
import ListPost from './components/post/ListPost.vue'
import AddPost from './components/post/AddPost.vue'
import Post from './components/post/Post-details.vue'
import HomePage from './components/HomePage.vue';


export default new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name:"home-page",
            component: HomePage
        },
        {
            path: "/categories",
            alias: "/categories",
            name: "categories",
            component: ListCategory,
        },
        {
            path: "/posts",
            alias: "/posts",
            name: "posts",
            component: ListPost,
        },
        {
            path: "/category/:id",
            name: "category-details",
            component: Category
        },
        {
            path: "/post/:id",
            name: "post-details",
            component: Post
        },
        {
            path: "/addCategory",
            name: "addCategory",
            component: AddCategory,
        },
        {
            path: "/addPost",
            name: "addPost",
            component: AddPost,
        }
    ]
});