define([
    'jquery',
    'ko',
    'Magento_Ui/js/form/form',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'domReady!',
], function ($, ko, Component, quote) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Elogic_shipping/shipping',
            defaultTemplate: 'Magento_Checkout/shipping',
            shippingFormTemplate: 'Magento_Checkout/shipping-address/form',
            shippingMethodListTemplate: 'Magento_Checkout/shipping-address/shipping-method-list',
            shippingMethodItemTemplate: 'Magento_Checkout/shipping-address/shipping-method-item',
            granTemplate: 'Magento_Checkout/summary/grand-total'
        },

        initialize: function () {
            this._super();
            // component initialization logic
            return this;
        },

        /**
         * Form submit handler
         *
         * This method can have any name.
         */

        getGrandTotal: function() {
            let freeShipping = 150;
            let totals = quote.totals();
            let sum = (totals ? totals : quote)['grand_total'];
            let result = freeShipping - sum;

            return result;

        },
    });
});
