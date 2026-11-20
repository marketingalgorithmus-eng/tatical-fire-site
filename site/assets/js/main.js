/* TATICAL FIRE — scripts compartilhados (header, footer, animações) */
(function(){
  var page = document.body.getAttribute('data-page') || '';
  var WHATS = '5549900000000'; // TODO: número real do cliente
  window.TF_WHATS = WHATS;

  var I = {
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.3c0-.1-.2-.2-.4-.3z"/></svg>',
    target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1v5M12 18v5M1 12h5M18 12h5"/></svg>'
  };
  window.TF_ICONS = I;

  var links = [
    ['index.html','Início','home'],
    ['cursos.html','Cursos','cursos'],
    ['sobre.html','Quem Somos','sobre'],
    ['contato.html','Contato','contato'],
    ['cadastro.html','Cadastro','cadastro']
  ];

  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<div class="topbar"><div class="container">'+
      '<span>Instrutor credenciado pela <b>Polícia Federal</b></span>'+
      '<span>Xanxerê · SC &nbsp;/&nbsp; 26°52\'S 52°24\'W</span>'+
    '</div></div>'+
    '<div class="container nav">'+
      '<a class="brand" href="index.html"><img src="assets/img/logo.webp" alt="Tatical Fire"><span class="brand-name">Tatical<b>Fire</b><small>Armamento e Tiro</small></span></a>'+
      '<nav class="nav-links">'+links.map(function(l){return '<a href="'+l[0]+'"'+(page===l[2]?' class="active"':'')+'>'+l[1]+'</a>';}).join('')+'</nav>'+
      '<div class="nav-cta">'+
        '<a class="mono" href="aluno.html"><b>Área</b> do aluno</a>'+
        '<a class="btn btn-sm" href="cadastro.html">Inscreva-se</a>'+
        '<button class="burger" aria-label="Abrir menu"><span></span></button>'+
      '</div>'+
    '</div>';
  document.body.prepend(header);

  var mm = document.createElement('div');
  mm.className = 'mobile-menu';
  mm.innerHTML = links.concat([['aluno.html','Área do Aluno','aluno']]).map(function(l,i){return '<a href="'+l[0]+'"><span>0'+(i+1)+'</span>'+l[1]+'</a>';}).join('');
  document.body.appendChild(mm);
  header.querySelector('.burger').addEventListener('click',function(){
    mm.classList.toggle('open');
    document.body.style.overflow = mm.classList.contains('open') ? 'hidden' : '';
  });

  function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // footer
  var f = document.querySelector('footer[data-auto]');
  if(f){
    f.className = 'site-footer';
    f.innerHTML =
      '<div class="container">'+
        '<div class="foot-grid">'+
          '<div class="foot-brand"><a class="brand" href="index.html"><img src="assets/img/logo.webp" alt=""><span class="brand-name">Tatical<b>Fire</b><small>Instrutor Cláudio</small></span></a>'+
            '<p>Treinamento é técnica, disciplina, segurança e repetição. Evolução começa com treinamento de verdade.</p>'+
            '<div class="socials"><a href="https://www.instagram.com/tatical.fire/" target="_blank" rel="noopener" aria-label="Instagram Tatical Fire">'+I.ig+'</a><a href="https://wa.me/'+WHATS+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+I.wa+'</a></div></div>'+
          '<div><h5>Navegação</h5><ul>'+links.map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>';}).join('')+'<li><a href="aluno.html">Área do Aluno</a></li></ul></div>'+
          '<div><h5>Cursos</h5><ul><li><a href="cursos.html#catalogo">Tiro Básico</a></li><li><a href="cursos.html#catalogo">Capacidade Técnica</a></li><li><a href="cursos.html#catalogo">Tiro Defensivo</a></li><li><a href="cursos.html#catalogo">Calibre 12</a></li><li><a href="cursos.html#catalogo">Tiro Feminino</a></li></ul></div>'+
          '<div><h5>Contato</h5><ul><li><a href="https://wa.me/'+WHATS+'" target="_blank" rel="noopener">WhatsApp (49) 9 0000-0000</a></li><li><a href="https://www.instagram.com/tatical.fire/" target="_blank" rel="noopener">@tatical.fire</a></li><li><a href="https://www.instagram.com/sgt.claudio/" target="_blank" rel="noopener">@sgt.claudio</a></li><li><span style="color:var(--muted)">Xanxerê · Santa Catarina</span></li></ul></div>'+
        '</div>'+
        '<div class="foot-big">Tatical Fire</div>'+
        '<div class="foot-bottom"><span>© '+new Date().getFullYear()+' Tatical Fire · Instrutor Cláudio. Todos os direitos reservados.</span><span class="mono">Confie na técnica</span></div>'+
      '</div>';
  }

  // emblema em traço (símbolos da logo desenhados) — usado nos blocos de chamada
  window.TF_emblem = function(){
    var cx=100, cy=92, pts=[];
    for(var k=0;k<16;k++){
      var a = (k*22.5-90)*Math.PI/180, r = k%2 ? 4.5 : (k%4===0 ? 26 : 13);
      pts.push((cx+r*Math.cos(a)).toFixed(2)+' '+(cy+r*Math.sin(a)).toFixed(2));
    }
    return '<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true">'+
      '<circle class="draw" style="--len:610" cx="100" cy="100" r="96" stroke-width="2"/>'+
      '<circle class="draw" style="--len:560" cx="100" cy="100" r="88" stroke-width=".8" opacity=".6"/>'+
      '<g class="spin"><circle cx="100" cy="100" r="66" stroke-width="1.6" stroke-dasharray="70 34" opacity=".9"/></g>'+
      '<path class="draw" style="--len:40" d="M100 6v26M6 92h30M164 92h30" stroke-width="2"/>'+
      '<path class="draw" style="--len:400" d="M100 30L163 146H37Z" stroke-width="2" stroke-linejoin="round"/>'+
      '<circle class="draw" style="--len:120" cx="100" cy="92" r="17" stroke-width="1.2"/>'+
      '<path class="star" d="M'+pts.join('L')+'Z" stroke="none"/>'+
      '<path class="draw" style="--len:80" d="M60 166h28M112 166h28" stroke-width="2"/>'+
    '</svg>';
  };
  document.querySelectorAll('.cta-box').forEach(function(box){
    var em = document.createElement('div'); em.className = 'cta-emblem'; em.innerHTML = TF_emblem();
    box.insertBefore(em, box.firstChild);
    var w = document.createElement('span'); w.className = 'cta-word'; w.setAttribute('aria-hidden','true'); w.textContent = 'Tatical Fire';
    box.appendChild(w);
  });

  // títulos: entrada palavra por palavra com desfoque (estilo Framer)
  function splitWords(el){
    var i = 0;
    (function walk(node){
      Array.prototype.slice.call(node.childNodes).forEach(function(n){
        if(n.nodeType === 3){
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function(part){
            if(!part) return;
            if(/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(' ')); return; }
            var s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = part; frag.appendChild(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if(n.nodeType === 1 && n.tagName !== 'BR' && n.tagName !== 'svg' && !n.classList.contains('squiggle')){ walk(n); }
      });
    })(el);
    el.classList.remove('reveal'); el.classList.add('split-words');
  }
  document.querySelectorAll('h1, h2.h2, h2.h1, blockquote').forEach(function(el){ if(!el.closest('.modal,[data-nosplit]')) splitWords(el); });

  // reveal
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12, rootMargin:'0px 0px -40px 0px'});
  window.TF_observe = function(root){ (root||document).querySelectorAll('.reveal:not(.in), .split-words:not(.in)').forEach(function(el){io.observe(el);}); };
  window.TF_observe();

  // contadores
  var co = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var el = e.target, end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1]||'').length, t0 = null;
      function step(t){ if(!t0) t0=t; var p=Math.min((t-t0)/1600,1), v=end*(1-Math.pow(1-p,3)); el.textContent = v.toFixed(dec).replace('.',','); if(p<1) requestAnimationFrame(step); }
      requestAnimationFrame(step); co.unobserve(el);
    });
  },{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(function(el){co.observe(el);});

  // marquee: duplica conteúdo para loop infinito
  document.querySelectorAll('.marquee-track').forEach(function(t){ t.innerHTML += t.innerHTML; });

  // toast
  window.TF_toast = function(msg){
    var t = document.querySelector('.toast');
    if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
    t.innerHTML = I.target.replace('<svg','<svg width="20" height="20"') + '<span>'+msg+'</span>';
    t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(function(){t.classList.remove('show');},4200);
  };
})();
