module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        parser: 'babel-eslint',
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-multi-spaces": 1,//不能用多余的空格
        "no-multiple-empty-lines": [1, {"max": 1}],//空行最多不能超过1行
        "no-irregular-whitespace": 2,//不能有不规则的空格
        "no-inline-comments": 0,//禁止行内备注
        "linebreak-style": [0, "windows"],//换行风格


        "no-alert": 0,//禁止使用alert confirm prompt
        "no-var": 0,//禁用var，用let和const代替
        "no-implicit-coercion": 1,//禁止隐式转换
        "no-label-var": 2,//label名不能与var声明的变量名相同
        "no-labels": 2,//禁止标签声明
        "no-lone-blocks": 2,//禁止不必要的嵌套块
        "no-mixed-requires": [0, false],//声明时不能混用声明类型

        "no-unused-vars": "off",//函数参数未使用不报错
    }
};