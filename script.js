document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.sidebar .item');
  const sections = document.querySelectorAll('main .card');

  const playBtn = document.getElementById('playBtn');
  const installBtn = document.getElementById('installBtn');
  const status = document.getElementById('status');
  const progressBar = document.querySelector('.progress .bar');
  const logText = document.getElementById('logText');
  const usernameEl = document.getElementById('username');

  const overlay = document.getElementById('gameOverlay');
  const frame = document.getElementById('gameFrame');
  const closeBtn = document.getElementById('closeBtn');

  function appendLog(line){
    logText.textContent += '\n' + line;
    logText.parentElement.scrollTop = logText.parentElement.scrollHeight;
  }

  items.forEach(it => it.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    it.classList.add('active');
    const target = it.dataset.section;
    sections.forEach(s => {
      if (s.id === target) s.classList.remove('hidden'); else s.classList.add('hidden');
    });
  }));

  function openOverlay(){
    overlay.style.display = 'block';
    overlay.setAttribute('aria-hidden','false');
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeGame(){
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden','true');
    frame.src = '';
    status.textContent = 'Ready';
    playBtn.disabled = false;
    playBtn.focus();
    document.removeEventListener('keydown', onKeydown);
  }

  function onKeydown(e){ if (e.key === 'Escape') closeGame(); }

  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeGame(); });
  closeBtn.addEventListener('click', closeGame);

  playBtn.addEventListener('click', () => {
    const user = usernameEl.value.trim();
    if (!user) { status.textContent = 'Enter a username first 😅'; usernameEl.focus(); return; }
    status.textContent = 'Launching Minecraft...';
    playBtn.disabled = true;
    appendLog('Preparing game...');
    let p = 0;
    const t = setInterval(()=>{
      p += Math.floor(Math.random()*15)+5;
      if (p >= 100) { p = 100; clearInterval(t); status.textContent = 'Launched'; appendLog('Game launched successfully.'); }
      progressBar.style.width = p + '%';
    }, 350);

    setTimeout(()=>{
      frame.src = 'https://eaglercraft.com/mc/1.8.8/?username=' + encodeURIComponent(user);
      openOverlay();
    }, 900);
  });

  installBtn.addEventListener('click', () => {
    status.textContent = 'Installing...';
    appendLog('Installing required components...');
    setTimeout(()=>{ status.textContent = 'Ready'; appendLog('Install complete.'); }, 1400);
  });

  usernameEl.addEventListener('keydown', (e)=>{ if (e.key === 'Enter') playBtn.click(); });

});