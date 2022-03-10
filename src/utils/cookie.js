import Cookies from 'js-cookie'

const TokenKey = 'token'
const codeKey = 'code'
const companyId = 'companyId'
const projectTheme = 'projectTheme'
const userInfo = 'userInfo'
const systemName = 'systemName'
const versionId = 'versionId'
const projectInfo = 'projectInfo'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getCodeKey() {
  return Cookies.get(codeKey)
}

export function setCompanyId(id) {
  return Cookies.set(companyId, id)
}

export function getCompanyId() {
  return Cookies.get(companyId)
}

export function setProjectTheme(theme) {
    return Cookies.set(projectTheme, theme)
}

export function getProjectTheme() {
    return Cookies.get(projectTheme)
}

export function setUserInfo(data) {
    return Cookies.set(userInfo,data)
}

export function setSystemName(data) {
    return Cookies.set(systemName,data)
}

export function getSystemName() {
  return Cookies.get(systemName)
}

export function removeSystemName() {
  return Cookies.remove(systemName)
}


export function setVersionId(data) {
  return Cookies.set(versionId,data)
}

export function getVersionId() {
  return Cookies.get(versionId)
}

export function setProjectInfo(data) {
  return Cookies.set(projectInfo,data)
}

export function getProjectInfo() {
  return Cookies.get(projectInfo)
}
export function authShowBtnByEmpId(authEmpIdList,loginEmpId) {
  let viewBtn = false;
  authEmpIdList.forEach(item=>{
    if(loginEmpId===item){
      viewBtn=true;
    }
  });
  return viewBtn;
}

