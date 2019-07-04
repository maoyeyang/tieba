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

// 获取关注人的帖子的列表
export const getTieListByFocus = async () => {
  const res = await axios.get('/auth/userfocustielist')
  return res
}
