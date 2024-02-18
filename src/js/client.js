var onBtnClick = function (t, opts) {
    return t.modal({
        title: "Keep a good mood!",
        url: 'self_talk.html'
    });
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      // we can either provide a button that has a callback function
      icon: 'https://icanhazdadjoke.com/static/smile.svg',
      text: 'Good Mood',
      callback: onBtnClick,
      condition: 'edit'
    }];
  }
});