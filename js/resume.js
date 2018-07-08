/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("[data-toggle='popover']").popover({trigger:'hover'});
$('body').on('click', function (event) {
    var target = $(event.target); //当前点击的元素
    console.log(target.hasClass('pop'))
    if (!target.hasClass('pop')) {
        $('.pop').popover('hide');      // 当点击body的非弹出框相关的内容的时候，关闭所有popover
    }
});
//$(".pop").click(function () {
//    $('.pop').popover('hide');          // 当点击一个按钮的时候把其他的所有内容先关闭。
//    console.log(111)
//    console.log($(this).popover())
//    $(this).popover('toggle');          // 然后只把自己打开。
//    $(this).popover(); 
//    console.log($(this))
//});

