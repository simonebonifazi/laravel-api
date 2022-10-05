<template>
    <div class="content">
       <HeaderApp :title="title"/>
       <main class="container my-4">
       <PostsList />
       
       </main>
    </div>
</template>

<script>
    import HeaderApp from './HeaderApp';
    import PostsList from './posts/PostsList';
   
    export default {
        name: "App",
    data() {
        return {
            title: "Boolpress",
        };
    },
        components: {
            HeaderApp,
            PostsList,
        },
    };
</script>