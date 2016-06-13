odoo.define('oepetstore.petstore', function (require) {
"use strict";

    var core = require('web.core');
    var utils = require('web.utils');
    var Widget = require('web.Widget');
    var Model = require('web.Model');

    var round_pr = utils.round_precision;
    var QWeb     = core.qweb;

    var HomePage = Widget.extend({
        start: function () {
            this.$el.append("<div>Are you sure you want to perform this action?</div>" +
            "<button class='ok_button'>Ok</button>" +
            "<button class='cancel_button'>Cancel</button>");
        },
    });

    core.action_registry.add('petstore.homepage', HomePage);
});
