<template>
    <div class="bankCardBind">
        <van-nav-bar title="绑定银行卡" left-text="返回" left-arrow @click-left="$goBack()" />
        <div class="bankUpDateMatters mb20">
            <div>
                1、必须填报您本人在中国境内开立的银行账户（可查询手机银行或咨询开户银行）
            </div>
            <div>
                2.一个用户目前仅支持绑定一张银行卡
            </div>
            <div>
                3.本平台暂只支持中国工商银行,中国农业银行,中国银行,交通银行,招商银行,平安银行,上海浦东发展银行,兴业银行,中国民生银行,中国光大银行,中国邮政储蓄银行,广发银行等银行机构
            </div>
        </div>
        <van-form validate-first @submit="submit" ref="vanForm">
            <!-- 通过 pattern 进行正则校验 -->
            <van-field v-model="params.name" label="姓名" left-icon='manager' placeholder="请输入您的姓名" clearable :rules="[{ required: true, message: '请输入您的真实姓名' }]" />
            <van-field v-model="params.idCard" label="身份证号码" left-icon='card' name="pattern" placeholder="请输入身份证号" clearable :rules="[{ validator, message: '请输入正确的身份证号码' }]" />
            <van-field v-model="params.cardName" disabled label="银行" @click='bankDialog' left-icon='wap-home' name="pattern" placeholder="请选择银行" clearable :rules="[{ required: true, message: '请选择您当前卡号所在银行' }]">
                <template #button>
                    <van-icon @click='bankDialog' name="arrow" />
                </template>
            </van-field>
            <!-- 弹框 -->
            <van-popup v-model="showPicker" round position="bottom">
                <van-picker show-toolbar :columns="actions" @cancel="showPicker = false" @confirm="onConfirm" />
            </van-popup>
            <!-- 通过 validator 进行函数校验 -->
            <van-field class="brb" v-model="params.bankCard" left-icon='coupon' center clearable label="银行卡号" placeholder="请输入银行卡号" :rules="[{ validator: validator1, message: '请输入正确的银行卡号' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { AddBankCard } from '../../api/apiWallet'
    import { checkIdCard, checkBankCard } from '../../utils/regular'
    import bankData from '../../utils/bank'
    export default {
        data() {
            return {
                params: {
                    name: '',
                    idCard: '',
                    cardType: '',
                    cardName: '',
                    bankCard: '',
                    token: localStorage.getItem('token'),
                    isDefault: 1
                },
                show: false,
                actions: bankData,
                showPicker: false
            }
        },
        methods: {
            validator(val) {
                return checkIdCard(val);
            },
            validator1(val) {
                return checkBankCard(val)
            },
            bankDialog() {
                this.showPicker = true
            },
            submit() {
                AddBankCard(this.params).then(res => {
                    console.log(res)
                })
            },
            onCancel() {
                
            },
            onConfirm(value) {
                this.params.cardType = value.value
                this.params.cardName = value.text
                this.showPicker = false
            }
        }
    }
</script>

<style lang='scss' scoped>
    .bankUpDateMatters {
        padding: 0.2rem;
        background: #FFF7DB;
        color: #Ffa65B;
        font-size: 0.24rem;
        line-height: 0.36rem;
    }

    /deep/ .van-cell {
        padding: .5rem .32rem;
        // border-radius: 6px;

        /deep/ .van-field__error-message {
            position: absolute;
            bottom: -.4rem;
        }
    }

    /deep/ .van-field__label {
        width: 5.2em;
        font-size: .24rem;
    }

    /deep/ .van-field--disabled .van-field__label {
        color: #000
    }

    /deep/ .van-field__control:disabled {
        color: #000
    }
</style>