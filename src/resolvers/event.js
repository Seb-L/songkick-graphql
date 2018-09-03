import apiInstance from '../apiInstance'

export default (parent, args, context, info) => {
  return apiInstance
    .get(`events/${args.event_id}.json`)
    .then(res => res.data.resultsPage.results.event)
    .catch(err => console.log(err))
}
