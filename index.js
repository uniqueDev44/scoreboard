

document.querySelector('.js-home-btn-1')
  .addEventListener('click', () => {
    score.home += 1;
    homeScoreEl.innerText = score.home;
  })

document.querySelector('.js-home-btn-2')
  .addEventListener('click', () => {
    score.home += 2;
    homeScoreEl.innerText = score.home;
  })

document.querySelector('.js-home-btn-3')
  .addEventListener('click', () => {
    score.home += 3;
    homeScoreEl.innerText = score.home;
  })

document.querySelector('.js-btn-one')
  .addEventListener('click', () => {
    score.away += 1;
    awayScoreEl.innerText = score.away;
  })

document.querySelector('.js-btn-two')
  .addEventListener('click', () => {
    score.away += 2;
    awayScoreEl.innerText = score.away;
})

document.querySelector('.js-btn-three')
  .addEventListener('click', () => {
    score.away += 3;
    awayScoreEl.innerText = score.away;
})

document.querySelector('.js-new-game')
  .addEventListener('click', () => {
    score.home = 0;
    score.away = 0;
    homeScoreEl.innerText = score.home;
    awayScoreEl.innerText = score.away;
  })
