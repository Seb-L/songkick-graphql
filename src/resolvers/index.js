import venue from './venue'
import venues from './venues'
import artists from './artists'
import event from './event'
import events from './events'
import similarArtists from './similar-artists'
import locationSearch from './location-search'

export default {
  Query: {
    venue,
    venues,
    artists,
    event,
    events,
    similarArtists,
    locationSearch
  },
  Artist: {
    events
  },
  Venue: {
    events
  }
}
