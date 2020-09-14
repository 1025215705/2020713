<template>
    <div class="page recruitSetting">
        <!-- 头部 -->
        <!-- <v-header :navbar-active="nba" :role="'ebterprise'"></v-header> -->

        <!-- 内容区域 -->
        <div class="page-content page-width">
            <div class="content-inner">
                <el-tabs :tab-position="'left'" @tab-click="handleClick">
                    <el-tab-pane label="人事信息">
                        <div class="hr-info">
                            <el-row>
                                <el-col :span="12">
                                    <el-form ref="form" :model="form" :rules="personnelRules" label-width="80px">
                                        <el-form-item label="头像">
                                            <!-- <div class="logo-wrapper cf" v-if="form.avatar!=null && form.avatar!=''">
                                                <img :src="getFileServerRootUrlData+form.avatar" />
                                            </div> -->
                                            <div class="logo-wrapper cf">
                                                    <v-logo :action="logoAction" 
                                                        :imageUrl="imageUrl"
                                                        :allowedFileExtensions="logoAllowedFileExtensions" 
                                                        :logoSize="logoSize" 
                                                        :logoSizeTip="logoSizeTip"
                                                        :logoRootUrl="logoRootUrl"
                                                        @change="logoCoverData" ref="imgUrl">
                                                    </v-logo>
                                                    <!-- <img v-if="form.avatar != '' && form.avatar != null" :src="form.avatar" alt=""/>
                                                    <img v-else :src="require('@/assets/img/defaultImg_type.jpg')" alt="" />
                                                    <label class="upload-file" @click="$refs.uploadLogo.open()"></label> -->
                                                <div class="upload-img-des fl">
                                                    <p>支持jpg、jpeg、gif、png图片文件</p>
                                                    <p>图片大小需小于10MB</p>
                                                </div>
                                            </div>
                                        </el-form-item>
                                        <el-form-item prop="name" label="姓名">
                                            <el-input v-model="form.name" placeholder="请填写你的常用名"></el-input>
                                            <div class="input-tips">*用于向求职者展示</div>
                                        </el-form-item>

                                        <el-form-item label="称呼">
                                            <el-input v-model="form.nickName" placeholder="请填写你的称呼"></el-input>
                                        </el-form-item>

                                        <el-form-item label="职位">
                                            <el-input v-model="form.position" placeholder="请填写你的职位"></el-input>
                                        </el-form-item>

                                        <el-form-item label="部门">
                                            <el-input v-model="form.office" placeholder="请填写你的部门"></el-input>
                                        </el-form-item>

                                        <el-form-item prop="mobile" label="手机">
                                            <el-input v-model="form.mobile" placeholder="手机号，不会公布给候选人"></el-input>
                                            <div class="input-tips">*用于接收招聘类通知短信</div>
                                        </el-form-item>
                                        <el-form-item prop="email" label="邮箱">
                                            <el-input v-model="form.email" placeholder="该邮箱用于接收简历"></el-input>
                                            <div class="input-tips phone-dis">*用于接收简历</div>
                                        </el-form-item>
                                        <el-form-item prop="smsOpen" label="短信">
                                            <el-switch
                                                v-model="form.smsOpen"
                                                :active-value=1
                                                :inactive-value=0
                                                active-color="#13ce66"
                                                inactive-color="#ff4949">
                                            </el-switch>
                                        </el-form-item>
                                    </el-form>

                                    <el-row class="save-btn">
                                        <el-button type="primary" @click="saveHrData">保存</el-button>
                                        <el-button @click="returnRecruit">返回</el-button>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="面试信息">
                        <div class="interview-template">
                            <el-row class="top-add-wrapper">
                                <a href="#" @click="addInterview">
                                    <i class="el-icon-plus add-icon"></i>
                                    <span class="txt">新增面试信息</span>
                                </a>
                            </el-row>
                            <el-row class="interview-info-list">
                                <el-col class="main-resume-info" :span="18">
                                    <div class="resume-wrapper">   
                                        <!-- 面试信息 -->
                                        <div class="project-experience resume-block">
                                            <!-- <div class="resume-title operation-hover">
                                                <h4>面试信息</h4>
                                                <div class="operation-btns">
                                                    <div class="add-btn operation-btn" @click="$refs.interviewTemplatePopup.open()">
                                                        <i class="icon iconfont icontianjia"></i>
                                                        <button class="text" type="button">添加</button>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="project-list">
                                                    <div class="project-item" v-for="item in interviewTemplateList" :key="item.id">
                                                        <div class="project-name-time operation-hover cf">
                                                            <h4 class="name">{{item.contact}}</h4>

                                                            <div class="operation-btns">
                                                                <div class="editor-btn operation-btn" @click="saveInterviewTemplate('edit',item)">
                                                                    <i class="icon iconfont iconedit"></i>
                                                                    <button class="text" type="button">编辑</button>
                                                                </div>
                                                                <div class="del-btn operation-btn" @click="saveInterviewTemplate('delete',item)">
                                                                    <i class="icon iconfont iconiconfontshanchu4"></i>
                                                                    <button class="text" type="button">删除</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="project-content-desc paragraph">
                                                            {{item.projectContent}}
                                                        </div>
                                                        <div class="project-address">
                                                            <h6>联系人：</h6>
                                                            <a href="javascript:;">{{item.contact}}</a>
                                                        </div>
                                                        <div class="project-address">
                                                            <h6>面试地点：</h6>
                                                            <a href="javascript:;">{{item.address}}</a>
                                                        </div>
                                                        <div class="project-address">
                                                            <h6>联系电话：</h6>
                                                            <a href="javascript:;">{{item.phone}}</a>
                                                        </div>
                                                        <div class="project-address">
                                                            <h6>备注信息：</h6>
                                                            <a href="javascript:;" v-html="item.content"></a>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="survey" label="企业调查问卷" >
                        <!-- 问卷列表 -->
                        <div v-show="!disableSurvey">
                            <el-table class="content-table" :data="surveyList" @row-click="clickSurvey">

                                <el-table-column label="发布院校" min-width="70">
                                    <template slot-scope="scope">
                                        <p>{{ scope.row.schoolName }}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="问卷名称" min-width="250">
                                    <template slot-scope="scope">
                                        <p>{{ scope.row.title }}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="发布时间"  width="100">
                                    <template slot-scope="scope">
                                        <p>{{ scope.row.createTime }}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column label="状态"  :formatter="statusFmt" min-width="60">
                                </el-table-column>
                            </el-table>
                            <el-pagination class="paging"
                                :total="surveyTotal"
                                layout="total, sizes, prev, pager, next, jumper"
                                :current-page.sync="surveyQuery.page"
                                :page-size="surveyQuery.pageSize"
                                @current-change="surveyPageChange"
                                @size-change="surveryPageSizeChange"
                            />
                        </div>
                        <!-- 问卷页面 -->
                        <div class="survey-info" v-show="disableSurvey">
                            <el-page-header @back="surveyBack"></el-page-header>
                            <el-row>
                                <el-col>
                                    <div class="head-title">
                                        <div class="top">
                                            <p>{{surveyData.schoolName}}</p>
                                            <p>{{surveyData.title}}</p>
                                        </div>
                                        <div class="info">
                                            <p>尊敬的来宾： </p>
                                            <p>{{surveyData.preface}}</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <el-form ref="surveyForm" >
                                        <div class="base-info">
                                            <p class="title">企业基本信息</p>
                                            <el-row>
                                                <el-col :span="12" v-for="(item,index) in surveyData.question.info" :key="index">
                                                    <el-form-item v-if="item.type=='input'">{{item.title}}
                                                        <el-input v-model="item.answer" placeholder="请输入内容"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                            <p class="title">问卷题目</p>
                                            <el-row>
                                                <el-col :span="item.col" v-for="(item,index) in surveyData.question.question" :key="index">
                                                <!-- 单选处理 -->
                                                    <el-form-item v-if="item.type=='radio'">
                                                        <div>{{item.title}}（单选）</div>
                                                        <el-radio-group v-model="saveRadio[index]" @change="changeRadioEvent($event,index)">
                                                            <el-radio v-for="(value,index) in item.choose" :key="value.qid" v-model="value.selected" :label="value.title"></el-radio>
                                                            <el-radio v-if="item.other" label="其他">其他
                                                                <el-input v-model="item.otherData"></el-input>
                                                            </el-radio>
                                                        </el-radio-group>
                                                    </el-form-item>
                                                <!-- 多选处理 -->
                                                    <el-form-item v-if="item.type=='checkbox'" >
                                                        <div>{{item.title}}（多选）</div>
                                                            <el-checkbox v-for="(value,chooseIndex) in item.choose" :key="chooseIndex" :label="value.title" @change="changeCheckboxEvent($event,index,chooseIndex)"></el-checkbox>
                                                            <el-checkbox  v-if="item.other" label="其他" @change="changeCheckboxEvent($event,index,-1)">其他
                                                                <el-input v-model="item.answer" ></el-input>
                                                            </el-checkbox>
                                                    </el-form-item>
                                                <!-- 多行输入处理 -->
                                                    <el-form-item v-if="item.type=='textarea' || item.type=='input'">
                                                        <div>{{item.title}}</div>
                                                        <el-input type="textarea" :rows="3" v-model="item.answer"> </el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-row>
                                        </div>
                                        </el-form>
                                    </div>
                                    <el-row class="save-btn">
                                        <el-button type="primary" @click="saveSurvery">提交</el-button>
                                        <el-button @click="surveyBack">返回</el-button>
                                    </el-row>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <!-- 尾部 -->
        <v-footer></v-footer>

         <!-- 面试信息 - 新增 -->
        <v-popup ref="addInterviewTemplatePopup" :is-disable-close="true" @before:close="addPopupCloseBefore()" class="popup-wrapper interviewTemplatePopup">
            <div class="pop-title">
                <h4>面试信息</h4>
            </div>
            <div class="pop-content">
                <el-form :model="addInterviewTemplate" :rules="rules" ref="addInterviewTemplateForm" class="ctrl-list">
                    <el-form-item class="ctrl-item" prop="contact">
                        <p class="title">联系人</p>
                        <div class="ctrl">
                            <el-input type="text" v-model="addInterviewTemplate.contact" placeholder="请输入联系人"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item class="ctrl-item" prop="address">
                        <p class="title">面试地点</p>
                        <div class="ctrl">
                            <el-input type="text" v-model="addInterviewTemplate.address" placeholder="请输入面试地点"></el-input>
                        </div>
                    </el-form-item>
                   
                    <el-form-item class="ctrl-item" prop="phone">
                        <p class="title">联系电话</p>
                        <div class="ctrl">
                            <el-input type="text" placeholder="请填写联系电话" v-model="addInterviewTemplate.phone" ></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item class="ctrl-item" prop="content">
                        <p class="title">备注信息</p>
                        <div class="ctrl">
                            <el-input type="textarea" placeholder="请输入内容" v-model="addInterviewTemplate.content" maxlength="200" show-word-limit></el-input>
                        </div>
                    </el-form-item>
                </el-form>
                <div class="submit-btns">
                    <el-button @click="saveInterviewTemplate('add')" :loading="loadingbut" :disabled="isDisabled">{{loadingbuttext}}</el-button>
                </div>
            </div>
        </v-popup>


        <!-- 面试信息 - 修改 -->
        <v-popup ref="interviewTemplatePopup" :is-disable-close="true" @before:close="popupCloseBefore()" class="popup-wrapper interviewTemplatePopup">
            <div class="pop-title">
                <h4>面试信息</h4>
            </div>
            <div class="pop-content">
                <el-form :model="interviewTemplate" :rules="rules" ref="interviewTemplateForm" class="ctrl-list">
                    <el-form-item class="ctrl-item" prop="contact">
                        <p class="title">联系人</p>
                        <div class="ctrl">
                            <el-input type="text" v-model="interviewTemplate.contact" placeholder="请输入联系人"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item class="ctrl-item" prop="address">
                        <p class="title">面试地点</p>
                        <div class="ctrl">
                            <el-input type="text" v-model="interviewTemplate.address" placeholder="请输入面试地点"></el-input>
                        </div>
                    </el-form-item>
                   
                    <el-form-item class="ctrl-item" prop="phone">
                        <p class="title">联系电话</p>
                        <div class="ctrl">
                            <el-input type="text" placeholder="请填写联系电话" v-model="interviewTemplate.phone" ></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item class="ctrl-item" prop="content">
                        <p class="title">备注信息</p>
                        <div class="ctrl">
                            <el-input type="textarea" placeholder="请输入内容" v-model="interviewTemplate.content" maxlength="200" show-word-limit></el-input>
                        </div>
                    </el-form-item>
                </el-form>
                <div class="submit-btns">
                    <el-button  @click="saveInterviewTemplate('update',interviewTemplate)" :loading="loadingbut" :disabled="isDisabled">{{loadingbuttext}}</el-button>
                </div>
            </div>
        </v-popup>
    </div>
