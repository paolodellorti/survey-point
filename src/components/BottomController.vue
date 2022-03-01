<template>
  <div class="controller">
        <el-popconfirm 
            v-if="buttonType === 'confirmEdit'" 
            title="Cancellare definitivamente?"
            confirm-button-text='OK'
            cancel-button-text='No, grazie'
            icon="el-icon-info"
            icon-color="red"
            @confirm="$emit('deleteQuestion')"
            >
            <el-button
                title="delete question"
                type="danger" 
                icon="el-icon-delete"
                slot="reference"
                circle
            ></el-button>
        </el-popconfirm>
        <div v-else></div>
        <el-button 
            title="go back" 
            type="danger" 
            icon="el-icon-back" 
            size="small" 
            @click="$router.push({ name: backPage })"
            circle
        ></el-button>
        <el-button 
            title="add question" 
            type="success" 
            :icon="mainIcon" 
            :disabled="isButtonDisabled" 
            @click="$emit('confirm', buttonType)" 
            circle
        ></el-button>
  </div>
</template>

<script>
export default {
    name: 'BottomController',
    props: {
        buttonType: {
            type: String,
            required: true
        },
        isButtonDisabled: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            mainIcon: '',
            backPage: '',
            params: {}
        }
    },
    methods: {
        handleBack() {
        }
    },
    mounted() {
        switch (this.buttonType) {
            case 'add':
                this.mainIcon = 'el-icon-plus'
                this.backPage = 'Home'
                break;
            case 'confirmAdd':
            case 'confirmEdit':
                this.mainIcon = 'el-icon-check'
                this.backPage = 'SurveyPointEdit'
                this.params = {
                    idWA: this.$route.params.idWA, 
                    idSP: this.$route.params.idSP
                }
                break;
        }
    }
}
</script>

<style scoped>
    .controller {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 30px;
        z-index: 99;
        width: 400px;
        margin: 0 auto;
    }
</style>