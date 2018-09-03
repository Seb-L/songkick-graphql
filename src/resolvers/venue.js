import apiInstance from '../apiInstance'

export default (parent, args, context) => {
  return apiInstance
    .get(`venues/${args.venueId}.json`)
    .then(res => res.data.resultsPage.results.venue)
    .catch(err => console.log(err))
}
