/**
 * 1.点击按钮，等待弹窗
 * 2.点赞
 * 3.找到每个人的动态区
 * 4.封装函数循环点赞
 */
// setInterval(function(){ log("Hello"); }, 3000);
setInterval(function(){ weChatLike(); }, 3000);
// while (true) {
    // weChatLike();
// }

function weChatLike() {
    var listView = className('ListView').findOnce();
    log('count ----' + listView.childCount());
    listView.children().forEach((element, index) => {
        const comment = element.findOne(desc('Comment'));
        log('ele********' + index);
        if (comment) {
            comment.click();
            click('Like');
        }
        sleep(1000);
    });
    scrollDown();
    sleep(1000)
}

function like() {
    log('start****')
    desc('Comment').findOne().click();
    sleep(1000);
    // text('Like').findOnce().parent().click();
    click('Like');
    log('end*****')
    // click('Comment')
    // setText('恭喜王教主')
}
