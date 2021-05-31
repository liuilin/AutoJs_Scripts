"auto"

threads.start(function() {

    while (true) {

        if (currentActivity() == "com.jifen.qukan.content.view.activity.VideoNewsDetailActivity") {

            sleep(31 * 1000);
            back();
            //观视频35秒后返回
        }
    }
});

threads.start(function() {

    while (true) {

        if (currentActivity() == "com.jifen.qukan.content.view.activity.NewsDetailActivity") {

            sleep(35 * 1000);
            back();
            //阅读35秒后返回
        }
    }
});

threads.start(function() {

    while (true) {

        if (currentActivity() == "com.jifen.qukan.QuKanActivity") {

            sleep(1000);
            back();
            //点击的广告是则反回
        }
    }
});

threads.start(function() {

    while (true) {

        if (currentActivity() == "com.jifen.qukan.content.view.activity.NewsDetailActivity") {
            sleep(1000);
            swipe(1060, 1000, 1060, 960, 39);

            //滑动
        }
    }
});

while (true) {

    if (currentActivity() == "com.jifen.qkbase.view.activity.MainActivity") {

        sleep(1000);
        id("ik").findOne().click();
        //新刷

        sleep(1500);
        row("1").findOne().click();
        //点击第一行
        //无法自动看视频的，就这里修改，默认只在推荐中自动阅读，推荐页面第一行有视频才会点击。
    }
}

//下面的需要单独一个脚本运行，了解的朋友，可以自己加到一个脚本中

while (true) {

    if (text("领取").findOne()) {

        id("sj").findOne().click()
    }
}