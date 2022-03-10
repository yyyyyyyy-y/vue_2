/**
 * 系统所使用到代码组
 */

export default {
    YES_NO: [// 是否
        {label: '否', value: 0},
        {label: '是', value: 1}
    ],
    RANGE: [
        {label: '无', value: -1},
        {label: '项目', value: 0},
        {label: '业态', value: 10}
    ],
    COMPANY_TYPE: [
        {label: '试用', value: 0},
        {label: '付费用户', value: 1},
        {label: '已过期', value: 2}
    ],
    STATUS: [
        {label: '启用', value: 1},
        {label: '禁用', value: 0}
    ],
    ROLE_RIGHTS: [
        {label: '超级管理员', value: 0},
        {label: '管理员', value: 1},
        {label: '部门管理员', value: 2},
        {label: '成员', value: 3}
    ],
    FORMULA_TYPE: [
        {label: '参数引用', value: 0},
        {label: '横向汇总', value: 1},
        // {label: '横向均摊', value: 2},
        {label: '四则运算', value: 3},
        {label: '下级汇总', value: 4},
        {label: '文本录入', value: 5},
    ],
    CALCULATE_TYPE: [
        {label: '专业测算', value: 0},
        {label: '专项测算', value: 1},
        {label: '一键测算', value: 2},
    ],
    CALCULATE_STATUS: [
        {label: '未锁定', value: 2},
        {label: '已锁定', value: 4},
    ],
    OPERATOR_TYPE: [
        {label: '计算', value: 1},
        {label: '锁定', value: 2},
        {label: '重新计算', value: 3},
        {label: '计算中断', value: 5},
    ],
    OPERATOR_RESULT: [
        {label: '成功', value: 1},
        {label: '失败', value: 0},
    ],
    ROLE_TYPE: [
        {label: '综合', value: 0},
        {label: '菜单权限', value: 1},
        {label: '数据权限', value: 2},
    ], // 角色类型
    BANK: [
        {label: '招商银行', value: 0},
        {label: '农业银行', value: 1},
        {label: '建设银行', value: 2},
        {label: '工商银行', value: 3},
    ],
    SEX:[
        {label: '男', value: 0},
        {label: '女', value: 1},
    ],
    MARRY:[
        {label: '已婚', value: 0},
        {label: '未婚', value: 1},
    ],
    TASK_STATUS:[
        {label: '未开始', value: 0},
        {label: '进行中', value: 1},
        {label: '已完成', value: 2},
        {label: '未完成', value: 3},
    ],
    TASK_CLASS:[
        {label: '一般', value: 0},
        {label: '紧急', value: 1},
        {label: '非常紧急', value: 2},
    ],
    INVOICE_TYPE:[
        {label: '普通发票', value: 1},
        {label: '增值税专用发票', value: 2},
    ],
    INVOICE_SERVICE:[
        {label: '咨询服务', value: 1},
    ],
    INVOICE_TAKE_TYPE:[
        {label: '自取', value: 1},
        {label: '邮寄甲方', value: 2},
        {label: '邮寄分公司', value: 3},
    ],
    FLOW_TYPE:[
        {label: '日志流程', value: 1},
        {label: '报销流程', value: 2},
        {label: '开票流程', value: 3},
    ],
    POSITION:[
        {label: '总经理', value: 1},
        {label: '财务经理', value: 2},
        {label: '人事经理', value: 3},
        {label: '项目经理', value: 4},
    ]
}
