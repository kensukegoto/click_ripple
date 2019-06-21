
document.body.addEventListener('mousedown',function(e){
  /**
   * e.target クリックされた要素
   * e.offsetX クリックされた要素の左上を基準にしたx
   * e.offsetY クリックされた要素の左上を基準にしたy
   */
    var ripple = document.createElement('i');
    ripple.classList.add('ripple');

    var target = e.target;
    var cssTarget = getComputedStyle(target,null);
    
    var pos_prev = cssTarget.getPropertyValue('position'); // 最後に戻すため保存
    var pos_after = (pos_prev !== 'static') ? pos_prev : 'relative';  

    target.style.position = pos_after;
    target.style.overflow = 'hidden';
    target.appendChild(ripple);
    var cssRipple = getComputedStyle(ripple,null);
    var h_ripple = cssRipple.getPropertyValue('height').replace('px','');
    var w_ripple = cssRipple.getPropertyValue('width').replace('px','');
 
    ripple.style.top = e.offsetY - (h_ripple/2) + 'px';
    ripple.style.left = e.offsetX - (w_ripple/2) + 'px';
    ripple.style.transition = 'opacity .5s ease-out,transform .5s ease-out';
    // Point 
    setTimeout(function(){
      ripple.style.opacity = '0';
      ripple.style.transform = 'scale(2)';
    },0);

    setTimeout(function(){
      target.removeChild(ripple);
      target.style.overflow = '';
    },500);

})
