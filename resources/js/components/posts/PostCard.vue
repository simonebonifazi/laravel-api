<template>
    <div>
        <div class="card">
            <img :src="post.image" class="card-img-top" :alt="post.slug">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.content}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{ post.updated_at }}</small>
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
};
</script>

<style>

</style>