<template>
  <section id="posts-list">
    <h2> Posts</h2>
    <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        </li>
    </ul>
    <h4 v-else> Nessun post ...</h4>
  </section>
</template>

<script>
export default {
name: 'PostsList',
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
        })
    },
} ,
mounted() {
    this.fetchPosts();
}
};
</script>

<style>

</style>