const state = {
    userInfo: {}
}

const mutations = {
    SET_USER_INFO: (state, userInfo) => {
        state.userInfo = userInfo
    }
}

const actions = {
    setUserInfo({commit}, userInfo) {
        // console.log(userInfo);
        commit('SET_USER_INFO',userInfo)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}