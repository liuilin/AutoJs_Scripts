/*
 * @Author: 笔青居
 * @Date: 2018-10-31 16:13:45
 * @email: 644613693@qq.com
 * @lastEditors: 笔青居
 * @LastEditTime: 2018-11-03 15:13:11
 * @Description: 删除僵尸好友，使用方法，新建一个3个人的讨论组，然后开启这个脚本即可
 */
auto.waitFor();

初始化名字列表=[];
临时名字列表=[];
删除名字列表=[];
是否还有下一页=true;

function main(){
    if(currentActivity()!="com.tencent.mm.chatroom.ui.ChatroomInfoUI"){
        dialogs.alert("使用说明","创建一个少量人员的聊天组，并点击聊天组右上角3个点");
    }
    waitForActivity("com.tencent.mm.chatroom.ui.ChatroomInfoUI");
    var 所有初始名字=id("dns").find();
    所有初始名字.forEach(n=>{
        初始化名字列表.push(n.text());
    })
    log(初始化名字列表);
    var 页数=0;
    do{
        waitForActivity("com.tencent.mm.chatroom.ui.ChatroomInfoUI");
        添加成员(页数);
        删除成员();
        sleep(3000);
        页数++;
        log(是否还有下一页);
    }while(是否还有下一页);
    log(删除名字列表);
    back();
    waitForActivity("com.tencent.mm.ui.LauncherUI");
    back();
    删除好友();
}

function 删除好友(){
    while(!click("通讯录"));
    do{
        className("android.view.View").find().forEach(名字控件=>{
            var 名字=名字控件.text();
            if(删除名字列表.indexOf(名字)!=-1){
                名字控件.click();
                删除操作();
                sleep(400);
            }
        });
    }while(scrollDown())
}

function 删除操作(){
    waitForActivity("com.tencent.mm.plugin.profile.ui.ContactInfoUI");
    desc("更多").click();
    sleep(500);
    var 删除=text("删除").findOne();
    删除.parent().click();
    click("删除");
}



function 添加成员(页数){
    log("添加成员-->"+页数);
    desc("添加成员").findOne().parent().click();
    waitForActivity("com.tencent.mm.ui.contact.SelectContactUI");
    while(页数){
        log("减少页数");
        页数--;
        scrollDown();
        sleep(800);
    }
    var 单选框集合=className("CheckBox").find();
    单选框集合.forEach(单选框=>{
        // if()
        名字=item.parent().findOne(className("TextView")).text();
        临时名字列表.push(名字);
        单选框.parent().click();
    })
    sleep(200);
    是否还有下一页=scrollDown();
    click("确定");
    var 确定=text("确定").findOne(5000);
    if(确定){
        确定.click();
    }
    sleep(1000);
    log("执行了");
    var 所有名字控件=id("dns").find();
    var 所有名字=[];
    所有名字控件.forEach(名字=>{
        所有名字.push(名字.text());
    })
    log("所有名字-->"+所有名字);
    临时名字列表.forEach(当前名字=>{
        if(所有名字.indexOf(当前名字)==-1){
            log("删除的名字-->"+当前名字);
            if(删除名字列表.indexOf(当前名字)==-1){
                删除名字列表.push(当前名字);
            }
        }
    })
    
}

function 删除成员(){
    desc("删除成员").findOne().parent().click();
    waitForActivity("com.tencent.mm.chatroom.ui.SelectDelMemberUI");
    var 单选框集合=className("ImageButton").find();
    单选框集合.forEach(单选框=>{
        名字=单选框.parent().parent().findOne(className("TextView")).text();
        if(初始化名字列表.indexOf(名字)==-1){
            log("选中名字--》"+名字);
            单选框.parent().click();
        }
    });
    click("删除");
    click("确定");
}

main();