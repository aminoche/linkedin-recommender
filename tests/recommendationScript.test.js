const recommendation = require('../recommendation');

test('works with a standard example', () => {
  expect(
    recommendation(
      'Innovative',
      'Morgan',
      'three months',
      'we worked together at FullStack Academy on a week-long hackathon to build a React Native app',
      'simplify complicated problems',
      'he',
      'makes dealing with complicated matters fun'
    )
  ).toBe(
    'Innovative is the phrase that comes to mind when I think about Morgan. I’ve had the pleasure of knowing Morgan for three months, during which we worked together at FullStack Academy on a week-long hackathon to build a React Native app. Above all, I was impressed with Morgan’s ability to simplify complicated problems. And, of course, he makes dealing with complicated matters fun. Morgan would be a true asset for any positions requiring  Node, Express, React/Redux, Databases using Sequelize and Postgres, and, vanilla JavaScript and comes with my heartfelt recommendation.'
  );
});
