function click_ripple(arg){

  arg.forEach(function(e){
    
    _add_event(e);

  });

  function _add_event(e){
    var targets = document.querySelectorAll(e.target);
    targets.forEach(function(target){

      target.style.overflow = 'hidden';
      target.style.position = 'relative';
      target.addEventListener('click',function(info){ // ei ... event info
        _ripple_event(this,info,e);
      },false);
    });
  }

  function _ripple_event(target,info,e){

    var x = info.offsetX;
    var y = info.offsetY;
    var color = e.color ? e.color : "yellow";
    var duration = e.duration ? e.duration : 500;
    var size = e.size ? e.size : 100;

    var ripple = document.createElement('i');
    var style = {
      width: size + 'px',
      height: size + 'px',
      position: 'absolute',
      top: (y - size/2) + 'px',
      left: (x - size/2) + 'px',
      borderRadius: '50%',
      pointerEvents: 'none',
      transform: 'scale(0)',
      opacity: 1,
      backgroundColor: color,
      transition: 'opacity '+(duration/1000)+'s ease-out,transform '+(duration/1000)+'s ease-out'
    };
    for(var prop in style){
      ripple.style[prop] = style[prop];
    }

    target.appendChild(ripple);

    setTimeout(function(){
      ripple.style.opacity = '0';
      ripple.style.transform = 'scale(2)';
    },0);


    setTimeout(function(){
      target.removeChild(ripple);
    },500);

  }

}
