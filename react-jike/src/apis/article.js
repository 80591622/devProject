import { request } from '@/utils'

export const getChannelAPI = (formData) => {
  return request({
    url: '/channels',
    method: 'GET'
  })
}

export const createArticleAPI = (data) => {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}

// 更新文章表单

export function updateArticleAPI (data) {
  return request({
    url: `/mp/articles/${data.id}?draft=false`,
    method: 'PUT',
    data
  })
}


// 获取文章列表

export const getArticleListAPI = (params) => {
  return request({
    url: "mp/articles",
    method: 'GET',
    params
  })
}


// 删除文章

export const delArticleAPI = (id) => {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE'
  })
}


// 获取文章详情

export const getArticleById = (id) => {
  return request({
    url: `/mp/articles/${id}`
  })
}

