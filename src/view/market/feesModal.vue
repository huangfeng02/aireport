<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">新增录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">分类</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="feesInfo.category"> 按板块
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="feesInfo.category"> 按目的港
                                    </label>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航空公司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航线</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.airline" class="form-control" placeholder="航线">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.destination" class="form-control" placeholder="目的港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="feesInfo.fuelWay"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="feesInfo.fuelWay"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油附加费单价</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.fuelPrice" class="form-control" placeholder="燃油附加费单价">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.minFuelCharge" class="form-control" placeholder="燃油最低收费">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="feesInfo.securityWay"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="feesInfo.securityWay"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险计费单价</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.securityPrice" class="form-control" placeholder="战险计费单价">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.minSecurityCharge" class="form-control" placeholder="战险最低收费">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">信息处理费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.infoPrice" class="form-control" placeholder="infoPrice">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">信息处理最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.minInfoCharge" class="form-control" placeholder="信息处理最低收费">
                                </div>
                            </div>

                          <!--  <div class="form-group">
                                <label class="col-sm-4 control-label">生效日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.effectiveDate" class="form-control" placeholder="生效日期">
                                </div>
                            </div>
-->
                            <div class="form-group">
                                <label class="col-sm-4 control-label">生效日期</label>
                                <div class="col-sm-8">
                                    <calendar
                                            :show.sync="calendar.show"
                                            :type="calendar.type"
                                            :value.sync="calendar.value"
                                            :x="calendar.x"
                                            :y="calendar.y"
                                            :begin.sync="calendar.begin"
                                            :end.sync="calendar.end"
                                            :range.sync="calendar.range"
                                            :weeks="calendar.weeks"
                                            :months="calendar.months"
                                            :sep.sync="calendar.sep">

                                    </calendar>
                                    <input type="text" v-model="calendar.items.picker4.value" @click.stop="open($event,'picker4')" class="form-control" placeholder="生效日期">
                                </div>
                            </div>

                        </form>
                    </validator>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="submit" id="btm-submit" class="btn btn-primary">提交</button>
                    <button style="display: none;" type="button" id="btm-update" @click="update" class="btn btn-primary">修改</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

    import calendar from "../../components/calendar.vue"

    export default {
        data:function(){
            return{
                calendar:{
                    show:false,
                    x:0,
                    y:0,
                    picker:"",
                    type:"date",
                    value:"",
                    begin:"",
                    end:"",
                    sep:"/",
                    weeks:[],
                    months:[],
                    range:false,
                    items:{
                        // 单选模式
                        picker1:{
                            type:"date",
                            begin:"2016-08-20",
                            end:"2016-08-25",
                            value:"2016-08-21",
                            sep:"-",
                            weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        },
                        // 2个日期模式
                        picker2:{
                            type:"date",
                            value:"",
                            range:true,
                            sep:"."
                        },
                        // 日期时间模式
                        picker3:{
                            type:"datetime",
                            value:"",
                            sep:"-"
                        },
                        picker4:{
                            type:"datetime",
                            value:"",
                            sep:"-"
                        },
                        // 日期时间模式
                        picker7:{
                            type:"time",
                            value:""
                        }
                    }
                }
            }
        },
        components:{
            calendar
        },
        watch:{
            'calendar.value': function (value) {
                this.calendar.items[this.calendar.picker].value=value
            }
        },
        props:['feesInfo'],
        methods:{
            open:function(e,type){
                this.calendar.picker=type
                this.calendar.type=this.calendar.items[type].type
                this.calendar.range=this.calendar.items[type].range
                this.calendar.begin=this.calendar.items[type].begin
                this.calendar.end=this.calendar.items[type].end
                this.calendar.value=this.calendar.items[type].value
                // 可不用写
                this.calendar.sep=this.calendar.items[type].sep
                this.calendar.weeks=this.calendar.items[type].weeks
                this.calendar.months=this.calendar.items[type].months

                this.calendar.show=true
                this.calendar.x=e.target.offsetLeft
                this.calendar.y=e.target.offsetTop+e.target.offsetHeight+8
            },
            update:function(){
                this.feesInfo.effectiveDate=this.calendar.items.picker4.value;
                this.$dispatch('update', this.scheduleInfo)
            },
            submit:function(){
                this.feesInfo.effectiveDate=this.calendar.items.picker4.value;
                this.$dispatch('submit', this.scheduleInfo)
            }
        },
        ready:function(){
            this.calendar.items.picker4.value=this.priceInfo.effectiveDate;

            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.feesInfo) {
                    _this.feesInfo[sProp]='';
                }
                _this.calendar.items.picker4.value='';
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>