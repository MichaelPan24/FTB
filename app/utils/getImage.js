export default {
    shotImage: function(shot) {
        var uri = shot.images.normal ? shot.images.normal : shot.images.teaser;
        return {uri};
      },
      authorAvatar: function(player) {
        var uri;
        if (player) {
          uri = player.avatar_url;
          return {uri};
        } else {
          uri = require('../../img/AuthorAvatar.png');
          return uri;
        }
      }
}