export const fetchKitNames = () => {
  return fetch('https://sample-space-be.herokuapp.com/api/v1/kits').then(
    (response) => response.json()
  )
}

export const fetchKit = (kitName) => {
  return fetch(
    `https://eab5b235-d42c-43c1-a6e3-290513e953fb.mock.pstmn.io/kits/${kitName}`
  ).then((response) => response.json())
}