import apiInstance from '../apiInstance'

export default (parent, args, context) => {
  console.log('similar', args);

  return apiInstance
    .get(`artists/${args.artistId}/similar_artists.json`, {
      params: args
    })
    .then(res => res.data.resultsPage.results.artist)
    .catch(err => console.log(err))
}
