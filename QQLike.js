"auto";

if (!device.isScreenOn()) {
    unlock("2589"); //里面是你的锁屏密码
    sleep(1000);
}
app.launchApp("QQ");
// click(101,200);
className("android.widget.Button").findOne().click()
sleep(500)
// // const tool = id("head_layout").findOne()
// // click(130,520)
id("name").className("android.widget.RelativeLayout").clickable(true).depth(8).findOne().click()
sleep(500)
id("name").className("android.widget.FrameLayout").descEndsWith("次赞").findOne().click()
sleep(500)
// back()
// sleep(500)
// back()

function 下滑() {
    className("AbsListView").scrollable().scrollForward();
}

function 赞() {
    var like = className("ImageView").desc("赞").find();
    if (like) {
        like.click();
        return true;
    }
    return false;
}

function 显示更多() {
    for (let i = 0; i < 2; i++) {
        click("显示更多");
    }
}

toast("请打开自己的资料页，点击点赞图标");
sleep(100);
waitForActivity("com.tencent.mobileqq.activity.VisitorsActivity");

while (notStopped()) {
    var i = 0;
    while (i < 10) {
        i += 赞() ? 1 : 0;
        click("取消");
    }
    显示更多();
    下滑();
}