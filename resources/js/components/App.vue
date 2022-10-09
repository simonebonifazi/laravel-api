<template>
    <div class="content">
       <HeaderApp :title="title"/>
       <main class="container my-4">
       <HomePage />
       
       </main>
    </div>
</template>

<script>
    import HeaderApp from './HeaderApp';
import HomePage from './pages/HomePage';
   
    export default {
        name: "App",
    data() {
        return {
            title: "Boolpress",
        };
    },
        components: {
    HeaderApp,
    HomePage
},
    };
</script>