app.startActivity({
    action: "VIEW",
    data: "alipays://platformapi/startapp?appId=2021002116662889"
});

// 等待小程序加载完成：页面常驻元素出现则认为页面已加载完成
// while(!(text("本人健康码自查询").exists() && text("本人信息扫码登记").exists())){
//     sleep(1);
// }

// // 未登录状态持续点击「确定」以跳过各种声明、登录选项
// while(!text("此处修改为你的姓名").exists() ){
//     if(text("确定").exists()){
//         click("确定");
//     }
//     sleep(1);
// }
sleep(5000);
scrollDown()
click(,)
toast('完成');

// 登录完成后（你的名字出现在页面上）进入目标功能
//while (!click("水果蔬菜"));