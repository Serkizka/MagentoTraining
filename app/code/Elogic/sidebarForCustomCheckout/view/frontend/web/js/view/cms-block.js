define(
    [
        'jquery',
        'ko',
        'uiComponent'
    ],
    function(
        $,
        ko,
        Component
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Elogic_sidebarForCustomCheckout/cms_block'
            },

            initialize: function () {
                var self = this;
                this._super();
            }

        });
    }
);
