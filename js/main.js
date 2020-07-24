
import FourD from '/js/vendor/fourd/fourd.js';
import 'regenerator-runtime/runtime';
import '../static/A Sketch P8-01.jpeg';
import '../static/A Sketch P8-02.jpeg';
import '../static/A Sketch P8-03.jpeg';
import '../static/A Sketch P8-04.jpeg';
import '../static/A Sketch P8-05.jpeg';

window.toggleSectionBody = function(elem){
  elem.parentNode
  .querySelectorAll('.section-body')
  .forEach(el => el.classList.toggle('hidden'));

  elem.parentNode.classList.toggle('active')
}

var $fourd = new FourD();
$fourd.init('#display', {
  border: '1px solid 0x007bff',
  width: 400,
  height: 400,
  background: 'rgba(1,1,1,1)'
});
$fourd.camera.position.z = -35;

var wFor = function(t){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t);
  });
};

var heart = async function(){
  var vopts = {
    cube: {size: 10, color: 0x8f1b99}
  }

  var eopts = {
    color: 0xff6347,
    strength: 1.0
  }

  // vertices
  var a = $fourd.graph.add_vertex(vopts);

  var b = $fourd.graph.add_vertex(vopts);
  var c = $fourd.graph.add_vertex(vopts);

  var d = $fourd.graph.add_vertex(vopts);
  var e = $fourd.graph.add_vertex(vopts);
  var f = $fourd.graph.add_vertex(vopts);

  var g = $fourd.graph.add_vertex(vopts);
  var h = $fourd.graph.add_vertex(vopts);

  // edges
  var ab = $fourd.graph.add_edge(a, b, eopts);
  await wFor(100);
  var ac = $fourd.graph.add_edge(a, c, eopts);
  await wFor(100);
  var bc = $fourd.graph.add_edge(b, c, eopts);
  await wFor(100);

  var bd = $fourd.graph.add_edge(b, d, eopts);
  await wFor(100);
  var be = $fourd.graph.add_edge(b, e, eopts);
  await wFor(100);
  var ce = $fourd.graph.add_edge(c, e, eopts);
  await wFor(100);
  var cf = $fourd.graph.add_edge(c, f, eopts);
  await wFor(100);

  var de = $fourd.graph.add_edge(d, e, eopts);
  await wFor(100);
  var ef = $fourd.graph.add_edge(e, f, eopts);
  await wFor(100);

  var dg = $fourd.graph.add_edge(d, g, eopts);
  await wFor(100);
  var eg = $fourd.graph.add_edge(e, g, eopts);
  await wFor(100);
  var eh = $fourd.graph.add_edge(e, h, eopts);
  await wFor(100);
  var fh = $fourd.graph.add_edge(f, h, eopts);
  await wFor(100);


  $fourd.toggle_controls('orbit', e)
}

window.heart = heart;