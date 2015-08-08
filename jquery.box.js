/**
 * Created by NQLDY on 2015/7/26.
 */

(function($) {

    $.QjzdBox = function($divObjs, opt) {
        if (typeof($divObjs) !== 'object') {
            $divObjs = $($divObjs);
        }
        var options = $.extend({}, $.QjzdBox.defaults);
        //设置options入参
        var setOptions = function (opt) {
            if (typeof(opt) !== 'object') {
                opt = {};
            }
            options = $.extend(options, opt);
        };
        setOptions(opt);

        $divObjs.each(function () {
            var that = $(this);
            if (!that.parentsUntil('.boxwrap').parent().hasClass('boxwrap')) {
                var wrapBox = $('<div class="boxwrap"><div class="boxbg"></div><div class="box"><b class="close"></b><div class="title">' + options.title + '</div><div class="content"></div></div></div>');
                wrapBox.find('.content').append(that);
                wrapBox.find('.box').css({
                    width: options.width,
                    height: options.height,
                    marginLeft: -options.width / 2,
                    marginTop: -options.height / 2
                });
                wrapBox.find('.content').css({
                    width: options.width - 30,
                    height: options.height - 90,
                    margin: 15
                });
                $('body').append(wrapBox);
                that.show();
                wrapBox.find('.content').jScrollPane();
                wrapBox.find('.close').on('click', function () {
                    that.parentsUntil('.boxwrap').parent().fadeOut();
                });
                wrapBox.find('.boxbg').on('click', function () {
                    that.parentsUntil('.boxwrap').parent().fadeOut();
                });
            } else {
                that.parentsUntil('.boxwrap').parent().fadeIn();
            }
        });
        var api = {};
        return api;
    };

    //默认参数
    $.QjzdBox.defaults = {
        width: 820,
        height:380,
        title:''
    };

    $.fn.box = function (options, callback) {
        var api;
        if(this && this.length > 0){
            api = $.QjzdBox(this, options);
            if ($.isFunction(callback)) {
                callback.apply(api);
            }
        }
        return this;
    };

}(jQuery));