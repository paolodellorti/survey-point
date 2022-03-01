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
                class="big-button" 
                title="delete question"
                type="danger" 
                icon="el-icon-delete"
                slot="reference"
                circle
            ></el-button>
        </el-popconfirm>
        <div class="big-button" v-else></div>
        <el-button 
            class="small-button"
            title="go back" 
            type="danger" 
            icon="el-icon-back" 
            size="small" 
            @click="$router.push({ name: backPage })"
            circle
        ></el-button>
        <el-button
            class="big-button" 
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
    .big-button {
        width: 70px;
        height: 70px;
    }
    .small-button {
        width: 50px;
        height: 50px;
    }
    @media only screen and (max-width: 600px)   {
        .controller {
            justify-content: space-evenly;
            bottom: 70px;
        }
    }

</style>