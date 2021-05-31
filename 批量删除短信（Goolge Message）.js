app.launchApp('Messages');

setInterval(function () {
    deleteMsg();
}, 3000);

function deleteMsg() {
    var listView = className('android.support.v7.widget.RecyclerView').findOnce();
    // 短信条数大于0条时，执行长按选择
    if (listView.childCount() > 0) {
        log('批量选择ing...');
        listView.children().forEach((element, index) => {
            element.longClick();
        });
    } else {
        log('全部短信已删除完毕')
        exit();
    }
    sleep(1000);
    // 点击删除按钮
    className("android.widget.TextView").desc("Delete").findOne().click();
    sleep(1000);
    // 执行删除
    className("android.widget.Button").text("Delete").findOne().click();
}