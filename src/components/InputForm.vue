<template>
  <form>
    <h4>Domanda</h4>
    <el-input
      placeholder="Inserisci una domanda"
      v-model="inputText"
      clearable>
    </el-input>

    <h4>Tipologia</h4>
    <el-radio-group v-model="inputType" class="radio">
      <el-radio-button label="Provincia"></el-radio-button>
      <el-radio-button label="Stelle"></el-radio-button>
      <el-radio-button label="Emoji"></el-radio-button>
    </el-radio-group>

    <bottom-controller 
        :button-type="buttonType" 
        :is-button-disabled="isDisabled"
        @confirm="submit"
        @deleteQuestion="$emit('deleteQuestion')"
    />
  </form>
</template>

<script>
import BottomController from './BottomController.vue'

export default {
    components: { 
        BottomController 
    },
    name: 'FormInput',
    props: {
        questionText: {
            type: String,
            required: false
        },
        questionType: {
            type: String,
            required: false
        },
        buttonType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            inputText: '',
            inputType: '',
            isDisabled: true
        }
    },
    methods: {
        submit(type) {
            this.$emit('confirm', [ this.reqBody, type ])
        }
    },
    computed: {
        reqBody() {
            return {
                type: this.questionType,
                text: this.inputText
            }
        }
    },
    watch: {
        inputText(newValue, oldValue) {
            if (newValue === '') {
                this.isDisabled = true
            } else if (newValue && this.inputType) {
                this.isDisabled = false
            }
        },
        inputType(newValue, oldValue) {
            if (newValue === '') {
                this.isDisabled = true
            } else if (newValue && this.inputText) {
                this.isDisabled = false
            }
        }
    },
    mounted() {
            this.inputText = this.questionText
            this.inputType = this.questionType === 'PROVINCE' ? 'Provincia' :
                             this.questionType === '5_STARS' ? 'Stelle' :
                             this.questionType === '3_EMOJIS' ? 'Emoji' :
                             ''
    }
}
</script>

<style scoped>
h4 {
    text-align: left;
    margin-top: 30px;
}
</style>