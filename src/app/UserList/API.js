// api.js
const users = [
  { name: 'Derek', age: '10' },
  { name: 'Anna', age: '20' },
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(users)
    }, 3000)
  })
}