// 定义一个函数来更新时间
function updateTime() {
    var now = new Date(); // 获取当前时间
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // 如果是单个数字，前面添加0
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 格式化时间字符串
    var timeString = hours + ':' + minutes + ':' + seconds;

    // 将时间显示在页面上，假设有一个id为'clock'的元素
    document.getElementById('clock').textContent = timeString;
}

// 每秒调用一次updateTime函数来更新时间
setInterval(updateTime, 1000);

// 定义一个函数来获取并显示当前日期
function showDate() {
    // 创建一个新的Date对象
    var now = new Date();

    // 获取年、月、日
    var year = now.getFullYear();
    var month = now.getMonth() + 1; // getMonth() 返回的月份是从0开始的
    var day = now.getDate();

    // 如果是单个数字，前面添加0
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    // 格式化日期字符串
    var dateString = year + '-' + month + '-' + day;

    // 将日期显示在页面上
    document.getElementById('date').textContent = dateString;
}

// 调用函数显示当前日期
showDate();