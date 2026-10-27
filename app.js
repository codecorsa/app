const dialog=document.getElementById('installDialog');
const toast=document.getElementById('toast');
function showToast(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.getElementById('installHelpBtn').addEventListener('click',()=>dialog.showModal());
document.getElementById('closeDialog').addEventListener('click',()=>dialog.close());
document.getElementById('okDialog').addEventListener('click',()=>dialog.close());
document.getElementById('moreBtn').addEventListener('click',()=>dialog.showModal());
document.getElementById('shareBtn').addEventListener('click',async()=>{
  const shareData={title:'Codecorsa',text:'Viste tus espacios con estilo. Conoce Codecorsa.',url:'https://codecorsa.github.io/app/'};
  if(navigator.share){try{await navigator.share(shareData)}catch(e){}}
  else if(navigator.clipboard){try{await navigator.clipboard.writeText(shareData.url);showToast('¡Enlace copiado para compartir!')}catch(e){showToast(shareData.url)}}
  else{showToast('Visita codecorsa.github.io/app/')}
});
if('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
let installPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;});
document.getElementById('installHelpBtn').addEventListener('dblclick',async()=>{
  if(installPrompt){installPrompt.prompt();installPrompt=null;}
});
