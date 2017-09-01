/**
 * Created by long on 2017/7/27.
 */
setRem();
window.addEventListener("orientationchange", setRem);//监听横竖屏切换
window.addEventListener("resize", setRem);
function setRem() {
    var html = document.querySelector("html");//获取根元素html
    var width = html.getBoundingClientRect().width;//获取屏幕的宽度
    //console.log(html.getBoundingClientRect());

    html.style.fontSize = width / 16 + "px";//设定跟元素(html)的动态大小

}
