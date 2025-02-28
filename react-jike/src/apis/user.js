import { request } from '@/utils'

export const loginApi = (formData) => {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

export const getProfileApi = () => {
  return request({
    url: '/user/profile',
    method: 'GET'
  })
}
