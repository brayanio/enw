import AlternativeMilks from './AlternativeMilks.js'

export default {
  clickbait: './assets/milk2.png',
  id: 'WhatsTheBestMilk',
  title: 'Whats the best milk?',
  date: '12/06/19',
  tags: ['health', 'milk', 'vegan'],
  template: {
    component: 'PList',
    props: {
      flag: './assets/dairy.png',
      p: [
        {
          classList: 'jumbotron',
          html: `
            Despite normal propaganda, dairy products are not healthy choices for you vibrationally.
          `
        },
        {
          html: `
            A cow must be pregnent in order to produce milk. Due to milk's high demand to create products like ice cream, cheese, and specialty cofffes, the process is less than moral.
          `
        },
        {
          html: `
            Cows usually live in factory conditions without ever touching a pasture. Cows also must be pregnant to produce milk, so dairy companies will impregnate cows and seperate the child from the mother and take the mothers milk.
          `
        },
        {
          html: `
            Each cow is bred to produce 7.5 gallons of milk per day. While the amount needed to feed her calf is only 1 gallon. After three years, the cows are too depressed to continue, and are then slaughtered for beef.
          `
        },
        {
          classList: 'jumbotron',
          html: `
            In the US the FDA allows 750 million pus cells in every litre of milk. Not only pus, but there have been cases of pulling milk from shelves for containing too much poop. Which means there's also poop in your milk.
          `
        },
        {
          html: `
            For these reasons, we'd only reccomend milk to those who raise the cows themselves. Having a bond and ensuring ethical treatment is the way to enjoy vegan milk. 
          `
        },
        {
          html: `
            <a href="#/post/${AlternativeMilks.id}">Alternative Milks</a> include almond, oat, and soy milk.
          `
        }
      ]
    }
  }
}