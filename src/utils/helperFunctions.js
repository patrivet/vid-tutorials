/**
 * @param {array of tutorial objects} tutorials
 * @param {array of strings} tagsToMatch
 * @param {number} numMatches
 * @return {array of tutorial objects} maximum of 20 returned.
 */
export const getTopRatedTutorialsForTags = (
  tutorials,
  tagsToMatch,
  numMatches
) => {
  let result = [];
  // The sort or entire function could be memorized ?
  tutorials.sort((a, b) => b.averageUserRating - a.averageUserRating);

  // Iterate tutorials and push into return array if contains tagsToMatch
  for (let i = 0; i < tutorials.length; i++) {
    const nextTutorial = tutorials[i];
    for (let j = 0; j < tagsToMatch.length; j++) {
      if (nextTutorial.tags.includes(tagsToMatch[j])) {
        result.push(nextTutorial);
        break;
      }
    }
    if (result.length === numMatches) return result;
  }
  return result.splice(0, numMatches);
};

/**
 * @param {array of tutorial objects} tutorials
 * @param {string} searchTerm
 * @return {array of tutorial objects}
 */
export const searchForTutorials = (tutorials, searchTerm) => {
  let result = [];
  const searchTerms = searchTerm.toLowerCase().split(" ");
  const numSearchTerms = searchTerms.length;
  for (let i = 0; i < tutorials.length; i++) {
    let occurances = 0;
    const nextTutorial = tutorials[i];
    for (let j = 0; j < searchTerms.length; j++) {
      if (nextTutorial.videoTitle.toLowerCase().indexOf(searchTerms[j]) !== -1)
        occurances++;
    }
    if (occurances === numSearchTerms) result.push(nextTutorial);
  }
  return result;
};
