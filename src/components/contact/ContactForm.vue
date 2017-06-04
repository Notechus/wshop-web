<template>
    <section class="row">
        <div id="contact-form">
            <form action="/sth/st" method="POST" class="form-horizontal">
                <div class="form-group">
                    <label for="emailAddress" class="col-md-3 font-normal">Twój adres e-mail</label>
                    <div class="col-xs-12 col-sm-9">
                        <div class="marked invalid">
                            <input type="email" class="form-control invalid" id="emailAddress"
                                   name="emailAddress" placeholder="adres e-mail" maxlength="60">
                            <span class="mark"></span>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="question" class="col-md-4 font-normal">Question</label>
                    <textarea name="question" id="question" class="form-control" rows="5" required="required"
                              maxlength="2000">
                        </textarea>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style>

</style>