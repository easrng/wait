let lastWaited = new Date();
try {
  lastWaited = new Date(localStorage.getItem("lastWaited"));
  localStorage.setItem("lastWaited", new Date().toJSON());
} catch (e) {}
if (new Date() - lastWaited > 1000 * 60 * 60 * 24 * 2) {
  document.documentElement.textContent=""
  document.open();
  document.write(String.raw`<head><title>Just a moment...</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body>:not(.main-wrapper){display:none !important;}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{display:flex;flex-direction:column;min-height:100vh}a{transition:color .15s ease;background-color:transparent;text-decoration:none;color:#0051c3}a:hover{text-decoration:underline;color:#ee730a}.main-content{margin:8rem auto;width:100%;max-width:60rem}@media (max-width:720px){.main-content{margin-top:4rem}}.footer,.main-content{padding-right:1.5rem;padding-left:1.5rem}.main-wrapper{display:flex;flex:1;flex-direction:column;align-items:center}.spacer{margin:2rem 0}.h1{line-height:3.75rem;font-size:2.5rem;font-weight:500}.h2{line-height:2.25rem;font-size:1.5rem;font-weight:500}.body-text{line-height:1.25rem;font-size:1rem;font-weight:400}@media (max-width:720px){.h1{line-height:1.75rem;font-size:1.5rem}.h2{line-height:1.5rem;font-size:1.25rem}}.text-center{text-align:center}.footer{margin:0 auto;width:100%;max-width:60rem;line-height:1.125rem;font-size:.75rem}.footer-inner{border-top:1px solid #d9d9d9;padding-top:1rem;padding-bottom:1rem}.clearfix:after{display:table;clear:both;content:""}.diagnostic-wrapper{margin-bottom:.5rem}.footer .ray-id{text-align:center}.footer .ray-id code{font-family:monaco,courier,monospace}.zone-name-title{overflow-wrap:break-word}@media (max-width:720px){.diagnostic-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.clearfix:after{display:initial;clear:none;text-align:center;content:none}.zone-name-title{margin-bottom:1rem}}.loading-spinner{height:76.391px}.lds-ring{display:inline-block;position:relative;width:1.875rem;height:1.875rem}.lds-ring div{box-sizing:border-box;display:block;position:absolute;border:.3rem solid #595959;border-radius:50%;border-color:#595959 transparent transparent transparent;width:1.875rem;height:1.875rem;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite}.lds-ring div:nth-child(1){animation-delay:-.45s}.lds-ring div:nth-child(2){animation-delay:-.3s}.lds-ring div:nth-child(3){animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.main-wrapper,body{display:block}}@media (prefers-color-scheme:dark){body{background-color:#222;color:#d9d9d9}a{color:#fff}a:hover{text-decoration:underline;color:#ee730a}.lds-ring div{border-color:#999 transparent transparent transparent}}</style></head><body><div class="main-wrapper" role="main"><div class="main-content"><h1 class="zone-name-title h1">${new Option(location.hostname).innerHTML}</h1><h2 class="h2" id="challenge-running">Waiting for the inevitable passage of time.</h2><div id="challenge-spinner" class="spacer loading-spinner"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div></div></div></body>`);
  document.close();
  setTimeout(()=>location.reload(),3000)
}
