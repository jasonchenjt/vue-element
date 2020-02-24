<template>
  <div id="login">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
      <h2 class="form-title">欢迎登陆</h2>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登陆</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            msg: "登陆页",
            form: {
                username: '',
                passwword: ''
            },
            rules:{
                username:[
                    {required: true, message:'请输入账号', trigger:'blur'},
                    {min: 3, max: 10, message:'账号长度在3-10个字符',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {min: 5, max: 15,message:'密码长度在5-15个字符', trigger:'blur'}
                ]
            }           
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              sessionStorage.setItem('isLogin', 'true');
              this.$store.dispatch('asyncUpdateUser', {username: this.form.username})

              //编程式导航
              this.$router.push({name: "Main",params:{username:this.form.username}});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
    .form {
        width: 350px;
        margin: 180px auto;
        border: 1px solid #DCDFE6;
        padding: 35px;
        border-radius: 5px;
        box-shadow: 0 0 25px #DCDFE6;
    }
    .form-title{
      text-align: center;  
    }
</style>
