import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://api.songkick.com/api/3.0/',
  params: {
    apikey: process.env.SKKEY
  }
})
