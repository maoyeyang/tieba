import axios from 'axios'

// 获取用户关注吧的列表 (验证)
export const getFocusBaListWithAuth = async () => {
  const res = await axios.get('/auth/focusbalist')
  return res
}
// 取消关注吧 (验证)
export const reomveFocusBaWithAuth = async (data) => {
  const res = await axios.post('/auth/removefocusba', data)
  return res
}
// 关注吧 (验证)
export const addFocusBaWithAuth = async (data) => {
  const res = await axios.post('/auth/addfocusba', data)
  return res
}
// 获取推荐吧的列表
export const getTiebaList = async () => {
  const res = await axios.get('/api/tiebalist')
  return res
}
// 获取贴吧信息ById
export const getBaInfo = async (id) => {
  const res = await axios.get(`/api/bainfo/${id}`)
  return res
}
// 获取吧的帖子列表信息
export const getTieListByBa = async (id) => {
  const res = await axios.get(`/api/tielistbyba/${id}`)
  return res
}
// 获取收藏的帖子列表信息
export const getCollectList = async () => {
  const res = await axios.get(`/api/collectlist`)
  return res
}
