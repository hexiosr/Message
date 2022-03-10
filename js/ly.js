//页面加载   获取全部信息
$(function(){
    $.get("message.json",function(result){
        //result数据添加到box容器中;
        addBox(result);
    });
});
function addBox(result){
    //result是一个集合,所以需要先遍历
    $.each(result,function(index,obj){
        $("#box").append("<div align='center'>"+
            "<div class='p1 p'>"+obj['PersonName']+"</div>"+
            "<div class='p2 p'>"+obj['Date']+"</div>"+
            "<div class='p3 p'>"+obj['Content']+"</div>"+
            "</div>");
    });
}
