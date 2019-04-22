require.config({
    paths:{
        'mui':'./mui.min'
}
})
//渲染收入
require(['mui'],function(mui){
    mui.ajax('/sum',{
    	data:{},
    	dataType:'json',//服务器返回json格式数据
    	type:'post',//HTTP请求类型
    	timeout:10000,//超时时间设置为10秒；
    	success:function(data){
    		rander(data.data)
    	},
    	error:function(xhr,type,errorThrown){
    		
    	}
    });
})
//渲染支出
require(['mui'],function(mui){
    mui.ajax('/pre',{
    	data:{},
    	dataType:'json',//服务器返回json格式数据
    	type:'post',//HTTP请求类型
    	timeout:10000,//超时时间设置为10秒；
    	success:function(data){
    		rander(data.data)
    	},
    	error:function(xhr,type,errorThrown){
    		
    	}
    });
})

function rander(data){
    let str = '';
    data.forEach(item=>{
        str =`<li><span>${item.sim}</span><span>${item.num}</span><span>${item.nest}</span><span>${item.fam}</span><span>${item.txt}</span></li>`
    })
    uls.innerHTML += str;
}

//添加事件
