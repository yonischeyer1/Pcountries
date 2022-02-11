import request from '@/utils/request'
export function fetchCountries(query) {
    return request({
      baseURL: process.env.VUE_APP_COUNTRIES_API,
      url: `/countries`,
      method: 'get',
      params: query
    })
  }
  
  export function deleteCountry(id) {
    return request({
      baseURL:process.env.VUE_APP_COUNTRIES_API,
      url: `/country/remove/${id}`,
      method: 'delete',
    })
  }
  
  export function updateCountry(country) {
    return request({
      baseURL:process.env.VUE_APP_COUNTRIES_API,
      url: `/country/edit`,
      method: 'post',
      data:country
    })
  }
  
  export function fetchAllCountries() {
    return request({
      baseURL:process.env.VUE_APP_COUNTRIES_API,
      url: `/allCountries`,
      method: 'get',
    })
  }