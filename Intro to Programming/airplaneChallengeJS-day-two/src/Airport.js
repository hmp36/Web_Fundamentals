'use strict';

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hanger = [];
};

Airport.prototype = {

  planes: function() {

    return this._hanger;

  },

  clearForLanding: function(plane) {

    if(this._weather.isStormy()) {
      throw new Error("cannot land during storm");
    }
    this._hanger.push(plane);

  },

  clearForTakeOff: function(plane) {

    if( this._weather.isStormy() ) {
      throw new Error("cannot take off during storm");
    }
    this._hanger = [];

  }

};
