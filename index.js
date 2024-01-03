const button = document.querySelector(".page__btn");
const par = document.querySelector(".page__par");
const paragrafs = [
  "«Success is the child of audacity», - Benjamin Disraeli",
  "«You miss 100% of the shots you don’t take», - Wayne Gretzky",
  "«Fall seven times and stand up eight», - Japanese Proverb",
  "«There are no shortcuts to any place worth going», - Helen Keller",
  " «Success is not the key to happiness. Happiness is the key to success», - Herman Cain",
  "«The mind is everything. What you think you become», - Buddha",
  "«When I do good, I feel good. When I do bad, I feel bad. That’s my religion», - Abraham Lincoln",
  "«You only live once, but if you do it right, once is enough», - Mae West",
  "«Your time is limited, so don’t waste it living someone else’s life», - Steve Jobs",
  "«The two most important days in your life are the day you are born and the day you find out why», - Mark Twain",
  " «You yourself, as much as anybody in the entire universe, deserve your love and affection», - Buddha",
  " «Live as if you were to die tomorrow. Learn as if you were to live forever», - Mahatma Gandhi",
];

button.addEventListener("click", (e) => {
  e.preventDefault;
  let randomParagraf = paragrafs[Math.floor(Math.random() * paragrafs.length)];
  par.textContent = randomParagraf;
});
