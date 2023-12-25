var WHITE_ICON = 'https://icanhazdadjoke.com/static/smile.svg';
var BLACK_ICON = 'https://icanhazdadjoke.com/static/smile.svg';

var onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
    return t.popup({
        title: "Good Day!",
        url: 'good_day.html'
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