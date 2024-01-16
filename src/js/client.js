var WHITE_ICON = 'https://icanhazdadjoke.com/static/smile.svg';
var BLACK_ICON = 'https://icanhazdadjoke.com/static/smile.svg';

var dadjokeurl = 'https://icanhazdadjoke.com/';
var onBtnClick = function (t, opts) {
    return t.modal({
        title: "Keep a good mood!",
        url: 'good_mood.html'
    });
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      // we can either provide a button that has a callback function
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'Callback',
      callback: onBtnClick,
      condition: 'edit'
    }];
  }
});