/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("[data-toggle='popover']").popover();
$('body').on('click', function (event) {
    var children = $(".popover").find('*');  //查询出popover下所有的子孙元素
    var target = $(event.target); //当前点击的元素
    var bool = true;
    for (var i = 0; i < children.length; i++) {
        if (children[i] === event.target) {   //判断点击的元素是否在popover中
            bool = false;
        } else if (target.hasClass('node_name')) { //popover点击触发的元素，根据targetId的样式
            bool = false;
        }
    }
    if (bool) {
        $("[data-toggle='popover']").popover('hide');
    }
});
