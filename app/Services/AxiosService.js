// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake',
  timeout: 8000
})

// @ts-ignore
export const dndApi = new axios.create({
  baseURL: 'https://www.dnd5eapi.co',
  timeout: 8000
})
