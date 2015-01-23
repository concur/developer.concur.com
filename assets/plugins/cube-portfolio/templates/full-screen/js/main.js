(function ($, window, document, undefined) {
    'use strict';

    var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container'),
        wrap, filtersCallback;


    /*********************************
     init cubeportfolio
     *********************************/
    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function (url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });


    /*********************************
     add listener for filters
     *********************************/
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

        wrap.on({
            'mouseover.cbp': function () {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function () {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });

        filtersCallback = function (me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

            me.addClass('cbp-filter-item-active');

            wrap.trigger('mouseleave.cbp');
        };

    } else {
        filtersCallback = function (me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }

    filtersContainer.on('click.cbp', '.cbp-filter-item', function () {

        var me = $(this);

        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }
        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function () {
        });

    });


    /*********************************
     activate counter for filters
     *********************************/
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function () {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });


    /*********************************
     add load more functionality
     *********************************/
    var loadMoreObject = {

            init: function () {

                var t = this;

                // the job inactive
                t.isActive = false;

                t.numberOfClicks = 0;

                // cache link selector
                t.loadMore = $('.cbp-l-loadMore-text-link');

                // cache window selector
                t.window = $(window);

                // add events for scroll
                t.addEvents();

                // trigger method on init
                t.getNewItems();

            },

            addEvents: function () {

                var t = this;

                t.window.on("scroll.loadMoreObject", function () {
                    // get new items on scroll
                    t.getNewItems();
                });
            },

            getNewItems: function () {

                var t = this, topLoadMore, topWindow;

                if (t.isActive || t.loadMore.hasClass('cbp-l-loadMore-text-stop')) {
                    return;
                }


                topLoadMore = t.loadMore.offset().top;
                topWindow = t.window.scrollTop() + t.window.height();

                if (topLoadMore > topWindow) {
                    return;
                }

                // this job is now busy
                t.isActive = true;

                // increment number of clicks
                t.numberOfClicks++;

                // perform ajax request
                $.ajax({
                    url: t.loadMore.attr('data-href'),
                    type: 'GET',
                    dataType: 'HTML',
                    cache: true
                })
                    .done(function (result) {
                        var items, itemsNext;

                        // find current container
                        items = $(result).filter(function () {
                            return $(this).is('div' + '.cbp-loadMore-block' + t.numberOfClicks);
                        });

                        gridContainer.cubeportfolio('appendItems', items.html(),
                            function () {

                                // check if we have more works
                                itemsNext = $(result).filter(function () {
                                    return $(this).is('div' + '.cbp-loadMore-block' + (t.numberOfClicks + 1));
                                });

                                if (itemsNext.length === 0) {

                                    t.loadMore.text('NO MORE ENTRIES');
                                    t.loadMore.addClass('cbp-l-loadMore-text-stop');

                                    t.window.off("scroll.loadMoreObject");

                                } else {
                                    // make the job inactive
                                    t.isActive = false;

                                    topLoadMore = t.loadMore.offset().top;
                                    topWindow = t.window.scrollTop() + t.window.height();

                                    if (topLoadMore <= topWindow) {
                                        t.getNewItems();
                                    }
                                }

                            });

                    })
                    .fail(function () {
                        // make the job inactive
                        t.isActive = false;
                    });
            }
        },
        loadMore = Object.create(loadMoreObject);

    // Cube Portfolio is an event emitter. You can bind listeners to events with the on and off methods. The supported events are: 'initComplete', 'filterComplete'

    // when the plugin is completed
    gridContainer.on('initComplete', function () {
        loadMore.init();
    });

    // when the height of grid is changed
    gridContainer.on('filterComplete', function () {
        loadMore.window.trigger('scroll.loadMoreObject');
    });

})(jQuery, window, document);
