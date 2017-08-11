

var Utils = {

    checkEmail : function(email){
            var reEmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
            return reEmail.test(email);
    },
    checkPhone : function(phone){

        if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){

            return false;
        }
        return  true;
    },
    checkPassword : function(pwd, confirm){

        if(pwd == confirm){
            return true;
        }else
            return false;
    },
    // 数据获取
    ajax : function(url, method, params, fn){
        if(!url) return false;
        var def = $.Deferred();
        var opt = {
            url : url,
            type : method || 'GET',
            dataType : 'json',
            data : params || {},
            timeout : 20000,
            success : function(res){
                def.resolve(res);
            },
            fail : function(){
                def.reject({});
            }
        }
        $.ajax(opt);
        return def;
    },
    ajaxBody : function(url, method, params, fn){
        if(!url) return false;
        var def = $.Deferred();
        var opt = {
            url : url,
            type : method || 'GET',
            contentType: "application/json; charset=utf-8",
            dataType : 'json',
            data : params || {},
            timeout : 20000,
            success : function(res){
                def.resolve(res);
            },
            fail : function(){
                def.reject({});
            }
        }
        $.ajax(opt);
        return def;
    },
    //同步
    ajaxsync : function(url, method, params, fn){
        if(!url) return false;
        var def = $.Deferred();
        var opt = {
                url : url,
                cache : false,
                async : true,
                type : method || 'GET',
                dataType : 'json',
                data : params || {},
                timeout : 20000,
                success : function(res){
                    def.resolve(res);
                },
                fail : function(){
                    def.reject({});
                }
            }
        $.ajax(opt);
        return def;
    },
    get : function(url, param){
        return this.ajax(url, 'GET', param);
    },
    getsync : function(url, param){
        return this.ajaxsync(url, 'GET', param);
    },
    post : function(url, param){
        return this.ajax(url, 'POST', param);
    },
    postBody : function(url, param){
        return this.ajaxBody(url, 'POST', param);
    },

    getParam:function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null){
            var paramValue = r[2];
            var dotIndex =paramValue.indexOf('#');
            if(dotIndex > 0){
                return paramValue.substr(0, dotIndex);
            }else {
                return paramValue;
            }
        }else {
            return null;
        }
    },

    getServerName : function () {
        // var data = 'http://139.129.202.208:8080/ysext-server';
        var data = 'http://139.129.202.208:9085/labour/';
        return data;
    }
};