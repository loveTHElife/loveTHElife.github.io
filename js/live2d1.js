window.onload = function () {
    var live2d = document.getElementById("live2d-widget");
    var arr = ['myfirst', 'mySecond', 'myThird', 'myFourth', 'myFifth', 'mySixth', 'mySeventh', 'myEighth', 'myNinth', 'myTenth'];

    function myTimer() {
        var num = Math.round(Math.random() * 5) + 5;
        live2d.style.animation = arr[Math.round(Math.random() * 10)] + " " + num + "s linear infinite ";
    }
    //切换动画第一first、第二second 、第三third、第四fourth 、第五fifth 、第六sixth 、第七seventh
    //第八eighth ,第九ninth 、第十tenth
    setInterval(function () { myTimer() }, Math.round(Math.random() * 5000) + 5000);
}