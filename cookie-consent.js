<script>
  if(!localStorage.getItem('cookieSeen')){
    const banner = document.createElement('div');
    banner.innerHTML = `<div style="position:fixed; bottom:0; width:100%; background:#1a1a1a; color:#fff; padding:15px; text-align:center; border-top:2px solid #00ffcc; z-index:9999;">
      SteveAI uses cookies for ads and analytics. <button onclick="this.parentElement.style.display='none'; localStorage.setItem('cookieSeen','true')" style="background:#00ffcc; border:none; padding:5px 15px; cursor:pointer; margin-left:10px; font-weight:bold;">Got it!</button>
    </div>`;
    document.body.appendChild(banner);
  }
</script>
