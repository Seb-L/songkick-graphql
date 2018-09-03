import apiInstance from '../apiInstance'

export default (parent, args, context, info) => {
  let endpoint

  // Subqueries
  if (info.parentType.toString() === 'Artist') {
    args.artist_id = parent.id
  } else if (info.parentType.toString() === 'Venue') {
    args.venue_id = parent.id
  }

  if (args.artist_id || args.music_brainz_id) {
    // artist events
    endpoint = `artists/${args.artist_id ? args.artist_id : 'mbid:'+ args.music_brainz_id}/calendar.json`
  } else if (args.metro_area_id) {
    // metro events
    endpoint = `metro_areas/${args.metro_area_id}/calendar.json`
  } else if (args.username) {
    // user events
    endpoint = `users/${args.username}/calendar.json`
  } else if (args.venue_id) {
    // venue events
    endpoint = `venues/${args.venue_id}/calendar.json`
  } else {
    endpoint = `events.json`
  }

  return apiInstance
    .get(endpoint, {
      params: args
    })
    .then(res => res.data.resultsPage.results.event)
    .catch(err => console.log(err.results.data))
}
