<template>
  <section id="posts-list">
    <h2> Posts</h2>
    <div v-if="posts.length" class="d-flex flex-row flex-wrap">
        <PostCard v-for="post in posts" :key="post.id" :post="post"/>  
    </div>
    <h4 v-else> Nessun post ...</h4>
  </section>
</template>

<script>
import PostCard from './PostCard';
export default {
name: 'PostsList',
components: {
    PostCard,
},
data(){
    return {
        posts: [],
    };
},
methods: {
    fetchPosts(){
        axios.get('http://localhost:8000/api/posts')
        .then( res => {
            this.posts = res.data;
        }).catch((err) => {
            console.error(err);
        }).then(() => {
            console.info('chiamata terminata')
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