</template>

<script>
import store from '@/store';
import recruitServise from '@/api/enterprise/recruit/servise'
import interviewTemplateServise from '@/api/enterprise/interviewTemplate/servise';
import surveyService from '@/api/enterprise/Questionnaire/servise';
import { formatTimeToStr } from "@/utils/formatDate";
import { getSchoolList , jobseekerCreate , getDeptList ,
         getListByDeptAndGrade , getListByDeptAndGradeSpeciality } from '@/api/user';
import formRules from '@/utils/formRules';

export default {
    name: 'recruitSetting',
    components: {},
    data() {
        /** 名称 */
        const validateName = (rule, value, callback) => {
            if (value==undefined) {
                callback(new Error("姓名不能为空"));
            }else if(value.length <= 0){
            	callback(new Error('姓名不能为空'));
            }else {
                callback();
            }
        };
        /** 手机 */
        const validateMobile = (rule, value, callback) => {
            if(value.length <= 0){
                callback(new Error("手机号码不能为空"));
            }else if(this.vPhone(value)){
            	callback(new Error('手机号码格式不正确'));
            }else {
                callback();
            }
        };
        /** 邮箱 */
        const validateEmail = (rule, value, callback) => {
            if (value.length <= 0) {
                callback(new Error("邮箱不能为空"));
            } else if (this.vEmail(value)) {
                callback(new Error("请输入有效邮箱"));
            }else {
                callback();
            }
        };
        return {
            //企业ID
            companyId: '',
            form: {
                id: '',//主键
                name: '', // 姓名
                nickName: '', //称呼
                position: '', // 职位
                office: '', // 部门
                mobile: '', // 手机
                email: '', // 邮箱
                companyId: '',// 公司ID,
                avatar: '',
                smsOpen:'0', //短信开关
            },
            personnelRules: {
                /** 姓名 */
                name: [{required: true,trigger: 'blur', message:'姓名不能为空'}],
                /** 手机 */
                mobile: [{required: true,trigger: 'blur', message:'手机不能为空'}],
                /** 邮箱 */
                email: [{required: true,trigger: 'blur', message:'邮箱不能为空'}] 
            },
            /** logo上传地址 */
            logoAction: '/api/files/base/upload',
            /** 允许上传的文件大小(默认：2048） */
            logoSize:2048,
            /** 上传的文件大小（用于提示语,默认：2MB） */
            logoSizeTip:'2MB',
            /** 允许上传的文件类型（文件后缀名: 'xls/png/jpg/..'） */
            logoAllowedFileExtensions:["png,jpg,gif,jpeg"],
            /** fastdfs路径前缀 */
            logoRootUrl: this.$store.getters.fileServerRootUrl,
            interviewForm: {
                // 新增联系人
                name: '', //联系人
                address: '', // 面试地点
                phone: '', // 联系电话电话
                desc: '' // 备注信息
            },
            interviewRules: {
                name: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
                address: [{ required: true, message: '请输入地址', trigger: 'blur' }]
            },
            avatarActive: false,
            imageUrl: '', // 头像路径
            /** 面试信息 */
            editorOption: {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ header: 1 }, { header: 2 }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ indent: '-1' }, { indent: '+1' }]
                    ]
                },
                placeholder: '请输入内容'
            },
            rules: {
                contact: [
                    { required: true, message: '请输入联系人', trigger: 'blur' }
                ],
                address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
                phone: [{ required: true, message: '请输入正确的电话', trigger: 'blur' ,min:7, max:11 }]
            },
            // 面试模板
            interviewTemplate: this.getInitData(),
            addInterviewTemplate: {
                contact: '',
                address: '',
                phone: '',
                content: '',
            },
            interviewTemplateList:[],
            // 避免重复提交  -- //审核提交加载中
            loadingbut:false,
            // 提示语
            loadingbuttext: '保存',
            // 禁用
            isDisabled: false,
            /** 栏目选中，变背景色 */
            nba: 0,
            /** 问卷数据 */
            surveyForm:{
                id:'',
                list:[],
                radio:''
            },
            /** 问卷列表数据 */
            surveyList:[
                {
                id:'',
                school:'',
                surveyName:'',
                createTime:'',
                status:0
                }
            ],
            /** 问卷数据 */
            surveyData:this.getInitSurveyData(),
            

            //调查列表分页条件
            surveyTotal:0,
            surveyQuery:{
                pageSize:10,
                page:1
            },

            //保存调查发送数据
            surveyPostData:{
                questionnaireId:null,
                questionAnswer:null,
            },
            disableSurvey:false, //问卷显示
            /** 学校 */
            schoolOption: {
                id:null,
                schoolName:null
            },
            saveRadio:[''],
        }
    },
    mounted() {
        this.quickNavHandel();
        // this.scrollHandel()
    },
    created(){
        this.rest()
        this.companyId = this.$store.getters.businessId
        this.regStuSchoolList();    //获取学校
        this.getCompanyHr();
        this.getList();
        this.getSurveyList();
        /** 选中默认背景色 */
        this.$store.dispatch('user/checkChannelAction',"招聘设置").then((response) => {this.nba = response});
    },
    computed: {
        getImageData(){
            var fileUrl = "";
            if(this.form.avatar!=null && this.form.avatar!=""){
                fileUrl = this.$store.getters.fileServerRootUrl + this.imageUrl;
            }
            return fileUrl;
        }
    },
    methods: {
        /** 获取学校 */
        regStuSchoolList(){
            getSchoolList()
                 .then(response => {
                if(response.status==200){
                    this.schoolOption = response.data;
                    let map = new Map();
                    this.schoolOption.forEach(item =>{
                        map.set(item.id,item.schoolName)
                    })
                    this.schoolOption = map
                }else{
                    console.log("获取学校失败")
                }
            });
        },
        /**调查问卷方法 */
        //问卷状态
        statusFmt(row, column){
            if(row.status == 0){
                return "未填写";
            }else{
                return "已填写";
            }
        },
        //面板点击事件
        handleClick(tab,event){
            if(tab.name=='survey'){
                this.surveyBack()
            }
            return
        },
        //点击列表事件
        clickSurvey(row){
            let nd = formatTimeToStr(new Date().getTime(), "yyyy-MM-dd");
            let ed = formatTimeToStr(new Date(row.endTime).getTime(), "yyyy-MM-dd");
            let sd = formatTimeToStr(new Date(row.startTime).getTime(), "yyyy-MM-dd");
            if(ed < nd){
                //已截止
                this.$message({
                    message: '该表单已截止填表！',
                    type: 'warning'
                });
            }else if(nd < sd){
                //未开始
                this.$message({
                    message: '该表单未开启！',
                    type: 'warning'
                });
            }else {
                if(row.status==0){
                    this.getSurvey(row.id)
                    this.disableSurvey = true
                }else{
                    this.$message({
                        message: '表单已填写！',
                        type: 'success'
                    });
                }
            }
            return
            
        },
        //获取问卷列表
        async getSurveyList(){
            await surveyService.getPageList(this.surveyQuery)
				.then(response => {
					if(response.status == 200) {
                        // this.resetData();
                        this.surveyList = response.data;
                        this.surveyTotal = response.total;
                        //处理surveyList
                        this.surveyList.forEach(item => {
                            item.schoolName = this.schoolOption.get(item.schoolId)
                        })
                        
                    } else {
                        this.$message({
                            message: "获取问卷列表失败",
                            type: 'error'
                        });
                    }
				})
        },
        //获取问卷
        async getSurvey(id){
            await surveyService.getQuestionnaireById(id)
				.then(response => {
					if(response.status == 200) {
                        this.resetData();
                        this.surveyData = response.data;
                        // this.$set(this,"surveyData",response.data)
                        this.surveyData.schoolName = this.schoolOption.get(this.surveyData.schoolId)
                        this.surveyData.question = JSON.parse(this.surveyData.question)
                        console.log("==========this.surveyData new",this.surveyData)
                    } else {
                        this.$message({
                            message: "获取问卷失败",
                            type: 'error'
                        });
                    }
				})
        },

        //校验表单数据、传入question、
        checkSurveyData(data){
            if(typeof data == 'undefined' || data == null || data == '' || data.length == 0) return false
            //遍历info中的answer != ''
            for(let i = 0; i < data.info.length; i++){
                let e = data.info[i]
                if(e.answer == '') {
                    console.log("====未填写：",e.title)
                    return false
                }
            }
            //遍历question
            for(let i = 0; i < data.question.length; i++){
                let e = data.question[i]
                if(e.answer == '' && e.type == 'input') {
                    //填空题
                    console.log("====未填写：",e.title)
                    return false
                }
                if(e.type == 'radio' || e.type == 'checkbox'){
                    let flag = false 
                    for(let j = 0; j < e.choose.length; j++){
                        let c = e.choose[j]
                        if(c.selected == true) {
                            flag = true
                        }
                    }
                    if(flag == false && e.chooseOther == false){
                        console.log("====未填写：",e.title)
                        return false
                    }
                }
            }
            return true
        },
        saveSurvery(){
            //校验surveyData
            this.$confirm('确定提交表单信息?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                //校验题目有没有写
                if(this.checkSurveyData(this.surveyData.question)==false){
                    this.$message({
                        message: "请填写完整再提交",
                        type: 'error'
                    });
                    return
                }
                let param = null
                param = {
                    questionnaireId:this.surveyData.id,
                    questionAnswer:JSON.stringify(this.surveyData.question)
                }
                surveyService.saveAnswer(param).then(response =>{
                    if (response.status == 200) {
                        this.successMessage('提交成功!')
                        this.surveyBack()
                    }else {
                        this.$message({
                            message: response.message,
                            type: 'error'
                        });
                    }
                })
            })
        },
        //单选按钮事件
        changeRadioEvent(e,index){
            console.log("====e:",e,index)
            this.surveyData.question.question[index].chooseOther = !this.surveyData.question.question[index].chooseOther

            for(let i = 0; i < this.surveyData.question.question[index].choose.length; i++){
                let choose = this.surveyData.question.question[index].choose[i]
                if(e == choose.title){
                    choose.selected = !choose.selected
                }
                else {
                    choose.selected = false
                }
            }
            console.log("====choose:",this.surveyData.question.question[index])
        },
        changeCheckboxEvent(e,index,chooseIndex){
            if(chooseIndex != -1){
                this.surveyData.question.question[index].choose[chooseIndex].selected = e
            }else{
                this.surveyData.question.question[index].chooseOther = e
            }
            console.log("====choose:",this.surveyData.question.question[index])
        },
        //切换列表
        surveyPageChange(val){
            this.surveyQuery.page = val
            this.getSurveyList()
        },
        //更改列表页面数量
        surveryPageSizeChange(val){
            this.surveyQuery.pageSize = val
            this.getSurveyList()
        },
        //问卷返回按钮
        surveyBack(){

            this.disableSurvey = false
            this.getSurveyList() //刷新列表
            this.surveyData = this.getInitSurveyData()
            this.$forceUpdate() 
        },
        getInitSurveyData(){
            return {
                id: null,           //调查问卷id
                title:null,         //标题
                preface: null,      //前言
                schoolId: null,     //所属学校id
                schoolName:null,    //学校名字
                startTime: null,    //填写开始时间
                endTime: null,      //填写结束时间
                createTime: null,     //创建时间
                question:{
                    question:null,
                    info:null
                }
            }
        },
        rest(){
            this.form.id = ''
            this.form.name = ''
            this.form.nickName = ''
            this.form.position = ''
            this.form.office = ''
            this.form.mobile = ''
            this.form.email = ''
            this.form.companyId = ''
            this.form.avatar = ''
            this.form.smsOpen = ''
        },
        //获取企业hr信息
        getCompanyHr(){
            recruitServise.getCompanyHr(this.companyId).then(response => {
                if(response.data!== undefined || response.data!== null || response.data.length>0){
                    this.form = response.data
                    
                    console.log("====result:",this.form)
                    if(this.form.avatar!=null && this.form.avatar!=""){
                        this.$refs.imgUrl.logoUrl = this.$store.getters.fileServerRootUrl+this.form.avatar;
                    }
                }else{
                    this.form.id = ''
                }
            });
        },
        saveHrData(){
            // console.log(this.form.id == '')
            console.log("====param:",this.form)
            if(this.form.id == '' || this.form.id == null || this.form.id == 'undefined'){//保存
                this.$refs["form"].validate((valid) => {
                    if (valid) {
                        this.$confirm('是否保存hr信息?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.form.companyId = this.companyId
                            recruitServise.createHrData(this.form).then(response => {
                                if (response.status == 200) {
                                    this.successMessage('创建成功!')
                                    this.$router.push({ path: '/recruit' })
                                }
                            });
                        })
                    }
                })  
            }else{//修改
                this.$refs["form"].validate((valid) => {
                    if (valid) {
                        this.$confirm('是否修改hr信息?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                        }).then(() => {
                            this.form.companyId = this.companyId
                            recruitServise.updateHrData(this.form).then(response => {
                                if (response.status == 200) {
                                    this.successMessage('修改成功!')
                                    this.$router.push({ path: '/recruit' })
                                }
                            });
                        })
                    }
                })
                
            }
        },
        returnRecruit() {
            this.$router.push({ path: '/recruit' })
        },
        /** 图标logo */
        logoCoverData(imgUrl){
            console.log("回传的logo地址为：{"+imgUrl+"}")
            this.form.avatar = imgUrl;
            if(imgUrl){
               this.imgUrl = this.$store.getters.fileServerRootUrl+imgUrl;
            }else{
               this.imgUrl = imgUrl;
            }
        },
        // 处理 快速导航到简历某块
        quickNavHandel() {
            let resumeContent = $('.resumeEditor .resume-wrapper .resume-block')
            $('.resumeEditor .resume-quick-nav .quick-nav-item').on('click', function(e) {
                $(this)
                    .siblings('.quick-nav-item')
                    .removeClass('active')
                $(this).addClass('active')
                $('.resumeEditor').animate(
                    {
                       // scrollTop: resumeContent.eq($(this).index()).offset().top + $('.resumeEditor').scrollTop()
                    },
                    300
                )
            })
        },
        // 处理滚动事件 滚动到一定的距离固定左边侧边栏
        scrollHandel() {
            let offsetTop = $('.resumeEditor .resume-fixed-block').offset().top
            let resumeW = $('.resumeEditor .resume-fixed-block').width()
            $('.resumeEditor').on('scroll', function(e) {
                if ($('.resumeEditor').scrollTop() >= offsetTop && !$('.resumeEditor .resume-fixed-block').hasClass('resume-fixed-active')) {
                    $('.resumeEditor .resume-fixed-block').addClass('resume-fixed-active')
                    $('.resumeEditor .resume-fixed-block').css('width', `${resumeW}px`)
                } else if ($('.resumeEditor').scrollTop() < offsetTop && $('.resumeEditor .resume-fixed-block').hasClass('resume-fixed-active')) {
                    $('.resumeEditor .resume-fixed-block').css('width', 'auto')
                    $('.resumeEditor .resume-fixed-block').removeClass('resume-fixed-active')
                }
            })
        },
        // 修改- 关闭弹框的提示
        popupCloseBefore() {
            this.$confirm('离开修改内容将不会保存', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$refs.interviewTemplatePopup.close()
                    //this.resetData(false);
                })
                .catch(() => {})
        },
        // 新增- 关闭弹框的提示
        addPopupCloseBefore() {
            this.$confirm('离开修改内容将不会保存', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.addClearInterview();
                    this.$refs.addInterviewTemplatePopup.close()
                })
                .catch(() => {})
        },
        /** 修改 */
        onEditorChange({ quill, html, text }) {
            this.interviewTemplate.content = html
        },
        /** 新增 */
        addOnEditorChange({ quill, html, text }) {
            this.addInterviewTemplate.content = html
        },
        resetData() {  
            this.surveyData = this.getInitSurveyData()
            this.interviewTemplate = this.getInitData();
            this.interviewTemplateList = [];
				// if(this.$refs.form) {
				// 	this.$refs.form.clearValidate();
				// }
		},
        getInitData() {
            return {
                id: null,
                contact: null,
                address: null,
                phone: null,
                content: null            										
            };
        },
        

        // 获取模板列表
        getList(){
            interviewTemplateServise.getList()
				.then(response => {
					if(response.status == 200) {
                        this.resetData();
                        this.interviewTemplateList = response.data;
                        console.log("interviewTemplateList=");
                        console.log(this.interviewTemplateList);

                    } else {
                        this.$message({
                            message: "获取简历信息失败",
                            type: 'error'
                        });
                    }
				})
        },
        // 获取模板列表-保存
        saveInterviewTemplate(type,data){

            if(type == 'add'){
                this.$refs['addInterviewTemplateForm'].validate((valid) => {
                    if (valid) {
                        /** 避免重复提交 - 生效 */
                        this.effectiveRepeadSubmit();
                        interviewTemplateServise.add(this.addInterviewTemplate)
                        .then(response => {
                            if(response.status == 200) {
                                this.resetData();
                                this.getList();
                                /** 避免重复提交 - 取消 */
                                this.rescindedRepeadSubmit();
                                // 关闭窗口
                                this.$refs.addInterviewTemplatePopup.close();
                                // 清空已填数据
                                this.addClearInterview();
                                this.successMessage("保存成功");
                            } else {
                                /** 避免重复提交 - 取消 */
                                this.rescindedRepeadSubmit();
                                this.errorMessage("保存失败");
                            }
                        })
                    } else {
                        return false;
                    }
                });
                
            }else if(type == 'delete'){
                this.$confirm('确定要删除吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(() => {
                    interviewTemplateServise.delete(data)
                      .then(response => {
                        if(response.status == 200) {
                            this.resetData();
                            this.getList();
                            this.successMessage("删除成功");
                        } else {
                            this.errorMessage("删除失败");
                        }
                    })
                }).catch(() => {})
            }
            else if(type == 'edit'){
                // 清空已填数据
                this.addClearInterview();
                this.interviewTemplate= data;
                this.$refs.interviewTemplatePopup.open();
            }else{
                this.$refs['interviewTemplateForm'].validate((valid) => {
                    if (valid) {
                        /** 避免重复提交 - 生效 */
                        this.effectiveRepeadSubmit();
                        interviewTemplateServise.update(data)
                        .then(response => {
                            if(response.status == 200) {
                                this.resetData();
                                this.getList();
                                this.$refs.interviewTemplatePopup.close();
                                /** 避免重复提交 - 取消 */
                                this.rescindedRepeadSubmit();
                                // 关闭窗口
                                this.$refs.interviewTemplatePopup.close();
                                this.successMessage("修改成功");
                            } else {
                                /** 避免重复提交 - 取消 */
                                this.rescindedRepeadSubmit();
                                this.errorMessage("修改失败");
                            }
                        })
                    } else {
                        return false;
                    }
                });
                
            }
        },
        addInterview(){
            this.addClearInterview();
            this.$refs.addInterviewTemplatePopup.open();
        },
        /** 清空数据 */
        clearInterview(){
            this.interviewTemplate.contact = '';
            this.interviewTemplate.address = '';
            this.interviewTemplate.phone = '';
            this.interviewTemplate.content = '';
        },
        /** 新增 - 清空数据 */
        addClearInterview(){
            this.addInterviewTemplate.contact = '';
            this.addInterviewTemplate.address = '';
            this.addInterviewTemplate.phone = '';
            this.addInterviewTemplate.content = '';
        },
        /** 避免重复提交 - 生效 */
        effectiveRepeadSubmit(){
            // 避免重复提交  -- //审核提交加载中
            this.loadingbut = true;
            // 提示语
            this.loadingbuttext =  "正在保存中";
            // 禁用
            this.isDisabled = true;
        },
        /** 避免重复提交 - 取消 */
        rescindedRepeadSubmit(){
            // 避免重复提交  -- //审核提交加载中
            this.loadingbut = false;
            // 提示语
            this.loadingbuttext =  "保存";
            // 禁用
            this.isDisabled = false;
        },
    }
}
</script>
<style >
.recruitSetting .el-tabs--left .el-tabs__item.is-left {font-size: 16px;min-width: 200px;text-align: center;}
.recruitSetting .el-form-item__label {color: @txtColor1;}
.recruitSetting .el-card__body {padding: 0;}
.recruitSetting .el-upload {width: 100px;height: 100px;}
.recruitSetting .avatar {width: 100%;height: 100%;}

