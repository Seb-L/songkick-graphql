import apiInstance from '../apiInstance'

export default (parent, args, context, info) => {
  return apiInstance
    .get(`search/artists.json`, {
      params: args
    })
    .then(res => res.data.resultsPage.results.artist)
    .catch(err => console.log(err))
}
