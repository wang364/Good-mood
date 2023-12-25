var WHITE_ICON = 'https://icanhazdadjoke.com/static/smile.svg';
var BLACK_ICON = 'https://icanhazdadjoke.com/static/smile.svg';

var dadjokeurl = 'https://icanhazdadjoke.com/';
var onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
    //fetch date from icanhazdadjoke.com
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            return t.modal({
                title: "Good Day!",
                url: 'good_day.html'
            });
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