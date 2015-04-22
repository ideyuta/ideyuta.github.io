'use strict'

$ = require 'jquery'
Masonry = require 'masonry-layout'
ImagesLoaded = require 'imagesloaded'

class Tweet

  constructor: ->
    # 変数定義
    @$twCount = $('.twCount')
    # イベント定義
    @$twCount.each (index, elm) =>
      url = elm.attr('href')
      count(elm, url)

  count: (elm, url) ->
    if elm
      pageURL = url ? url : location.url
      pageURL = encodeURI pageURL
      url = 'http://urls.api.twitter.com/1/urls/count.json?url=' + pageURL
      $.ajax
        url: url,
        dataType: 'jsonp',
        success: (json) ->
          $(elm).html json.count

class MasonryView

  constructor: (el) ->
    @$el = document.querySelector el
    ImagesLoaded @$el, =>
      $('.item').css 'display', 'block'
      $('.Loader').css 'display', 'none'
      new Masonry @$el,
        columnWidth: 0
        itemSelector: '.item'

$ ->
  ide.tweet = new Tweet
  ide.masonryView = new MasonryView '.Works'

  return
