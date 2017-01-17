
export function configRouter(router) {
    router.map({
        "/user/user": {
            component: function(resovle) {require(['./view/user/user.vue'], resovle)}
        },
        "/user/department": {
            component: function(resovle) {require(['./view/user/department.vue'], resovle)},
            auth:true
        },
        "/user/role": {
            component: function(resovle) {require(['./view/user/role.vue'], resovle)}
        },
        "/user/menu": {
            component: function(resovle) {require(['./view/user/menu.vue'], resovle)}
        },
        "/aireline/list": {
            component: function(resovle) {require(['./view/aireline/list.vue'], resovle)}
        },
        "/aireline/schedule": {
            name:'schedule',
            component: function(resovle) {require(['./view/aireline/schedule.vue'], resovle)},
            auth:true
        },
        "/aireline/iata": {
            component: function(resovle) {require(['./view/aireline/iata.vue'], resovle)},
            auth:true
        },
        "/market/price": {//航司直达点协议价格列表
            component: function(resovle) {require(['./view/market/price.vue'], resovle)},
            auth:true
        },
        "/market/feesSet": {//航司杂费列表
            component: function(resovle) {require(['./view/market/feesSet.vue'], resovle)},
            auth:true
        },
        "/market/formulaSet": {//航司付费重计算公式设置
            component: function(resovle) {require(['./view/market/formulaSet.vue'], resovle)},
            auth:true
        },
        "/market/companyFees": {//航司杂费列表
            component: function(resovle) {require(['./view/market/companyFees.vue'], resovle)},
            auth:true
        },
        "/market/transitPrice": {//航司转运价格列表
            component: function(resovle) {require(['./view/market/transitPrice.vue'], resovle)},
            auth:true
        },
        "/market/priceRule": {//表价加成规则列表
            component: function(resovle) {require(['./view/market/priceRule.vue'], resovle)},
            auth:true
        },
        "/market/seat": {//舱位预报和动态
            component: function(resovle) {require(['./view/market/seat.vue'], resovle)},
            auth:true
        },
        "/supplier/listSupplier": {
            component: function(resovle) {require(['./view/supplier/listSupplier.vue'], resovle)}
        },
        "/supplier/listContact": {
            component: function(resovle) {require(['./view/supplier/listContact.vue'], resovle)},
            name:'listContact'
        },
        "/supplier/listReceipt": {
            component: function(resovle) {require(['./view/supplier/listReceipt.vue'], resovle)},
            name:'listReceipt'
        },
        "/supplier/listContract": {
            component: function(resovle) {require(['./view/supplier/listContract.vue'], resovle)},
            name:'listContract'
        },
        "/volume/listRule": {//货量统计表
            component: function(resovle) {require(['./view/volume/listRule.vue'], resovle)},
            name:'listRule'
        },
        "/volume/listStatistics": {//货量考核规则
            component: function(resovle) {require(['./view/volume/listStatistics.vue'], resovle)},
            name:'listStatistics'
        },
        "/booking/listBooking": {//我的订舱
            component: function(resovle) {require(['./view/booking/listBooking.vue'], resovle)},
            name:'listBooking'
        },
        "/booking/bookingReturn": {//订舱打回
            component: function(resovle) {require(['./view/booking/bookingReturn.vue'], resovle)},
            name:'bookingReturn'
        },
        "/customs/listCustoms": {//关务管理
            component: function(resovle) {require(['./view/customs/listCustoms.vue'], resovle)},
            name:'listCustoms'
        },
        "/customs/managementAlone": {//快速埋单
            component: function(resovle) {require(['./view/customs/managementAlone.vue'], resovle)},
            name:'managementAlone'
        },
        "/goodsTally/listTally": {//我的接货
            component: function(resovle) {require(['./view/goodsTally/listTally.vue'], resovle)},
            name:'listTally'
        },
        "/goodsTally/tallyDetail": {//我的接货
            component: function(resovle) {require(['./view/goodsTally/tallyDetail.vue'], resovle)},
            name:'tallyDetail'
        },
        "/bargaining/listBargaining": {//我的议价和上板安排
            component: function(resovle) {require(['./view/bargaining/listBargaining.vue'], resovle)},
            name:'listBargaining'
        },
        "/bargaining/bargainingDetail": {//议价和上板安排详情
            component: function(resovle) {require(['./view/bargaining/bargainingDetail.vue'], resovle)},
            name:'bargainingDetail'
        },
        "/billing/listBiling": {//我的账单
            component: function(resovle) {require(['./view/billing/listBiling.vue'], resovle)},
            name:'listBiling'
        },
        "/billing/listBilingDetail": {//主账单详情
            component: function(resovle) {require(['./view/billing/listBilingDetail.vue'], resovle)},
            name:'listBilingDetail'
        },
        "/billing/costApplication": {//费用申请管理
            component: function(resovle) {require(['./view/billing/costApplication.vue'], resovle)},
            name:'costApplication'
        },
        "/billing/billingApplication": {//开票申请管理
            component: function(resovle) {require(['./view/billing/billingApplication.vue'], resovle)},
            name:'costApplication'
        },
        "/EQ/listEq": {//EQ管理
            component: function(resovle) {require(['./view/EQ/listEq.vue'], resovle)},
            name:'listEq'
        },
        "/EQ/listEqRule": {//EQ规则管理
            component: function(resovle) {require(['./view/EQ/listEqRule.vue'], resovle)},
            name:'listEqRule'
        },
        "/EQ/listEqPrice": {//EQ缺重量单价管理管理
            component: function(resovle) {require(['./view/EQ/listEqPrice.vue'], resovle)},
            name:'listEqPrice'
        },
        "/inquiryPrice/listInquiry": {//我的询价处理
            component: function(resovle) {require(['./view/inquiryPrice/listInquiry.vue'], resovle)},
            name:'listInquiry'
        },
        "/inquiryPrice/InquiryPage": {//询价
            component: function(resovle) {require(['./view/inquiryPrice/InquiryPage.vue'], resovle)},
            name:'InquiryPage'
        },
        "/inquiryPrice/InquiryDetails": {//询价详情
            component: function(resovle) {require(['./view/inquiryPrice/InquiryDetails.vue'], resovle)},
            name:'InquiryDetails'
        },
        "/inquiryPrice/InquiryRule": {//询价提醒规则录入
            component: function(resovle) {require(['./view/inquiryPrice/InquiryRule.vue'], resovle)},
            name:'InquiryRule'
        },
        "/orderManagement/listOrder": {//我的订单
            component: function(resovle) {require(['./view/orderManagement/listOrder.vue'], resovle)},
            name:'listOrder'
        },
        "/orderManagement/orderDetails": {//我的订单详情
            component: function(resovle) {require(['./view/orderManagement/orderDetails.vue'], resovle)},
            name:'orderDetails'
        },
        "/orderManagement/orderQuote": {//选择关联报价
            component: function(resovle) {require(['./view/orderManagement/orderQuote.vue'], resovle)},
            name:'orderQuote'
        },
        "/orderManagement/orderVct": {//缺安检单VCT统计表
            component: function(resovle) {require(['./view/orderManagement/orderVct.vue'], resovle)},
            name:'orderVct'
        },
        "/orderManagement/orderFileList": {//随机文件清单
            component: function(resovle) {require(['./view/orderManagement/orderFileList.vue'], resovle)},
            name:'orderFileList'
        },
        "/notfound": {
            component: require('./view/not-found.vue')
        }
    })

    // redirect
    router.redirect({
        "*": "/login"
    })

    // global before
    // 3 options:
    // 1. return a boolean
    // 2. return a Promise that resolves to a boolean
    // 3. call transition.next() or transition.abort()
    router.beforeEach(function (transition) {
        console.log('path='+transition.to.path)
        transition.next()
       /* if (transition.to.auth) {//验证登入
            $.ajax({
                url: "/login/checkLogin",
                dataType: "json",
                success: function (xhr) {
                    if(xhr.status==200){
                        transition.next()
                    }else{
                        transition.redirect({ name: 'login', query: {url:transition.to.path}})
                    }
                }
            })
        } else {
            transition.next()
        }*/
    })
}
