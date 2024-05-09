'use server'

export async function GetIpInformationApi(ip: string) {
  return fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_OTfYbAJPCoBwfh0ZCvp1xUzEFftt1&ipAddress=${ip}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(async response => {
      return await response.json()
    })
    .catch(e => console.log(e))
}
