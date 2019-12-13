import AlternativeMilks from './AlternativeMilks.js'

export default {
  id: 'WhatsTheBestMilk',
  title: 'Whats the best milk?',
  date: '12/06/19',
  tags: ['health', 'milk', 'vegan'],
  html: `
    <p class="jumbotron">
      Despite normal propaganda, dairy products are not healthy choices for you vibrationally.
    </p>
    <hr>
    <p>
      In order for milk to be created, a cow must be pregnent. Due to milk's high demand to create products like ice cream, cheese, and specialty cofffes, the process is less than moral.
    </p>
    <hr>
    <p>
      Cows usually live in factory conditions without ever touching a pasture. Cows also must be pregnant to produce milk, so dairy companies will impregnate cows and seperate the child from the mother and take the mothers milk.
    </p>
    <hr>
    <p>
      Each cow is bred to produce 7.5 gallons of milk per day. While the amount needed to feed her calf is only 1 gallon. After three years, the cows are too depressed to continue, and are then slaughtered for beef.
    </p>
    <hr>
    <p class="jumbotron">
      In the US the FDA allows 750 million pus cells in every litre of milk. Not only pus, but there have been cases of pulling milk from shelves for containing too much poop. Which means there's also poop in your milk.
    </p>
    <hr>
    <p>
      For these reasons, we'd only reccomend milk to those who raise the cows themselves. Having a bond and ensuring ethical treatment is the way to enjoy vegan milk. 
    </p>
    <hr>
    <p>
      <a href="#/post/${AlternativeMilks.id}">Alternative Milks</a> include almond, oat, and soy milk.
    </p>
  `
}