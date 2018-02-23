// 跨文档消息传送 XDM 指的是来自不同域的页面间传递消息

// postMessage('消息',"表示消息接收方来自哪个域的字符串")
var iframeWindow = document.getElementById("myframe").contentWindow;
iframeWindow.postMessage("A secret","http://www.wrox.com");

// onmessage
// data:作为postmessage()第一个参数传入的字符串数据
// origin:发送消息的文档所在域
// source:发送消息的文档的window对象的代理。

EventUtil.addHandler(window,"message",function(event){
    //确保发送消息的域是已知域
    if(event.origin == "http://www.wrox.com"){
        // 处理接收到的数据
        processMessage(event.data);

        // 可选：向来源窗口发送回执
        event.source.postMessage("Received!","http://p2p.wrox.com");
    }
})




