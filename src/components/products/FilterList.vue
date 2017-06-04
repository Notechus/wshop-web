<template>
    <div class="col-md-2">
        <p>Filter:</p>
        <div class="list-group">
            <a href="#" class="list-group-item" v-for="filter in filters">
                {{filter.name}}
                <span class="badge">{{filter.option}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data: function () {
            return {
                filters: [{name: 'RAM', option: '2-4GB'}, {name: 'Price', option: '500-1500$'}]
            }
        }

    }
</script>

<style>

</style>