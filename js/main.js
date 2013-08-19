var App = {
  models: {},
  controllers: {},
  views: {},

  init: function() {
    new App.controllers.Nav();
    new App.views.Home();
    Backbone.history.start();
  },

  logoInit : function() {
    var el = document.getElementById("logo");
    var ctx = el.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10,13);
    ctx.lineTo(30,13);
    ctx.moveTo(20,13);
    ctx.lineTo(20,77);
    ctx.moveTo(10,77);
    ctx.lineTo(30,77);


    ctx.moveTo(40,80);
    ctx.lineTo(40,10);
    ctx.lineTo(50,50);
    ctx.lineTo(60,10);
    ctx.lineTo(60,80);


    ctx.moveTo(70,13);
    ctx.lineTo(90,13);
    ctx.moveTo(80,13);
    ctx.lineTo(80,77);
    ctx.moveTo(70,77);
    ctx.lineTo(90,77);


    ctx.moveTo(130,13);
    ctx.lineTo(100,13);
    ctx.lineTo(100,77);
    ctx.lineTo(130,77);
    ctx.moveTo(100,45);
    ctx.lineTo(130,45);

    ctx.closePath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#321564";
    ctx.stroke();
  }
};