(function ($) {
    function tooltipHover() {
        $(".tv-link").each(function () {
            var link = $(this);
            var timer;
            var curTooltip;
            link.mouseenter(function () {
                timer = setTimeout(function () {
                    $.getJSON("description.json", function (data) {
                        $(".tv-link__title").text(data.title);
                        $(".tv-link__description").text(data.description);
                        var img = $('<img class="tv-link__image" src="' + data.imgSrc + '" alt="' + data.alt + '" />');
                        $(".tv-link__img-wrapper").html(img);
                        curTooltip = $(".tv-link__tooltip");
                        var offset = link.offset();
                        var top = offset.top - 200;
                        var left = offset.left + link.parent().width() + 40;
                        curTooltip.css("top", top + "px").css("left", left + "px");
                        curTooltip.toggleClass("tv-link__tooltip_hidden");
                        // TODO: пофиксить выпадение при узком экране
                    });
                }, 300);
            });
            link.mouseleave(function () {
                clearTimeout(timer);
                if (curTooltip) {
                    curTooltip.toggleClass("tv-link__tooltip_hidden");
                    curTooltip = undefined;
                }
            });
        });
    }

    $(tooltipHover);
})(jQuery);