//jshint esversion:8
vm = new Vue({
    el: "#registerPart",
    data: {
        username: '',
        passwd: '',
        passwd2: '',
        nickname: '',
        passwdps: '必填',
        passwd2ps: '',
        usernameps: '必填',
        age: '',
        testdata: '',
        newdata: '',
        right :false
    },
    watch: {
        passwd: function (newpwd, oldpwd) {
            const pwd = /^[a-zA-Z0-9]{6,14}$/;
            console.log(pwd.test(newpwd));
            right = pwd.test(newpwd);
            if (right == true) {
                this.passwdps = '密码符合规范';
                if (this.passwd == this.passwd2) {
                    this.passwd2ps = '两次输入一致';
                }else{
                    this.passwd2ps = '两次输入不一致';
                }
            } else {
                const badLength = /[a-zA-Z0-9]*/;
                if (badLength.test(newpwd)) {
                    passwdps = '密码长度应该在6-14位';
                }else{
                    passwdps = '密码仅由大小写字母和数字组成';
                }
            }
        },
        passwd2: function (newpwd,oldpwd){
            if (this.passwd2 == this.passwd) {
                this.passwd2ps = '两次输入一致';
            }else{
                this.passwd2ps = '两次输入不一致';
            }
        }
    },
    methods: {
        submit: function () {
            ;
        }
    },
});