<template>
  <a-table
    :columns="columns"
    :data-source="tableData"
    :loading="tableLoading"
    bordered
    :pagination="{
        showSizeChanger:true,
        showQuickJumper:true,
        total:total,
        current:page,
        defaultPageSize: pageSize, 
        size:'small',
        showTotal:total => `一共${total} 条`,
        onShowSizeChange:(page,size)=> {
            pageChange(page,size)
        },
        onChange:(page,size)=> {
            pageChange(page,size)
        },
    }"
    :scroll="{ y: 700}"
    :rowKey="(record,index)=>{return index}"
  >
  </a-table>
</template>

<script>
import {reactive,toRefs,onMounted} from 'vue';
import {testList} from '../api/List/requestList.js'
export default {
    setup(){
        const columns = [
            {
                title: '序号',
                width: 80,
                key:0,
                customRender:({text, record, index})=>{
                    return (state.page-1)*state.pageSize+index+1
                }
            },
            {
                title: 'Name',
                dataIndex: 'name',
                width: 150,
                key:1
            },
            {
                title: 'Age',
                dataIndex: 'age',
                width: 150,
                key:2
            },
            {
                title: '内容',
                dataIndex: 'content',
                key:3
            },
        ];
        const state = reactive({
            tableData:[],
            total:500,
            pageSize:10,
            page:1,
            tableLoading:true,
        })
        const pageChange = (page,size)=>{
            // console.log(page,size)
            state.page =page;
            state.pageSize = size;
            getData();
        }
        onMounted(() => {
            getData()
        });
        const getData = ()=>{
            state.tableLoading = true;
            let param ={
                page:state.page,
                pageSize:state.pageSize,
            }
            testList(param).then(data=>{
                state.tableLoading = false;
                console.log(data.data)
                if(data.data&&data.data.code ==200){
                    state.tableData = data.data.resultValue;
                    state.total=data.data.total;
                }
            })
        }
        return {
            columns,
            ...toRefs(state),
            pageChange
        }
    }
}
</script>

<style lang="less">

</style>