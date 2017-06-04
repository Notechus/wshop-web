<template>
    <div class="col-md-2">
        <p>Categories:</p>
        <div class="list-group">
            <a href="#" class="list-group-item" v-for="category in categories">
                {{category.name}}
                <span class="badge">{{category.quantity}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data: function () {
            return {
                categories: [{name: 'Apple', quantity: 13}, {name: 'Samsung', quantity: 57}]
            }
        }

    }
</script>

<style>

</style>