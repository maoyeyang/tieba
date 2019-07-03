import axios from 'axios'

// 获取用户的帖的列表 (验证)
export const getUserTieListWithAuth = async () => {
  const res = await axios.get('/auth/usertielist')
  return res
}
