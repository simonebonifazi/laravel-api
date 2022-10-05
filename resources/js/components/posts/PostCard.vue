<template>
    <div class=" mx-3">
        <div class="card my-4" style="width: 18rem;" >
            <img :src="post.image" class="card-img-top" :alt="post.slug">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.content}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted"> Ultima modifica il: {{ updatedAt }}</small>
            </div>
        </div>          
    </div>
</template>

<script>
export default {
name: "PostCard",
props: {
    post: Object,
},
computed: {
    updatedAt(){
        const postDate = new Date(this.post.updated_at);
        let day = postDate.getDate();
        let month = postDate.getMonth() +1; //poichè js conta da 0!
        const year = postDate.getFullYear();
        //formatto in stile italiano
        if( day < 10) day = "0" + day;
        if( month < 10) month = "0" + month;

        return `${day}/${month}/${year}`;
    },
},
};
</script>

<style>
</style>