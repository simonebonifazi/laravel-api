<template>
  <div id="single-post">
    <h2>Dettaglio post: </h2>

  </div>
</template>

<script>
export default {
    name: 'SinglePostPage',
    data(){
        return{
            post: null,
        }
    },
    methods: {
        fetchPost(){
            axios.get('http://localhost:8000/api/posts/1')
            .then(res => {
                this.post = res.data;
            })
            .catch((err)=> {
                console.error(err);
            })
            .then(() => {
                console.log('chiamata conclusa')
            })
        }
    },
    mounted(){
        this.fetchPost()
    }
}
</script>

<style>

</style>