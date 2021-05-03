var target = {
  set_backgroundcolor:function(target,color){
    var body = document.querySelector(target);
    body.style.backgroundColor = color;
  },
  set_color:function(target,color){
    var body = document.querySelector(target);
    body.style.color=color;
  },
  set_AllElementcolor:function(target,color){
    var links = document.querySelectorAll(target);
    var i = 0;
    while(i < links.length){
      links[i].style.color = color;
      i = i+1;
  }
}
}


function nightdayhandler(self){
  if(self.value === 'night'){
  target.set_backgroundcolor('body','black');
  target.set_color('body','white');
  self.value = 'day';

  target.set_AllElementcolor('a','blue');
} else {
  target.set_backgroundcolor('body','white');
  target.set_color('body','black');
  self.value = 'night'

  target.set_AllElementcolor('a','red');
}
}
