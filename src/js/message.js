/**
* System message display
* @param {vjs.Player|Object} player
* @param {Object=} options
* @constructor
*/
vjs.SystemMessageDisplay = vjs.Component.extend({
  /** @constructor */
  init: function(player, options){
    vjs.Component.call(this, player, options);

    player.on('timeupdate', vjs.bind(this, this.updateContent));
  }
});

vjs.SystemMessageDisplay.prototype.createEl = function(type, props){
  props = vjs.obj.merge({
    className: 'vjs-system-message vjs-fade-out'
  }, props);

  return vjs.Component.prototype.createEl.call(this, type, props);
};

vjs.SystemMessageDisplay.prototype.updateContent = function(){
  if (this.el_.innerHTML === this.player_.message)
  {
    this.removeClass('vjs-fade-in');
    this.addClass('vjs-fade-out');
  }
  else
  {
    this.el_.innerHTML = this.player_.message;
    this.removeClass('vjs-fade-out');
  }
};
