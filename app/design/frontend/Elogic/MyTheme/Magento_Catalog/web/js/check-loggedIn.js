define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'domReady!'
], function ($, customerData) {
    'use strict';

    //serkizka = name, any name must be able
    $.widget('serkizka.customerWidget', {
        _init: function() {
            let self = this;
            self._isLoggedIn();
        },
        _isLoggedIn: function() {
            let customerInfo = customerData.get('customer')();
            if (customerInfo.firstname) {
                $(".product-item-info .wrapper").addClass("active");

            } else  {
                $(".product-item-info .wrapper").removeClass("active");
            }
            return customerInfo.firstname;
        }
    });
    return $.serkizka.customerWidget;
});

