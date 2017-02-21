
//解决类数组转化为数组的方法---->解决兼容问题
var DOM={};
DOM.listToArray=function(eles){
    try{
        var a=[].slice.call(eles,0);
    }catch(e){
        var a=[];
        for(var i=0;i<eles.length;i++){
            a.push(eles[i])
        }
    }return a;
};

//解决选型卡参数问题
DOM.getIndex=function(ele){
    var index=0;
    var prev=ele.previousSibling;
    while(prev){
        if(prev.nodeType===1){
            index++;
        }
        prev=prev.previousSibling;
    }
    return index;
};

//解决选型卡添加class重复的问题-->1
DOM.siblings=function(ele){
    var a=[];
    var prev=ele.previousSibling;
    while(prev){
        if(prev.nodeType==1){
            a.unshift(prev);
        }
        prev=prev.previousSibling;
    }
    var next=ele.nextSibling;
    while(next){
        if(next.nodeType==1){
            a.push(next);
        }
        next=next.nextSibling;
    }
    return a
};

//解决选型卡添加class重复的问题-->2
DOM.parentSiblings=function(ele){
    var a=[];
    var child=ele.parentNode.firstChild;
    while(child){
        if(child!==ele){//确保当前被判断的元素不能是自己
            //child=child.nextSibling;
            //continue
            //}else{
            if(child.nodeType===1){
                a.push(child)
                }
        }
        child=child.previousSibling;
    }
    return a
};

//找到所有的哥哥
DOM.prevSibling=function(ele){
    var a=[];
    var child=ele.parentNode.firstChild;
    while(child){
        if(child==ele)break;
        if(child.nodeType==1){
            a.push(child);
        }
        child=child.nextSibling;
    }
    return child;
};

//找到所有的弟弟
DOM.nextSibling=function(ele){
    var a=[];
    var child=ele.parentNode.lastChildC;
    while(child){
        if(child==ele)break;
        if(child.nodeType==1){
            a.unshift(child);
        }
        child=child.previousSibling;
    }
    return child;

};

//把相邻的哥哥和弟弟找到
DOM.closest=function(ele){
    if(ele.previousElementSibling){
        return ele.previousElementSibling;
    }
    var p=ele.previousSibling;
    var a=[];
    while(p){
        if(p.nodeType===1){
            a.push(p);
            break;//一旦找到就退出循环
        }
        p= p.previousSibling;
    }
    var n=ele.nextSibling;
    while(n){
        if(n.nodeType===1){
            a.push(n);
            break;
        }
        n= n.previousSibling;
    }
    return a;
};

//找到相邻的和弟弟
DOM.next=function(ele){
    var n=ele.nextSibling;
    while(n){
        if(n.nodeType===1){
            a.push(n);
            return p;
        }
        n= n.previousSibling;
    }
    return null;
};

//找到相邻的哥哥
DOM.prev=function(ele){
    var p=ele.previousSibling;
    while(p){
        if(p.nodeType===1){
            a.push(p);
            return p;//一旦找到就退出循环
        }
        p= p.previousSibling;
    }
    return null;
};


//绑定点击事件 自定义方法executive();
DOM.onclick=function(ele){
    for(var i=0;i<ele.length;i++){
        ele[i].zhufeng=i;
        ele[i].onclick=function(){
            executive(this.zhufeng);
        }
    }
};

//隔行变色
DOM.InterlacedColor=function(ele,c1,c2){
    for(var  i=0;i<oLis.length;i++){
        var n=i%2;
        if(n==0){
            ele[i].className=c1;
        }else{
            ele[i].className=c2;
        }
    }
};

//算出任意元素距离浏览器最左和最上面的偏移
DOM.offset=function(ele){
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        while (p) {
            //通过用户代理属性判断是不是ie8浏览器
            if(window.navigator.userAgent.indexOf("MSIE 8")>-1){
                l += p.offsetLeft;
                t += p.offsetTop;
            }else{
                l+= p.offsetLeft+ p.clientLeft;
                t+= p.offsetTop+ p.clientTop;
            }
            p = p.offsetParent;
        }
        return {left: l, top: t}
};

//数组去重
DOM.arrayWeight=function(ele){
    var newAry = ele.slice(0), obj = {};
    for (var i = 0; i < newAry.length; i++) {
        var cur = newAry[i];
        if (obj[cur] == cur) {
            newAry.splice(i, 1);
            i--;
            continue;
        }
        obj[cur] = cur;
    }
    obj = null;
    return newAry;
};

DOM.average=function(ele){
    [].sort.call(ele,function(a,b){ return a-b});
    [].pop.call(ele);
    [].shift.call(ele);
    var count=null;
    for( var i=0;i< ele.length;i++){
        count+=ele[i];
    }
    return  count/ele.length;
};

