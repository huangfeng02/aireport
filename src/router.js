
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
        "/market/price": {//��˾ֱ���Э��۸��б�
            component: function(resovle) {require(['./view/market/price.vue'], resovle)},
            auth:true
        },
        "/market/feesSet": {//��˾�ӷ��б�
            component: function(resovle) {require(['./view/market/feesSet.vue'], resovle)},
            auth:true
        },
        "/market/formulaSet": {//��˾�����ؼ��㹫ʽ����
            component: function(resovle) {require(['./view/market/formulaSet.vue'], resovle)},
            auth:true
        },
        "/market/companyFees": {//��˾�ӷ��б�
            component: function(resovle) {require(['./view/market/companyFees.vue'], resovle)},
            auth:true
        },
        "/market/transitPrice": {//��˾ת�˼۸��б�
            component: function(resovle) {require(['./view/market/transitPrice.vue'], resovle)},
            auth:true
        },
        "/market/priceRule": {//��ۼӳɹ����б�
            component: function(resovle) {require(['./view/market/priceRule.vue'], resovle)},
            auth:true
        },
        "/market/seat": {//��λԤ���Ͷ�̬
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
        "/volume/listRule": {//����ͳ�Ʊ�
            component: function(resovle) {require(['./view/volume/listRule.vue'], resovle)},
            name:'listRule'
        },
        "/volume/listStatistics": {//�������˹���
            component: function(resovle) {require(['./view/volume/listStatistics.vue'], resovle)},
            name:'listStatistics'
        },
        "/booking/listBooking": {//�ҵĶ���
            component: function(resovle) {require(['./view/booking/listBooking.vue'], resovle)},
            name:'listBooking'
        },
        "/booking/bookingReturn": {//���մ��
            component: function(resovle) {require(['./view/booking/bookingReturn.vue'], resovle)},
            name:'bookingReturn'
        },
        "/customs/listCustoms": {//�������
            component: function(resovle) {require(['./view/customs/listCustoms.vue'], resovle)},
            name:'listCustoms'
        },
        "/customs/managementAlone": {//������
            component: function(resovle) {require(['./view/customs/managementAlone.vue'], resovle)},
            name:'managementAlone'
        },
        "/goodsTally/listTally": {//�ҵĽӻ�
            component: function(resovle) {require(['./view/goodsTally/listTally.vue'], resovle)},
            name:'listTally'
        },
        "/goodsTally/tallyDetail": {//�ҵĽӻ�
            component: function(resovle) {require(['./view/goodsTally/tallyDetail.vue'], resovle)},
            name:'tallyDetail'
        },
        "/bargaining/listBargaining": {//�ҵ���ۺ��ϰ尲��
            component: function(resovle) {require(['./view/bargaining/listBargaining.vue'], resovle)},
            name:'listBargaining'
        },
        "/bargaining/bargainingDetail": {//��ۺ��ϰ尲������
            component: function(resovle) {require(['./view/bargaining/bargainingDetail.vue'], resovle)},
            name:'bargainingDetail'
        },
        "/billing/listBiling": {//�ҵ��˵�
            component: function(resovle) {require(['./view/billing/listBiling.vue'], resovle)},
            name:'listBiling'
        },
        "/billing/listBilingDetail": {//���˵�����
            component: function(resovle) {require(['./view/billing/listBilingDetail.vue'], resovle)},
            name:'listBilingDetail'
        },
        "/billing/costApplication": {//�����������
            component: function(resovle) {require(['./view/billing/costApplication.vue'], resovle)},
            name:'costApplication'
        },
        "/billing/billingApplication": {//��Ʊ�������
            component: function(resovle) {require(['./view/billing/billingApplication.vue'], resovle)},
            name:'costApplication'
        },
        "/EQ/listEq": {//EQ����
            component: function(resovle) {require(['./view/EQ/listEq.vue'], resovle)},
            name:'listEq'
        },
        "/EQ/listEqRule": {//EQ�������
            component: function(resovle) {require(['./view/EQ/listEqRule.vue'], resovle)},
            name:'listEqRule'
        },
        "/EQ/listEqPrice": {//EQȱ�������۹������
            component: function(resovle) {require(['./view/EQ/listEqPrice.vue'], resovle)},
            name:'listEqPrice'
        },
        "/inquiryPrice/listInquiry": {//�ҵ�ѯ�۴���
            component: function(resovle) {require(['./view/inquiryPrice/listInquiry.vue'], resovle)},
            name:'listInquiry'
        },
        "/inquiryPrice/InquiryPage": {//ѯ��
            component: function(resovle) {require(['./view/inquiryPrice/InquiryPage.vue'], resovle)},
            name:'InquiryPage'
        },
        "/inquiryPrice/InquiryDetails": {//ѯ������
            component: function(resovle) {require(['./view/inquiryPrice/InquiryDetails.vue'], resovle)},
            name:'InquiryDetails'
        },
        "/inquiryPrice/InquiryRule": {//ѯ�����ѹ���¼��
            component: function(resovle) {require(['./view/inquiryPrice/InquiryRule.vue'], resovle)},
            name:'InquiryRule'
        },
        "/orderManagement/listOrder": {//�ҵĶ���
            component: function(resovle) {require(['./view/orderManagement/listOrder.vue'], resovle)},
            name:'listOrder'
        },
        "/orderManagement/orderDetails": {//�ҵĶ�������
            component: function(resovle) {require(['./view/orderManagement/orderDetails.vue'], resovle)},
            name:'orderDetails'
        },
        "/orderManagement/orderQuote": {//ѡ���������
            component: function(resovle) {require(['./view/orderManagement/orderQuote.vue'], resovle)},
            name:'orderQuote'
        },
        "/orderManagement/orderVct": {//ȱ���쵥VCTͳ�Ʊ�
            component: function(resovle) {require(['./view/orderManagement/orderVct.vue'], resovle)},
            name:'orderVct'
        },
        "/orderManagement/orderFileList": {//����ļ��嵥
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
       /* if (transition.to.auth) {//��֤����
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
