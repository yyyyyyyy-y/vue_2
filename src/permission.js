import router from "./router";

router.beforeEach((to,from,next)=>{
    console.log("to",to)
    console.log("from",from)
    console.log("next",next)
    if (to.meta.title){
        document.title = to.meta.title
    }
    if (to.path === "/"){
        console.log(111);
        next({path:"/login"})
    }
    next()
})