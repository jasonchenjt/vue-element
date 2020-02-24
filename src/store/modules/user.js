const user = {
    state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('state')):{
        user:{
            username: ''
        }
    },
    
    //相当于getter
    getters: {
        getUser(state){
            return state.user;
        }
    },
    
    //相当于setter,同步的
    mutations: {
        updateUser(state,user){
            state.user = user
        }
    },
    
    //异步调用mutations方法
    actions: {
        asyncUpdateUser(contex,user){
            contex.commit('updateUser',user);
        }
    }
}

export default user;