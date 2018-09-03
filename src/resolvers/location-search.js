import apiInstance from '../apiInstance'

export default (parent, args, context, info) => {
  return apiInstance
    .get(`search/locations.json`, {
      params: args
    })
    .then(res => res.data.resultsPage.results.location)
    .catch(err => console.log(err))
}
