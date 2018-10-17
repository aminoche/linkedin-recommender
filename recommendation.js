const recommendation = (
  positiveDescriptivePhrase = '',
  personYouAreRecommending = '',
  lengthOfTime = '',
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

module.exports = recommendation;

// Credits to The Muse
// https://www.themuse.com/advice/your-5minute-guide-to-writing-an-amazing-linkedin-recommendation
