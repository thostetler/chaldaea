export const parseSolrResponse = function(res) {
  if (!res) {
    throw Error('No Response')
  }
  console.log(res)
  const { responseHeader, response } = res
  console.log(response, responseHeader)
  return {
    results: response.docs.map(i => {
      return Object.assign(i, {
        title: i.title[0],
        selected: false
      })
    }),
    numResults: response.numFound
  }
}

export default parseSolrResponse
