<template>
    <table class="table">
        <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in cartItems">
            <td>
                <div class="description-wrapper">
                    <a href="#" class="image">
                        <img class="img"
                             src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,pr_2016_6_17_12_21_42_591.jpg">
                    </a>
                    <a href="#" class="name"
                       title="Smartfon/Telefon Huawei Honor 5X LTE Dual SIM szary">Huawei Honor 5X LTE Dual SIM szary</a>
                </div>
            </td>
            <td>
                <div class="price-wrapper">
                    <span>$ 299,00</span>
                </div>
            </td>
            <td>
                <div class="quant-wrapper">
                    <span>
                        <p>1</p>
                    </span>
                </div>
            </td>
            <td>
                <div class="totalprice-wrapper">
                    <span class="price text-nowrap">
                        <span class="overallprice">$ 299,00</span>
                    </span>
                    <a href="#" class="btn" title="Remove">
                        <span class="remove-product-label">X</span>
                    </a>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data: function () {
            return {cartItems: [{id: 1}, {id: 2}]};
        }
    }
</script>

<style>
    .description-wrapper {
        width: 45%;
        display: table-cell;
        vertical-align: middle;
        text-align: left;
    }

    .name {
        display: table-cell;
        vertical-align: middle;
    }

    .image {
        display: table-cell;
        vertical-align: middle;
        max-height: 65px;
        max-width: 85px;
        text-align: center;
        padding-right: 15px;
    }

    .img {
        display: block;
        height: auto;
        width: 70px;
    }

    .price-wrapper {
        width: 12%;
        display: table-cell;
        vertical-align: middle;
        white-space: nowrap;
    }

    .quant-wrapper {
        display: table-cell;
        min-width: 25px;
        vertical-align: middle;
        width: 20%;
    }

    .totalprice-wrapper {
        display: table-cell;
        vertical-align: middle;
        white-space: nowrap;
    }
</style>