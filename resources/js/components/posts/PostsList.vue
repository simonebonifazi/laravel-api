<template>
  <section id="posts-list">
    <h2> Posts</h2>
    <LoaderApp v-if="isLoading"/>
    <div v-else>

        <div v-if="posts.length" class="d-flex flex-row flex-wrap">
            <PostCard v-for="post in posts" :key="post.id" :post="post"/>  
        </div>
        <h4 v-else> Nessun post ...</h4>
    </div>
  </section>
</template>

<script>
import LoaderApp from '../LoaderApp';
import PostCard from './PostCard';
export default {
name: 'PostsList',
components: {
    PostCard,
    LoaderApp,
},
data(){
    return {
        posts: [],
        isLoading: false,
    };
},
methods: {
    fetchPosts(){
        this.isLoading = true;
        axios.get('http://localhost:8000/api/posts')
        .then( res => {
            this.posts = res.data;
        }).catch((err) => {
            //to fix error
            console.error(err);
        }).then(() => {
            this.isLoading = false;
        });
    },
} ,
mounted() {
    this.fetchPosts();
},
};
</script>

<style>

</style>