.recruitSetting .el-tab-pane {min-height: 430px;padding-bottom: 40px}
.recruitSetting .content-inner {padding-top: 40px;font-size: 16px;}
.recruitSetting .hr-info {margin-bottom: 20px;margin-left: 20px;padding: 30px 20px;border: 1px solid #f2f2f2;}
.recruitSetting .hr-info .logo-wrapper {position: relative;padding-bottom: 18px;display: flex;align-items: center;}
.recruitSetting .hr-info .logo-wrapper .logo {position: relative;width: 100px;height: 100px;overflow: hidden;}
.recruitSetting .hr-info .logo-wrapper .logo img {width: 100%;height: 100%;}
.recruitSetting .hr-info .logo-wrapper .logo .upload-file {position: absolute;width: 100px;height: 100px;left: 0;top: 0;}
.recruitSetting .hr-info .logo-wrapper .logo .upload-file:hover {z-index: 3;background: rgba(0,0,0,.5) url(~@/assets/img/camerabg.png) no-repeat center;cursor: pointer;}
.recruitSetting .hr-info .logo-wrapper .upload-img-des {margin-left: 20px;line-height: 24px; font-size: 14px;color:@txtColor2;}
.recruitSetting .hr-info .input-tips {font-size: 12px;color: hsla(0,0%,65.1%,.73);position: absolute;line-height: 20px;right: 0;bottom: -18px;}
.recruitSetting .hr-info .save-btn {padding-top: 18px; text-align: center;}
.recruitSetting .hr-info .save-btn .el-button {padding: 12px 36px;}

.recruitSetting .survey-info {margin-bottom: 20px;margin-left: 20px;padding: 30px 20px;border: 1px solid #f2f2f2;}
.recruitSetting .survey-info .input-tips {font-size: 12px;color: hsla(0,0%,65.1%,.73);position: absolute;line-height: 20px;right: 0;bottom: -18px;}
.recruitSetting .survey-info .save-btn {padding-top: 18px; text-align: center;}
.recruitSetting .survey-info .save-btn .el-button {padding: 12px 36px;}

.recruitSetting .survey-info .head-title .top{font-size:22px;margin:auto;width: 100%;text-align:center}
.recruitSetting .survey-info .head-title .info p{font-size: 18px;text-indent:40px;line-height: 30px; font-weight: 600;margin: 20px;}

.recruitSetting .survey-info .content .base-info .title{font-size: 18px;line-height: 30px; font-weight: 500;margin: 20px;}
.recruitSetting .survey-info .content .base-info{margin-left:40px}
.recruitSetting .survey-info .el-radio{margin-bottom:10px}
.recruitSetting .survey-info .base-info .el-input {width: auto;}
.recruitSetting .survey-info .base-info .el-select {width: 100%;}
.recruitSetting .survey-info .base-info .el-input .el-input__inner{border-top-width: 0px;border-left-width: 0px;border-right-width: 0px;border-bottom-width: 1px;} 
.recruitSetting .survey-info .base-info .el-form-item__label{width:auto!important}

.recruitSetting .interview-template {margin-left: 20px;min-height: 430px;}
.recruitSetting .top-add-wrapper {padding-bottom: 10px;}
.recruitSetting .top-add-wrapper .add-icon {padding: 6px; font-size: 20px;font-weight: bolder;border-radius: 50%;cursor: pointer;}
.recruitSetting .top-add-wrapper .add-icon:hover {color: @theme;background: #d9ecff;}
.recruitSetting .interview-info-item {border: 1px solid @bdColor; margin-bottom: 18px;}
.recruitSetting .interview-info-item .info-top {padding: 12px 20px;border-bottom: 1px dashed @bdColor;}
.recruitSetting .interview-info-item .info-top .r-btn-wrap span {padding: 0 4px;color: rgb(121, 187, 255);cursor: pointer;}
.recruitSetting .interview-info-item .info-top .r-btn-wrap span:hover {color: @theme;}
.recruitSetting .interview-info-item .info-content {padding: 12px 20px;}
.recruitSetting .interview-info-item .info-content .item {padding: 6px;font-size: 14px;}
.recruitSetting .interview-info-item .info-content .item .item-key {color: @txtColor3;}


.recruitSetting .pop-content .title {padding-bottom:6px;font-size: 20px;}
.recruitSetting .upload-pop .vpopup-inner {width: 300px;padding: 40px 30px;}
.recruitSetting .upload-pop .pop-content {min-height: 360px;}
.recruitSetting .upload-pop .pop-content .tips {padding-bottom:10px;font-size: 14px;color: @txtColor3;}
// .recruitSetting .upload-pop .pop-content .avatar-list {padding: 10px 4px;}
.recruitSetting .upload-pop .pop-content .avatar-item {margin-bottom: 10px;position: relative;}
.recruitSetting .upload-pop .pop-content .avatar-item img {width: 60px;height: 60px;border-radius: 50%;overflow: hidden;cursor: pointer;}
.recruitSetting .upload-pop .pop-content .avatar-item .check-box {position: absolute;width: 20px;height: 20px;right: 30px;bottom: 6px;text-align: center;border-radius: 50%;background: #ddd;color: #fff;font-weight: bold;cursor: pointer;}
.recruitSetting .upload-pop .pop-content .avatar-item .check-box.checked {background: @theme;}

.recruitSetting .upload-pop .avatar-uploader {margin: 10px 0; text-align: center;}
.recruitSetting .upload-pop .avatar-uploader .el-upload {border: 1px dashed #d9d9d9;border-radius: 6px;cursor: pointer;position: relative;overflow: hidden;}
.recruitSetting .upload-pop .avatar-uploader .el-upload:hover {border-color: #409EFF;}
.recruitSetting .upload-pop .avatar-uploader-icon {font-size: 28px;color: #8c939d;width: 178px;height: 178px;line-height: 178px;text-align: center;}
.recruitSetting .upload-pop .avatar {width: 178px;height: 178px;display: block;}
.recruitSetting .upload-pop .limit-tips {padding-bottom:10px;font-size: 14px;color: @txtColor3;text-align: center;}
.recruitSetting .upload-pop .btn-wrapper {padding-top: 10px;text-align: center;}
.recruitSetting .upload-pop .btn-wrapper .el-button {padding: 12px 36px;}

// .recruitSetting .interview-pop .vpopup-inner {width: 700px;}
.recruitSetting .interview-pop .pop-content {padding: 40px 30px;border: 1px solid @bdColor;}

.recruitSetting .content-inner .hr-info .logo-wrapper .el-card {border: 0px solid #EBEEF5;}


.recruitSetting .popup-wrapper .vpopup-inner{padding: 50px;width: 700px;}
.recruitSetting .popup-wrapper .pop-title{font-size: @fst4; font-weight:bold;}
.recruitSetting .popup-wrapper .ctrl-list{margin-top: 30px;}
.recruitSetting .popup-wrapper .ctrl-item .title{position: absolute;left: 0; top: 0;font-size: @fst6;color: @txtColor2;}
.recruitSetting .popup-wrapper .ctrl-item .ctrl{padding-left: 100px;box-sizing: border-box;}
.recruitSetting .popup-wrapper .ctrl-item.ctrl-limit input{padding-right: 100px;}
.recruitSetting .popup-wrapper .ctrl-item .tip{position: absolute;top: 0;right: 0;padding: 0 10px;font-size: 12px;color: @txtColor3;}
.recruitSetting .popup-wrapper .ctrl-item .el-form-item__error{left: 100px;}
.recruitSetting .popup-wrapper .ctrl-item .el-date-editor{width: 100%;}
.recruitSetting .popup-wrapper .ctrl-item .el-date-editor input{cursor: pointer;}
.recruitSetting .popup-wrapper .ctrl-item .el-radio{border-radius: 4px;border: 1px solid #DCDFE6;box-sizing: border-box;color: #606266;height: 40px;line-height: 40px;padding: 0 15px;width: 100%;}
.recruitSetting .popup-wrapper .ctrl-item .el-cascader{width: 100%;box-sizing: border-box;}
html .city-select .el-cascader-menu{width: 300px;}
.recruitSetting .popup-wrapper .submit-btns{text-align: center;margin-top: 30px;}
.recruitSetting .popup-wrapper .submit-btns .el-button{padding: 12px 40px;background: @theme;color: #fff;border: 1px solid @theme;}
.recruitSetting .popup-wrapper .submit-btns .el-button:hover{background: @darkTheme;}
.recruitSetting .popup-wrapper .pop-title .label-tip{font-size: 12px;color: @txtColor3;font-weight: 400;margin-top: 5px;}
.recruitSetting .popup-wrapper .label-list{margin-top: 30px;}
.recruitSetting .popup-wrapper .label-list .label-text{float: left;margin: 0 10px 10px 0;padding: 2px 10px;font-size: 14px;color: #666;background: #f7f7f7;border: 1px solid #f7f7f7;border-radius: 3px;cursor: pointer;}
.recruitSetting .popup-wrapper .label-list .label-text.active{color: @theme;border: 1px solid @theme;background: #fff;}
.recruitSetting .advQuillEditorPopup.popup-wrapper .quill-editor{margin-top: 30px;}
.recruitSetting .popup-wrapper .quill-editor{height: 240px;border: 1px solid #ddd;border-radius: 2px;}
.recruitSetting .popup-wrapper .ql-editor.ql-blank::before{font-style: normal;}
.recruitSetting .popup-wrapper .quill-editor .ql-snow{border: none;}
.recruitSetting .popup-wrapper .quill-editor .ql-toolbar{border-bottom: 1px solid #ddd;}
.recruitSetting .popup-wrapper .quill-editor p{font-size: @fs1;}
html .profession-select .el-cascader-menu{width: 200px;}
.recruitSetting .popup-wrapper .el-select{width: 100%;}
.recruitSetting .upload-popup .vpopup-inner{width: 500px;padding: 0;}
.recruitSetting .upload-popup .pop-title{background: @theme;color: #fff;padding: 10px 20px;}
.recruitSetting .upload-popup .close-btn{color: #fff;}
.recruitSetting .upload-popup .upload-block{text-align: center;margin-top: 30px;}
.recruitSetting .upload-popup .upload-block .el-button{background: @theme;color: #fff;border: 1px solid @theme;}
.recruitSetting .upload-popup .limit{padding: 20px;}
.recruitSetting .upload-popup .limit p{padding: 4px;text-align: center;}
html .expPositon-select .el-cascader-menu{width: 200px;}
html .expCity-select .el-cascader-menu{width: 300px;}
.recruitSetting .popup-wrapper.conditionPopup .vpopup-inner{width: 400px;}
.recruitSetting .resume-wrapper .resume-block {padding: 0px 50px 10px;border-bottom: 0px solid #f2f2f2;}

</style>
