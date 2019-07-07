import axios from 'axios'

// 获取用户的帖的列表 (验证)
export const getUserTieListWithAuth = async () => {
  const res = await axios.get('/auth/usertielist')
  return res
}
// 获取帖子的列表
export const getTieList = async () => {
  const res = await axios.get('/api/tielist')
  return res
}

// 获取关注人的帖子的列表(验证)
export const getTieListByFocus = async () => {
  const res = await axios.get('/auth/userfocustielist')
  return res
}

// 获取帖子的信息
export const getTieInfo = async (id) => {
  const res = await axios.get(`/api/tieinfo/${id}`)
  return res
}

// 发帖(验证)
export const addTieWithAuth = async (data) => {
  const res = await axios.post(`/auth/addtie`, data)
  return res
}

// 点赞  贴子(验证)
export const likeTieWithAuth = async (id) => {
  const res = await axios.post(`/auth/liketie`, {
    id
  })
  return res
}

// 取消点赞 贴子(验证)
export const unLikeTieWithAuth = async (id) => {
  const res = await axios.post(`/auth/unliketie`, {
    id
  })
  return res
}

// 收藏 贴子(验证)
export const collectTieWithAuth = async (id) => {
  const res = await axios.post(`/auth/collecttie`, {
    id
  })
  return res
}

// 取消收藏 贴子(验证)
export const removeCollectTieWithAuth = async (id) => {
  const res = await axios.post(`/auth/removecollecttie`, {
    id
  })
  return res
}

// 发评论 (验证)
export const addCommentWithAuth = async (data) => {
  const res = await axios.post(`/auth/addcomment`, data)
  return res
}
// 评论列表
export const getCommentList = async (id) => {
  const res = await axios.get(`/api/commentlist/${id}`)
  return res
}
// 获取你帖子的评论 (验证)
export const getUserCommentList = async () => {
  const res = await axios.get(`/auth/usercommentlist`)
  return res
}
// 给自己点赞的信息 (验证)
export const getLikeList = async () => {
  const res = await axios.get(`/auth/likelist`)
  return res
}
