export const fetchKitNames = () => {
  return fetch('https://sample-space-be.herokuapp.com/api/v1/kits').then((response) =>
    response.json()
  )
}

export const fetchKit = (kitName) => {
  return fetch(`https://sample-space-be.herokuapp.com/api/v1/kits/${kitName}`).then(
    (response) => response.json()
  )
}
