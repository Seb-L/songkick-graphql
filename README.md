# songkick-graphql

SongKick API GraphQL wrapper (⚠️ Work in progress ⚠️).
Use it as a reference to build a GraphQL server to wrap an existing API.

Uses graphql-import and graphql-yoga.

## Install

Clone the repo then:

```bash
npm i
```

## Run dev

```bash
SKKEY=YOU_SONGKICK_API_KEY npm start
```

GraphiQL will be available on http://localhost:4000

Query example:

```graphql
{
  artists (query: "thee oh sees", per_page: 1) {
    id
    displayName
    events (per_page: 1) {
      id
      displayName
    }
  }
}
```

Will output

```json
{
  "data": {
    "artists": [
      {
        "id": 2321725,
        "displayName": "Thee Oh Sees",
        "events": [
          {
            "id": 33137014,
            "displayName": "Thee Oh Sees at O2 Forum Kentish Town (September 3, 2018)"
          }
        ]
      }
    ]
  }
}
```

## Get an API Key

You can create an API key: [HERE](https://www.songkick.com/api_key_requests/new)

## API References

You'll find the API references: [HERE](https://www.songkick.com/developer)
