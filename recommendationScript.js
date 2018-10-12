const linkedInRecommendation = (
  positiveDescriptivePhrase = '',
  personYouAreRecommending = '',
  lengthOfTime = 'three months',
  descriptionOfWorkingRelationship = '',
  descriptionOfWhatMakesPersonStandOut = '',
  thirdPersonGenderPronoun = '',
  favoritePersonalityTrait = '',
  skillSets = [
    'Node',
    'Express',
    'React/Redux',
    'Databases using Sequelize and Postgres',
    'and',
    'vanilla JavaScript'
  ]
) => {
  return `${positiveDescriptivePhrase} is the phrase that comes to mind when I think about ${personYouAreRecommending}. I’ve had the pleasure of knowing ${personYouAreRecommending} for ${lengthOfTime}, during which ${descriptionOfWorkingRelationship}. Above all, I was impressed with ${personYouAreRecommending}’s ability to ${descriptionOfWhatMakesPersonStandOut}. And, of course, ${thirdPersonGenderPronoun} ${favoritePersonalityTrait}. ${personYouAreRecommending} would be a true asset for any positions requiring ${skillSets.map(
    skill => ' ' + skill
  )} and comes with my heartfelt recommendation.`;
};

console.log(
  linkedInRecommendation(
    'Innovative',
    'Morgan',
    'three months',
    'we worked together at FullStack Academy on a week-long hackathon to build a React Native app',
    'simplify complicated problems',
    'he',
    'makes dealing with complicated matters fun'
  )
);

//From https://www.themuse.com/advice/your-5minute-guide-to-writing-an-amazing-linkedin-recommendation
