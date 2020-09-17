// 身份证号正则验证
export function checkIdCard(IdCard) {
    if (/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(IdCard)) {
        return true
    } else {
        return false
    }
}

// 银行卡号正则认证
export function checkBankCard(bankCard) {
    if (/^(\d{16}|\d{19}|\d{17})$/.test(bankCard)) {
        return true
    } else {
        return false
    }
}

// 手机号正则认证
export function checkPhone(phone) {
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
        return false;
    } else {
        return true;
    }
}

// 支付宝账号验证
export function checkAlipay(alipay) {
    if(/^(?:1[3-9]\d{9}|[a-zA-Z\d._-]*\@[a-zA-Z\d.-]{1,10}\.[a-zA-Z\d]{1,20})$/.test(alipay)) {
        return true
    } else {
        return false
    }
}