const url = 'https://api.coincap.io/v2'

const getAssets = () => {
  return fetch(`${url}/assets?limit=20`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(new Error('API ERROR'))
}

const getAsset = id => {
  return fetch(`${url}/assets/${id}`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(new Error('API ERROR'))
}

const getAssetHistory = id => {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${id}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(response => response.json())
    .then(response => response.data)
    .catch(new Error('API ERROR'))
}

const getMarkets = id => {
  return fetch(`${url}/assets/${id}/markets?limit=5`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(new Error('API ERROR'))
}

const getExchange = markedId => {
  return fetch(`${url}/exchanges/${markedId}`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(new Error('API ERROR'))
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
}
