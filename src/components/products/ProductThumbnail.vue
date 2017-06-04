<template>
    <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
            <img src="" alt="...">
            <div class="caption">
                <h3>{{title}}</h3>
                <p>{{details}}</p>
                <p>
                    <a href="#" class="btn btn-primary" role="button">Add to Cart</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        created: function () {

        },
        data: function () {
            return {title: 'asd', details: 'some details about product'};
        }
    }
</script>