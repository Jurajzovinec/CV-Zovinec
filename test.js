function f() {
    return this.a;
  }
  
  var g = f.bind({a: 'azerty'});
  console.log(g()); // azerty
  
  var h = g.bind({a: 'yoo'}); // bind only works once!
  console.log(h()); // azerty
  
  var o = {a: 37, f: f, g: g, h: h};
  console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
  