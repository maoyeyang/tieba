import axios from 'axios'

// 获取用户信息 (验证)
export const getUserInfoWithAuth = async () => {
  const res = await axios.get('/auth/userinfo')
  return res
}
// 获取用户信息
export const getUserInfo = async (id) => {
  const res = await axios.get(`/api/userinfo/${id}`)
  return res
}
// 修改用户信息 (验证)
export const editUserInfoWithAuth = async (data) => {
  const res = await axios.post('/auth/useredit', data)
  return res
}
// 上传用户头像 (验证)
export const UploadUserImgWithAuth = async (data) => {
  const res = await axios.post('/auth/upload_avatar', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return res
}
// 获取用户关注列表 (验证)
export const getUserFocusListWithAuth = async () => {
  const res = await axios.get('/auth/focuslist')
  return res
}
// 获取用户粉丝列表 (验证)
export const getUserFansListWithAuth = async () => {
  const res = await axios.get('/auth/fanslist')
  return res
}
// 取消用户关注 (验证)
export const reomveFocusWithAuth = async (data) => {
  const res = await axios.post('/auth/reomvefocus', data)
  return res
}
// 关注用户 (验证)
export const addFocusWithAuth = async (data) => {
  const res = await axios.post('/auth/addfocus', data)
  return res
}
// 用户登录
export const login = async (data) => {
  const res = await axios.post('/login', data)
  return res
}
// 用户注册
export const register = async (data) => {
  const res = await axios.post('/register', data)
  return res
}
