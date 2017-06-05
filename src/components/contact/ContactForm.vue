<template>
    <section class="row">
        <header class="col-xs-12">
            <hr class="line">
            <h3>Do you have a question?</h3>
        </header>
        <div class="col-md-6 col-xs-12" id="contact-form">
            <form action="/sth/st" method="POST" class="form-horizontal">
                <div class="form-group">
                    <label for="emailAddress" class="col-md-3 font-normal">Your E-mail:</label>
                    <div class="col-xs-12 col-sm-9">
                        <input type="email" class="form-control invalid" id="emailAddress"
                               name="emailAddress" placeholder="e-mail" maxlength="60" required="required">
                        <span class="mark"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="question" class="font-normal col-xs-12 col-sm-3">Question</label>
                    <div class="col-xs-12 col-sm-9">
                        <textarea name="question" id="question" class="form-control" rows="5" required="required"
                                  maxlength="2000">
                        </textarea>
                    </div>
                </div>
                <div class="col-xs-8 col-sm-6 col-sm-offset-3">
                    <button id="contactFormSubmit" type="submit" class="btn btn-primary">
                        Send
                    </button>
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