<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addUserForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加用户</h4>
                </div>
                <div class="modal-body">

                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="jobNumber" class="col-sm-2 control-label">工号</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.jobNumber" class="form-control" id="jobNumber" placeholder="工号">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="userName" class="col-sm-2 control-label">用户名</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.userName" class="form-control" id="userName" placeholder="用户名">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">性别</label>
                            <div class="col-sm-10">
                                <select v-model="userInfo.gender" class="form-control">
                                    <option value="1">男</option>
                                    <option value="2">女</option>
                                    <option value="0">未知</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-2 control-label">邮箱</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.email" class="form-control" id="email" placeholder="邮箱">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="mobile" class="col-sm-2 control-label">手机</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.mobile" class="form-control" id="mobile" placeholder="手机">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="tel" class="col-sm-2 control-label">固话</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="userInfo.tel" class="form-control" id="tel" placeholder="固话">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">生日</label>
                            <div class="col-sm-10">
                                <input type="text" v-model="calendar.items.picker1.value" @click.stop="open($event,'picker1')" class="form-control" placeholder="生日">

                            </div>

                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">部门</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="userInfo.department">
                                    <option v-for="option in departments" v-bind:value="option.departmentKey">
                                        {{ option.departmentName }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">角色</label>
                            <div class="col-sm-10">
                                <select class="form-control" v-model="userInfo.roleName">
                                    <option v-for="option in roles" v-bind:value="option.roleKey">
                                        {{ option.roleName }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-2 control-label">状态</label>
                            <div class="col-sm-10">
                                <label class="radio-inline">
                                    <input type="radio" value="0" v-model="userInfo.state"> 可用
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="2" v-model="userInfo.state"> 禁用
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="3" v-model="userInfo.state"> 已删除
                                </label>
                            </div>
                        </div>

                    </form>

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
                departmentKey:'',
                roleKey:'',
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
                            begin:"1970-08-20",
                            end:"2022-08-25",
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
                        // 日期时间模式
                        picker4:{
                            type:"time",
                            value:""
                        }
                    }
                }
            }
        },
        components:{calendar},
        props:['departments','roles','userInfo'],
        watch:{
            'calendar.value': function (value) {
                this.calendar.items[this.calendar.picker].value=value
            }
        },
        methods: {
            open:function(e,type){
                this.calendar.picker=type
                this.calendar.type=this.calendar.items[type].type;
                this.calendar.range=this.calendar.items[type].range;
                this.calendar.begin=this.calendar.items[type].begin;
                this.calendar.end=this.calendar.items[type].end;
                this.calendar.value=this.calendar.items[type].value;
                // 可不用写
                this.calendar.sep=this.calendar.items[type].sep;
                this.calendar.weeks=this.calendar.items[type].weeks;
                this.calendar.months=this.calendar.items[type].months;

                this.calendar.show=true;
                this.calendar.x=e.target.offsetLeft;
                this.calendar.y=e.target.offsetTop+e.target.offsetHeight+8
            },
            submit: function (event) {
                this.$dispatch('submit', this.userInfo)
            },
            update:function(data){
                this.$dispatch('update', this.userInfo)
            }
        },
        ready:function(){
            this.departmentKey=this.userInfo.departmentKey;
            this.roleKey=this.userInfo.roleKey;
            this.calendar.items.picker1.value=this.userInfo.birthday;
            console.log(this.departmentKey)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.userInfo) {
                    _this.userInfo[sProp]='';
                }
                _this.calendar.items.picker1.value='';
                $("#btm-submit").show()
                $("#btm-update").hide()
            })
            //console.log('roles',JSON.stringify(this.roles))

        }

    }
</script>