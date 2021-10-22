module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "~@/styles/variables.scss";
                @import "~@/styles/mixin.scss";
                `
            }
        }
    }
}