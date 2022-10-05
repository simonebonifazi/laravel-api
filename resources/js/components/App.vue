<template>
    <div class="content">
       <HeaderApp :title="title"/>
    </div>
</template>

<script>
    import HeaderApp from './HeaderApp';
    export default {
        name: "App",
    data() {
        return {
            title: "Boolpress",
        };
    },
        components: {
            HeaderApp,
        },
    };
</script>