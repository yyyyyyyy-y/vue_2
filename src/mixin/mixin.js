export default{
    data(){
        return{
            mainContentHeight:0,
            headerHeight:50,
            footerHeight:50,
        }
    },
    beforeMount() {
        this.mainContentHeight = window.innerHeight - this.headerHeight - this.footerHeight
    }
}