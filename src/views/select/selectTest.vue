<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="多选按钮" prop="region">
      <el-select v-model="form.dataList" value-key="id" placeholder="请选择" multiple>
        <el-option v-for="item in options" :key="item.id" :label="item.nanme" :value="item"></el-option>
      </el-select>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        dataList: [
            { id: 1, nanme: "jason1" },
            { id: 3, nanme: "jason1" },
          //   { id: 2, nanme: "jason2" }
        ]
      },
      options: [
        { id: 1, nanme: "jason1" },
        { id: 2, nanme: "jason2" },
        { id: 3, nanme: "jason3" },
        { id: 4, nanme: "jason4" }
      ],
      runles: {
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.form.dataList.forEach(d=>console.log('dataList:'+d.id));
    }
  }
};
</script>

<style>
</style>