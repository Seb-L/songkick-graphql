import apiInstance from '../apiInstance'

export default (parent, args, context) => {
  console.log('similar', args);

  return apiInstance
    .get(`search/venues.json`, {
      params: args
    })
    .then(res => res.data.resultsPage.results.venue)
    .catch(err => console.log(err))
}
