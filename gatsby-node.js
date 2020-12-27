const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from Instagram API at build time
  const result = await fetch(
    `https://graph.instagram.com/me/media?fields=caption,media_type,media_url,timestamp,thumbnail_url,permalink&access_token=IGQVJWdmFpdTZAkdjhzYUJtVHB5WDFGTVZAhTzFtQUstVTZARX3haQ2xWTFdvT1ZAsSTlOOHQ1MEZA5dzh4SUFMV3ZAwUEhTY1RobmwyZAF9kZA25sT2ZAGSFo3UkJNSWZA1RENiQWhkam14MDhB`
  )
  const resultData = await result.json()

  // create node for build time data example in the docs
  createNode({
    // post is and arbitrary field for the data
    dataQuery: resultData.data,
    // required fields
    id: `post-example`,
    parent: null,
    children: [],
    internal: {
      type: `Post`,
      contentDigest: createContentDigest(resultData),
    },
  })

  createNode({
    // post is and arbitrary field for the data
    dataQuery: resultData.paging,
    // required fields
    id: `post-paging`,
    parent: null,
    children: {},
    internal: {
      type: `Paging`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
