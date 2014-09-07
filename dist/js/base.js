(function() {
  var $, Tweet;

  $ = jQuery;

  Tweet = (function() {
    function Tweet() {
      var _this = this;
      this.$twCount = $('.twCount');
      this.$twCount.each(function(index, elm) {
        var url;
        url = elm.attr('href');
        return count(elm, url);
      });
    }

    Tweet.prototype.count = function(elm, url) {
      var pageURL;
      if (elm) {
        pageURL = url != null ? url : {
          url: location.url
        };
        pageURL = encodeURI(pageURL);
        url = 'http://urls.api.twitter.com/1/urls/count.json?url=' + pageURL;
        return $.ajax({
          url: url,
          dataType: 'jsonp',
          success: function(json) {
            return $(elm).html(json.count);
          }
        });
      }
    };

    return Tweet;

  })();

  $(function() {
    ide.tweet = new Tweet;
  });

}).call(this);
