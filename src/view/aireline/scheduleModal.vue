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
                                <label class="col-sm-4 control-label">航司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.airlineCompany" class="form-control" placeholder="航司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">始发地</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.departure" class="form-control" placeholder="始发地">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的地</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.destination" class="form-control" placeholder="目的地">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航班号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.flightNo" class="form-control" placeholder="航班号">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">起飞时刻</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="calendar.items.picker5.value" @click.stop="open($event,'picker5')" class="form-control" placeholder="起飞时刻">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">到达时刻</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="calendar.items.picker6.value" @click.stop="open($event,'picker6')" class="form-control" placeholder="到达时刻">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">机型</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.aircraftModel" class="form-control" placeholder="机型">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">班期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.schedule" class="form-control" placeholder="班期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">开始日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="calendar.items.picker3.value" @click.stop="open($event,'picker3')" class="form-control" placeholder="开始日期">
                                </div>
                            </div>
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
                            <div class="form-group">
                                <label class="col-sm-4 control-label">截止日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="calendar.items.picker4.value" @click.stop="open($event,'picker4')" class="form-control" placeholder="截止日期">
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
                        picker5:{
                            type:"datetime",
                            value:"",
                            sep:"-"
                        },
                        picker6:{
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
        props:['scheduleInfo'],
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
                this.scheduleInfo.startTime=this.calendar.items.picker3.value;
                this.scheduleInfo.endTime=this.calendar.items.picker4.value;
                this.scheduleInfo.departureTime=this.calendar.items.picker5.value;
                this.scheduleInfo.arrivalTime=this.calendar.items.picker6.value;
                this.$dispatch('update', this.scheduleInfo)
            },
            submit:function(){
                this.scheduleInfo.startTime=this.calendar.items.picker3.value;
                this.scheduleInfo.endTime=this.calendar.items.picker4.value;
                this.scheduleInfo.departureTime=this.calendar.items.picker5.value;
                this.scheduleInfo.arrivalTime=this.calendar.items.picker6.value;
                this.$dispatch('submit', this.scheduleInfo)
            }
        },
        ready:function(){
            this.calendar.items.picker3.value=this.scheduleInfo.startTime;
            this.calendar.items.picker4.value=this.scheduleInfo.endTime;
            this.calendar.items.picker5.value=this.scheduleInfo.departureTime;
            this.calendar.items.picker6.value=this.scheduleInfo.arrivalTime;

            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.scheduleInfo) {
                    _this.scheduleInfo[sProp]='';
                }
                _this.calendar.items.picker3.value='';
                _this.calendar.items.picker4.value='';
                _this.calendar.items.picker5.value='';
                _this.calendar.items.picker6.value='';
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>