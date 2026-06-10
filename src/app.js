// ==========================================
// Dompetku — App Logic (src/app.js)
// ==========================================

// ============ CONFIG ============
const USERS = [
  { username: 'Shandy', password: 'shandy123' },
  { username: 'Khanis', password: 'khanis123' },
];
const KAT_IN = ['Gaji','Freelance','Bisnis','Investasi','Hadiah','Lainnya'];
const KAT_OUT = ['Makanan','Transportasi','Belanja','Tagihan','Kesehatan','Hiburan','Pendidikan','Lainnya'];

const SVG_ICONS = {
  Gaji: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  Freelance: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  Bisnis: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"/></svg>`,
  Investasi: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>`,
  Hadiah: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0H4v13a2 2 0 002 2h12a2 2 0 002-2V8h-8z"/></svg>`,
  Makanan: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2c1.657 0 3 1.254 3 2.8v4.4c0 1.215-.81 2.24-1.92 2.62v7.18c0 .552-.448 1-1.08 1h-.001c-.63 0-1.079-.448-1.079-1v-7.18c-1.11-.38-1.92-1.405-1.92-2.62V4.8C9 3.254 10.343 2 12 2zM19 8h-1V3a1 1 0 00-1-1h-1a1 1 0 00-1 1v5h-1M5 8h1V3a1 1 0 011-1h1a1 1 0 011 1v5h1"/></svg>`,
  Transportasi: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 18h14M5 18a2 2 0 100-4h14a2 2 0 100 4M5 14l1-8h12l1 8M9 9h.01M15 9h.01"/></svg>`,
  Belanja: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  Tagihan: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  Kesehatan: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  Hiburan: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/></svg>`,
  Pendidikan: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4 1.253"/></svg>`,
  Lainnya: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
  Tabungan: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
  Tarik: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"/></svg>`
};

const KAT_ICON = {
  Gaji: SVG_ICONS.Gaji,
  Freelance: SVG_ICONS.Freelance,
  Bisnis: SVG_ICONS.Bisnis,
  Investasi: SVG_ICONS.Investasi,
  Hadiah: SVG_ICONS.Hadiah,
  Makanan: SVG_ICONS.Makanan,
  Transportasi: SVG_ICONS.Transportasi,
  Belanja: SVG_ICONS.Belanja,
  Tagihan: SVG_ICONS.Tagihan,
  Kesehatan: SVG_ICONS.Kesehatan,
  Hiburan: SVG_ICONS.Hiburan,
  Pendidikan: SVG_ICONS.Pendidikan,
  Lainnya: SVG_ICONS.Lainnya
};
const BULAN = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const BULAN_S = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const HARI = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const PRESET_COLORS = ['#247BD0','#FF6584','#2DD4BF','#FBBF24','#F87171','#38BDF8','#A78BFA','#FB923C'];

// ============ STATE ============
const S = {
  user: null, scriptUrl: '', page: 'beranda', prevPage: null,
  tabungan: [], txTabungan: [], keuangan: [],
  selTab: null, kFilter: 'bulan_ini', kTipe: 'pemasukan',
  rFilter: 'semua', rSearch: '', rPage: 0, rItems: [],
  delCb: null, charts: {}, _rTimer: null,
};

// ============ UTILS ============
const $ = id => document.getElementById(id);
const fmtRp = n => 'Rp ' + Math.abs(Number(n)||0).toLocaleString('id-ID');
const fmtDate = d => { if(!d)return'-'; const x=new Date(d); return isNaN(x)?d:`${x.getDate()} ${BULAN_S[x.getMonth()]} ${x.getFullYear()}`; };
const fmtDateGroup = d => { if(!d)return'-'; const x=new Date(d),t=new Date(); t.setHours(0,0,0,0); const y=new Date(x);y.setHours(0,0,0,0); const df=Math.floor((t-y)/864e5); if(df===0)return'Hari Ini'; if(df===1)return'Kemarin'; return`${x.getDate()} ${BULAN[x.getMonth()]} ${x.getFullYear()}`; };
const today = () => { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
const uid = () => crypto.randomUUID ? crypto.randomUUID() : 'id-'+Date.now()+'-'+Math.random().toString(36).substr(2,9);
const isMonth = d => { const x=new Date(d),n=new Date(); return x.getMonth()===n.getMonth()&&x.getFullYear()===n.getFullYear(); };
const withinM = (d,m) => new Date(d)>=new Date(new Date().setMonth(new Date().getMonth()-m));
const isYear = d => new Date(d).getFullYear()===new Date().getFullYear();
const clamp = (v,a,b) => Math.min(Math.max(v,a),b);

const isSameDay = (dateStr, targetDate) => {
  if (!dateStr) return false;
  const d1 = new Date(dateStr);
  if (isNaN(d1)) return false;
  return d1.getFullYear() === targetDate.getFullYear() &&
         d1.getMonth() === targetDate.getMonth() &&
         d1.getDate() === targetDate.getDate();
};

const toLocalDateStr = d => {
  if (!d) return '';
  const x = new Date(d);
  if (isNaN(x)) return d;
  return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`;
};

// ============ TOAST ============
function toast(msg, type='success') {
  const c = $('toast-container');
  const cls = {success:'bg-success',error:'bg-danger',warning:'bg-warning',info:'bg-primary'};
  const ico = {success:'✓',error:'✕',warning:'⚠',info:'ℹ'};
  const el = document.createElement('div');
  el.className = `${cls[type]||cls.info} text-white rounded-2xl px-4 py-3 shadow-card-hover flex items-center gap-3 animate-toast-in pointer-events-auto text-sm font-semibold`;
  el.innerHTML = `<span class="text-lg">${ico[type]||ico.info}</span><span class="flex-1">${msg}</span>`;
  c.appendChild(el);
  setTimeout(() => { el.style.animation='toast-out 0.3s ease-in forwards'; setTimeout(()=>el.remove(),300); }, 3000);
}

// ============ SKELETON ============
function skeleton(el, type='cards') {
  const target = typeof el === 'string' ? $(el) : el;
  if (!target) return;
  let h = '';
  if (type==='cards') for(let i=0;i<3;i++) h+=`<div class="bg-white rounded-2xl p-5 shadow-card mb-3"><div class="skeleton h-4 w-2/3 mb-3"></div><div class="skeleton h-6 w-1/2 mb-3"></div><div class="skeleton h-3 w-full"></div></div>`;
  else if (type==='summary') { h+=`<div class="grid grid-cols-2 gap-3 mb-5">${'<div class="bg-white rounded-2xl p-4 shadow-card"><div class="skeleton h-3 w-1/2 mb-2"></div><div class="skeleton h-6 w-3/4"></div></div>'.repeat(4)}</div><div class="bg-white rounded-2xl p-5 shadow-card"><div class="skeleton h-40 w-full"></div></div>`; }
  target.innerHTML = h;
}

// ============ API ============
async function api(action, data={}) {
  if (!S.scriptUrl) { toast('URL Apps Script belum dikonfigurasi','error'); return {success:false}; }
  try {
    const r = await fetch(S.scriptUrl, {
      method:'POST', headers:{'Content-Type':'text/plain;charset=utf-8'},
      body: JSON.stringify({action, user_id:S.user, ...data}),
    });
    return await r.json();
  } catch(e) { console.error('API:',e); toast('Gagal menghubungi server','error'); return {success:false,error:e.message}; }
}

// ============ SCREENS ============
function showScreen(s) {
  ['screen-setup','screen-login','screen-main'].forEach(id => { const el=$(id); el.classList.add('hidden'); el.classList.remove('flex'); });
  const el = $('screen-'+s);
  el.classList.remove('hidden');
  if (s!=='main') el.classList.add('flex');
  if (s==='setup') $('setup-url').value = localStorage.getItem('dompetku_scriptUrl')||'';
  if (s==='main') { updateHeader(); nav('beranda'); }
}

function updateHeader() {
  const ini = S.user ? S.user.charAt(0).toUpperCase() : '?';
  const now = new Date();
  const dateStr = `${HARI[now.getDay()]}, ${now.getDate()} ${BULAN[now.getMonth()]} ${now.getFullYear()}`;
  // Mobile header
  $('header-avatar').textContent = ini;
  $('header-greeting').textContent = `Halo, ${S.user}!`;
  $('header-date').textContent = dateStr;
  // Desktop header
  const dg = $('desktop-greeting'), dd = $('desktop-date');
  if (dg) dg.textContent = `Halo, ${S.user}!`;
  if (dd) dd.textContent = dateStr;
  // Desktop sidebar
  $('sidebar-avatar').textContent = ini;
  $('sidebar-username').textContent = S.user;
}

// ============ SETUP ============
async function saveSetup() {
  const url = $('setup-url').value.trim();
  const err = $('setup-url-error');
  if (!url||!url.startsWith('https://')) { err.textContent='Masukkan URL valid (https://)'; err.classList.remove('hidden'); return; }
  err.classList.add('hidden');
  btnLoad('setup-btn-text','setup-btn-spinner',true);
  try {
    const r = await fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'ping'})});
    const j = await r.json();
    if(j.success){ localStorage.setItem('dompetku_scriptUrl',url); S.scriptUrl=url; toast('Koneksi berhasil!'); showScreen('login'); }
    else { err.textContent='Server error: '+(j.error||'Unknown'); err.classList.remove('hidden'); }
  } catch(e){ err.textContent='Gagal menghubungi server. Cek URL.'; err.classList.remove('hidden'); }
  btnLoad('setup-btn-text','setup-btn-spinner',false);
}

// ============ AUTH ============
function doLogin() {
  const u=$('login-username').value.trim(), p=$('login-password').value, e=$('login-error');
  if(!u||!p){ e.textContent='Username dan password harus diisi'; e.classList.remove('hidden'); return; }
  const found = USERS.find(x=>x.username.toLowerCase()===u.toLowerCase()&&x.password===p);
  if(!found){ e.textContent='Username atau password salah'; e.classList.remove('hidden'); return; }
  e.classList.add('hidden'); S.user=found.username; localStorage.setItem('dompetku_user',found.username);
  showScreen('main'); loadAll();
}
function doLogout() {
  S.user=null; localStorage.removeItem('dompetku_user');
  closeAllModals();
  S.tabungan=[]; S.txTabungan=[]; S.keuangan=[]; S.selTab=null; S.rItems=[];
  $('login-username').value=''; $('login-password').value='';
  showScreen('login'); toast('Berhasil keluar','info');
}
function togglePw() {
  const inp=$('login-password'), ic=$('eye-icon');
  if(inp.type==='password'){ inp.type='text'; ic.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"/>'; }
  else { inp.type='password'; ic.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>'; }
}

// ============ NAVIGATION ============
function nav(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = $('page-'+page); if(el) el.classList.add('active');
  // Mobile nav
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const navPage = (page==='tabungan-detail') ? 'tabungan' : page;
  document.querySelectorAll(`.nav-item[data-nav="${navPage}"]`).forEach(n=>n.classList.add('active'));
  // Desktop sidebar
  document.querySelectorAll('.sidebar-nav-btn').forEach(b=>{ b.classList.remove('bg-primary/10','!text-primary'); if(b.dataset.nav===navPage){b.classList.add('bg-primary/10','!text-primary');} });
  // FAB
  const fab=$('fab-btn');
  if(page==='tabungan'||page==='keuangan'){ fab.classList.remove('hidden'); fab.classList.add('flex'); } else { fab.classList.add('hidden'); fab.classList.remove('flex'); }
  S.prevPage=S.page; S.page=page;
  render(page);
}

function render(page) {
  switch(page){
    case 'beranda': renderBeranda(); break;
    case 'tabungan': renderTabungan(); break;
    case 'tabungan-detail': renderDetail(); break;
    case 'keuangan': renderKeuangan(); break;
    case 'riwayat': renderRiwayat(); break;
  }
}

// ============ DATA LOADING ============
async function loadAll() {
  skeleton('page-beranda','summary');
  const [tRes, kRes] = await Promise.all([api('getTabungan'), api('getKeuangan')]);
  if(tRes.success && Array.isArray(tRes.data)) {
    S.tabungan = tRes.data;
    const txPs = S.tabungan.map(t=>api('getTransaksiTabungan',{tabungan_id:t.id}));
    const txRs = await Promise.all(txPs);
    S.txTabungan = [];
    txRs.forEach((r,i)=>{
      if(r.success && Array.isArray(r.data)) {
        r.data.forEach(tx=>{
          if (S.tabungan[i]) {
            tx.tabungan_id = S.tabungan[i].id;
            tx.tabungan_nama = S.tabungan[i].nama_tabungan;
          }
          S.txTabungan.push(tx);
        });
      }
    });
  }
  if(kRes.success && Array.isArray(kRes.data)) S.keuangan = kRes.data;
  renderBeranda();
}

// ============ BERANDA ============
function renderBeranda() {
  const el = $('page-beranda');
  const totalTab = S.txTabungan.reduce((s,tx)=>s+(tx.tipe==='setor'?Number(tx.jumlah):-Number(tx.jumlah)),0);
  const mK = S.keuangan.filter(k=>isMonth(k.tanggal));
  const tIn = mK.filter(k=>k.tipe==='pemasukan').reduce((s,k)=>s+Number(k.jumlah),0);
  const tOut = mK.filter(k=>k.tipe==='pengeluaran').reduce((s,k)=>s+Number(k.jumlah),0);
  const saldo = tIn - tOut;
  const now = new Date();

  el.innerHTML = `
    <div class="grid grid-cols-2 gap-3 mb-5 md:grid-cols-4">
      <div class="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-4 text-white shadow-card col-span-2 md:col-span-4 lg:col-span-2">
        <p class="text-xs font-medium opacity-80 mb-1">Total Keseluruhan Tabungan</p>
        <p class="text-2xl font-extrabold">${fmtRp(totalTab)}</p>
        <p class="text-xs opacity-70 mt-1">${S.tabungan.length} tabungan aktif</p>
      </div>
      <div class="bg-white rounded-2xl p-4 shadow-card col-span-2 md:col-span-4 lg:col-span-2">
        <div class="flex items-center justify-between h-full">
          <div>
            <p class="text-xs text-ink-muted mb-1">Saldo Bulan Ini</p>
            <p class="text-xl font-extrabold ${saldo>=0?'text-success':'text-danger'}">${saldo>=0?'+':'-'} ${fmtRp(Math.abs(saldo))}</p>
          </div>
          <div class="text-xs text-ink-muted self-start">${BULAN[now.getMonth()]} ${now.getFullYear()}</div>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-4 shadow-card col-span-1 md:col-span-2 lg:col-span-2">
        <div class="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center mb-2"><svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/></svg></div>
        <p class="text-xs text-ink-muted mb-0.5">Pemasukan</p>
        <p class="text-sm font-bold text-success">${fmtRp(tIn)}</p>
      </div>
      <div class="bg-white rounded-2xl p-4 shadow-card col-span-1 md:col-span-2 lg:col-span-2">
        <div class="w-8 h-8 rounded-lg bg-danger/10 flex items-center justify-center mb-2"><svg class="w-4 h-4 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"/></svg></div>
        <p class="text-xs text-ink-muted mb-0.5">Pengeluaran</p>
        <p class="text-sm font-bold text-danger">${fmtRp(tOut)}</p>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div class="bg-white rounded-2xl p-5 shadow-card mb-4">
        <h3 class="text-sm font-bold text-ink mb-3">Aktivitas Tabungan (7 Hari)</h3>
        <div style="height:180px"><canvas id="chart-tab7"></canvas></div>
      </div>
      <div class="bg-white rounded-2xl p-5 shadow-card mb-4">
        <h3 class="text-sm font-bold text-ink mb-3">Pengeluaran per Kategori</h3>
        <div style="height:200px"><canvas id="chart-donut"></canvas></div>
      </div>
    </div>
    <div class="bg-white rounded-2xl p-5 shadow-card mb-3">
      <h3 class="text-sm font-bold text-ink mb-3">Aktivitas Terbaru</h3>
      ${recentList()}
    </div>`;
  setTimeout(()=>{ chartTab7(); chartDonut(); },100);
}

function recentList() {
  const items = [];
  S.txTabungan.forEach(tx=>items.push({tipe:tx.tipe,jml:Number(tx.jumlah),note:tx.catatan||tx.tabungan_nama||'-',label:tx.tabungan_nama||'Tabungan',tgl:tx.tanggal,icon:tx.tipe==='setor'?SVG_ICONS.Tabungan:SVG_ICONS.Tarik}));
  S.keuangan.forEach(k=>items.push({tipe:k.tipe,jml:Number(k.jumlah),note:k.catatan||'-',label:k.kategori,tgl:k.tanggal,icon:KAT_ICON[k.kategori]||SVG_ICONS.Lainnya}));
  items.sort((a,b)=>new Date(b.tgl)-new Date(a.tgl));
  const top5 = items.slice(0,5);
  if(!top5.length) return '<p class="text-sm text-ink-muted text-center py-6">Belum ada aktivitas</p>';
  return top5.map((it,i)=>`
    <div class="flex items-center gap-3 py-2.5 ${i<top5.length-1?'border-b border-surface-dim':''}">
      <div class="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center shrink-0">${it.icon}</div>
      <div class="flex-1 min-w-0"><p class="text-sm font-semibold text-ink truncate">${it.label}</p><p class="text-xs text-ink-muted truncate">${it.note}</p></div>
      <div class="text-right shrink-0"><p class="text-sm font-bold ${it.tipe==='pemasukan'||it.tipe==='setor'?'text-success':'text-danger'}">${it.tipe==='pemasukan'||it.tipe==='setor'?'+':'-'} ${fmtRp(it.jml)}</p><p class="text-[10px] text-ink-light">${fmtDate(it.tgl)}</p></div>
    </div>`).join('');
}

// ============ CHARTS ============
function chartTab7() {
  const c=$('chart-tab7'); if(!c||typeof Chart==='undefined') return;
  if(S.charts.t7) S.charts.t7.destroy();
  const labels=[],data=[];
  for(let i=6;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); labels.push(d.getDate()+' '+BULAN_S[d.getMonth()]); data.push(S.txTabungan.filter(tx=>isSameDay(tx.tanggal, d) && tx.tipe==='setor').reduce((s,tx)=>s+Number(tx.jumlah),0)); }
  S.charts.t7 = new Chart(c,{type:'bar',data:{labels,datasets:[{data,backgroundColor:'rgba(36,123,208,0.2)',borderColor:'#247BD0',borderWidth:2,borderRadius:8,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{font:{family:'Plus Jakarta Sans',size:10},color:'#9CA3AF',callback:v=>v>=1e6?(v/1e6)+'jt':v>=1e3?(v/1e3)+'rb':v},grid:{color:'rgba(0,0,0,0.04)'}},x:{ticks:{font:{family:'Plus Jakarta Sans',size:10},color:'#9CA3AF'},grid:{display:false}}}}});
}
function chartDonut() {
  const c=$('chart-donut'); if(!c||typeof Chart==='undefined') return;
  if(S.charts.dn) S.charts.dn.destroy();
  const exp=S.keuangan.filter(k=>k.tipe==='pengeluaran'&&isMonth(k.tanggal));
  const byCat={}; exp.forEach(k=>{byCat[k.kategori]=(byCat[k.kategori]||0)+Number(k.jumlah)});
  const labs=Object.keys(byCat),vals=Object.values(byCat);
  if(!labs.length){ const ctx=c.getContext('2d');ctx.font='14px Plus Jakarta Sans';ctx.fillStyle='#9CA3AF';ctx.textAlign='center';ctx.fillText('Belum ada data',c.width/2,c.height/2); return; }
  S.charts.dn = new Chart(c,{type:'doughnut',data:{labels:labs,datasets:[{data:vals,backgroundColor:PRESET_COLORS.slice(0,labs.length),borderWidth:0,spacing:2,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom',labels:{padding:12,usePointStyle:true,pointStyleWidth:8,font:{family:'Plus Jakarta Sans',size:11},color:'#6B7280'}}}}});
}
function chartKBar() {
  const c=$('chart-kbar'); if(!c||typeof Chart==='undefined') return;
  if(S.charts.kb) S.charts.kb.destroy();
  const labs=[],dIn=[],dOut=[];
  for(let i=5;i>=0;i--){ const d=new Date();d.setMonth(d.getMonth()-i);const m=d.getMonth(),y=d.getFullYear(); labs.push(BULAN_S[m]); dIn.push(S.keuangan.filter(k=>k.tipe==='pemasukan'&&new Date(k.tanggal).getMonth()===m&&new Date(k.tanggal).getFullYear()===y).reduce((s,k)=>s+Number(k.jumlah),0)); dOut.push(S.keuangan.filter(k=>k.tipe==='pengeluaran'&&new Date(k.tanggal).getMonth()===m&&new Date(k.tanggal).getFullYear()===y).reduce((s,k)=>s+Number(k.jumlah),0)); }
  S.charts.kb = new Chart(c,{type:'bar',data:{labels:labs,datasets:[{label:'Pemasukan',data:dIn,backgroundColor:'rgba(45,212,191,0.3)',borderColor:'#2DD4BF',borderWidth:2,borderRadius:6,borderSkipped:false},{label:'Pengeluaran',data:dOut,backgroundColor:'rgba(248,113,113,0.3)',borderColor:'#F87171',borderWidth:2,borderRadius:6,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{padding:12,usePointStyle:true,pointStyleWidth:8,font:{family:'Plus Jakarta Sans',size:11},color:'#6B7280'}}},scales:{y:{beginAtZero:true,ticks:{font:{family:'Plus Jakarta Sans',size:10},color:'#9CA3AF',callback:v=>v>=1e6?(v/1e6)+'jt':v>=1e3?(v/1e3)+'rb':v},grid:{color:'rgba(0,0,0,0.04)'}},x:{ticks:{font:{family:'Plus Jakarta Sans',size:10},color:'#9CA3AF'},grid:{display:false}}}}});
}
function chartKDonut() {
  const c=$('chart-kdonut'); if(!c||typeof Chart==='undefined') return;
  if(S.charts.kd) S.charts.kd.destroy();
  const filt=filteredK().filter(k=>k.tipe==='pengeluaran');
  const byCat={}; filt.forEach(k=>{byCat[k.kategori]=(byCat[k.kategori]||0)+Number(k.jumlah)});
  const labs=Object.keys(byCat),vals=Object.values(byCat);
  if(!labs.length){ const ctx=c.getContext('2d');ctx.font='14px Plus Jakarta Sans';ctx.fillStyle='#9CA3AF';ctx.textAlign='center';ctx.fillText('Belum ada data',c.width/2,c.height/2); return; }
  S.charts.kd = new Chart(c,{type:'doughnut',data:{labels:labs,datasets:[{data:vals,backgroundColor:PRESET_COLORS.slice(0,labs.length),borderWidth:0,spacing:2,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom',labels:{padding:12,usePointStyle:true,pointStyleWidth:8,font:{family:'Plus Jakarta Sans',size:11},color:'#6B7280'}}}}});
}

// ============ TABUNGAN ============
function tabTotal(id) { return S.txTabungan.filter(tx=>tx.tabungan_id===id).reduce((s,tx)=>s+(tx.tipe==='setor'?Number(tx.jumlah):-Number(tx.jumlah)),0); }

function renderTabungan() {
  const el=$('page-tabungan');
  if(!S.tabungan.length){ el.innerHTML=`<div class="text-center py-16"><div class="w-20 h-20 rounded-3xl bg-primary/10 mx-auto mb-4 flex items-center justify-center text-primary"><svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg></div><h3 class="text-lg font-bold text-ink mb-1">Belum Ada Tabungan</h3><p class="text-sm text-ink-muted mb-6">Mulai menabung untuk tujuanmu!</p><button onclick="openAddTab()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-sm shadow-fab active:scale-[0.98] transition-all cursor-pointer">+ Tambah Tabungan</button></div>`; return; }
  let h = '<h2 class="text-lg font-bold text-ink mb-4">Tabunganku</h2><div class="md:grid md:grid-cols-2 md:gap-4">';
  S.tabungan.forEach(t => {
    const tot=tabTotal(t.id), tgt=Number(t.target), pct=tgt>0?clamp(Math.round(tot/tgt*100),0,100):0, col=t.warna||'#247BD0';
    h+=`<div onclick="openDetail('${t.id}')" class="bg-white rounded-2xl p-5 shadow-card mb-3 cursor-pointer active:scale-[0.98] transition-transform">
      <div class="flex items-center justify-between mb-3"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background:${col}20;color:${col}">${SVG_ICONS.Tabungan}</div><div><p class="text-sm font-bold text-ink">${t.nama_tabungan}</p><p class="text-xs text-ink-muted">Target: ${fmtRp(tgt)}</p></div></div><span class="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style="background:${col}20;color:${col}">${pct}%</span></div>
      <div class="w-full h-2.5 bg-surface-dim rounded-full overflow-hidden"><div class="progress-fill h-full rounded-full" style="width:${pct}%;--bar-from:${col};--bar-to:${col}CC"></div></div>
      <div class="flex items-center justify-between mt-2"><span class="text-xs text-ink-muted">Terkumpul</span><span class="text-sm font-bold" style="color:${col}">${fmtRp(tot)}</span></div></div>`;
  });
  h+='</div>';
  el.innerHTML = h;
}

function openDetail(id) { S.selTab=S.tabungan.find(t=>t.id===id); if(S.selTab) nav('tabungan-detail'); }

function renderDetail() {
  const t=S.selTab; if(!t){nav('tabungan');return;}
  const el=$('page-tabungan-detail'), tot=tabTotal(t.id), tgt=Number(t.target), pct=tgt>0?clamp(Math.round(tot/tgt*100),0,100):0, rem=Math.max(tgt-tot,0), col=t.warna||'#247BD0';
  const txs=S.txTabungan.filter(tx=>tx.tabungan_id===t.id).sort((a,b)=>new Date(b.tanggal)-new Date(a.tanggal));
  
  let h=`<button onclick="nav('tabungan')" class="flex items-center gap-2 text-ink-muted text-sm font-semibold mb-4 active:scale-95 transition-transform cursor-pointer"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>Kembali</button>`;
  
  h += `<div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">`;
  
  // Left Column
  h += `
    <div class="lg:col-span-5">
      <div class="rounded-2xl p-5 mb-4 shadow-card" style="background:linear-gradient(135deg,${col},${col}DD)">
        <div class="flex items-center justify-between mb-4">
          <div><p class="text-white/70 text-xs font-medium mb-1">Tabungan</p><h3 class="text-white text-lg font-bold">${t.nama_tabungan}</h3></div>
          <div class="flex gap-2">
            <button onclick="openEditTab()" class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
            <button onclick="reqDelTab('${t.id}')" class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button>
          </div>
        </div>
        <div class="text-center mb-4"><p class="text-white text-3xl font-extrabold">${fmtRp(tot)}</p><p class="text-white/60 text-xs mt-1">dari target ${fmtRp(tgt)}</p></div>
        <div class="w-full h-3 bg-white/20 rounded-full overflow-hidden mb-2"><div class="h-full bg-white rounded-full transition-all duration-700" style="width:${pct}%"></div></div>
        <div class="flex justify-between text-xs text-white/70"><span>${pct}% tercapai</span><span>Sisa: ${fmtRp(rem)}</span></div>
      </div>
      <div class="grid grid-cols-2 gap-3 mb-5">
        <button onclick="openSetorTarik('setor')" class="py-3.5 rounded-xl bg-success/10 text-success font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>Setor</button>
        <button onclick="openSetorTarik('tarik')" class="py-3.5 rounded-xl bg-danger/10 text-danger font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>Tarik</button>
      </div>
    </div>`;
  
  // Right Column
  h += `
    <div class="lg:col-span-7">
      <div class="bg-white rounded-2xl p-5 shadow-card"><h3 class="text-sm font-bold text-ink mb-3">Riwayat Transaksi</h3>`;
  if(!txs.length) h+='<p class="text-sm text-ink-muted text-center py-6">Belum ada transaksi</p>';
  else txs.forEach(tx=>{
    const isS=tx.tipe==='setor';
    h+=`<div class="flex items-center gap-3 py-3 border-b border-surface-dim last:border-b-0">
      <div class="w-10 h-10 rounded-xl ${isS?'bg-success/10':'bg-danger/10'} flex items-center justify-center shrink-0"><svg class="w-4 h-4 ${isS?'text-success':'text-danger'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${isS?'M7 11l5-5m0 0l5 5m-5-5v12':'M17 13l-5 5m0 0l-5-5m5 5V6'}"/></svg></div>
      <div class="flex-1 min-w-0"><p class="text-sm font-semibold text-ink">${isS?'Setor':'Tarik'}</p><p class="text-xs text-ink-muted truncate">${tx.catatan||'-'} · ${fmtDate(tx.tanggal)}</p></div>
      <p class="text-sm font-bold ${isS?'text-success':'text-danger'} shrink-0">${isS?'+':'-'} ${fmtRp(tx.jumlah)}</p>
      <div class="flex gap-1 shrink-0"><button onclick="openEditTx('${tx.id}')" class="w-8 h-8 rounded-lg bg-surface-muted flex items-center justify-center text-ink-muted active:scale-90 cursor-pointer"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
      <button onclick="reqDelTx('${tx.id}')" class="w-8 h-8 rounded-lg bg-surface-muted flex items-center justify-center text-ink-muted active:scale-90 cursor-pointer"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button></div></div>`;
  });
  h+='</div></div></div>';
  el.innerHTML=h;
}

// ============ KEUANGAN ============
function filteredK() {
  return S.keuangan.filter(k=>{
    switch(S.kFilter){ case'bulan_ini':return isMonth(k.tanggal);case'3_bulan':return withinM(k.tanggal,3);case'tahun_ini':return isYear(k.tanggal);default:return true; }
  });
}
function renderKeuangan() {
  const el=$('page-keuangan'), filt=filteredK();
  const tIn=filt.filter(k=>k.tipe==='pemasukan').reduce((s,k)=>s+Number(k.jumlah),0);
  const tOut=filt.filter(k=>k.tipe==='pengeluaran').reduce((s,k)=>s+Number(k.jumlah),0);
  const saldo=tIn-tOut;
  const fLabels={semua:'Semua',bulan_ini:'Bulan Ini','3_bulan':'3 Bulan',tahun_ini:'Tahun Ini'};
  
  let h=`<h2 class="text-lg font-bold text-ink mb-4">Keuangan</h2>
    <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
      
      <!-- Left Column: Summary and Charts -->
      <div class="lg:col-span-5 flex flex-col gap-4">
        <div class="flex gap-2 overflow-x-auto pb-1 scroll-snap-x">${Object.entries(fLabels).map(([k,v])=>`<button onclick="setKF('${k}')" class="filter-chip px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap bg-surface-dim text-ink-muted cursor-pointer ${S.kFilter===k?'active':''}">${v}</button>`).join('')}</div>
        <div class="grid grid-cols-3 gap-2">
          <div class="bg-white rounded-2xl p-3 shadow-card text-center"><p class="text-[10px] text-ink-muted mb-1">Pemasukan</p><p class="text-xs font-bold text-success">${fmtRp(tIn)}</p></div>
          <div class="bg-white rounded-2xl p-3 shadow-card text-center"><p class="text-[10px] text-ink-muted mb-1">Pengeluaran</p><p class="text-xs font-bold text-danger">${fmtRp(tOut)}</p></div>
          <div class="bg-white rounded-2xl p-3 shadow-card text-center"><p class="text-[10px] text-ink-muted mb-1">Saldo</p><p class="text-xs font-bold ${saldo>=0?'text-success':'text-danger'}">${fmtRp(Math.abs(saldo))}</p></div>
        </div>
        <div class="lg:hidden mb-1">
          <button onclick="toggleKCharts()" class="flex items-center gap-2 text-sm font-semibold text-primary cursor-pointer"><svg id="k-chev" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>Grafik Keuangan</button>
        </div>
        <div id="k-charts" class="hidden lg:block mb-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <div class="bg-white rounded-2xl p-5 shadow-card"><h4 class="text-xs font-bold text-ink mb-3">Pemasukan vs Pengeluaran (6 Bulan)</h4><div style="height:180px"><canvas id="chart-kbar"></canvas></div></div>
            <div class="bg-white rounded-2xl p-5 shadow-card"><h4 class="text-xs font-bold text-ink mb-3">Komposisi Pengeluaran</h4><div style="height:200px"><canvas id="chart-kdonut"></canvas></div></div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Daftar Transaksi -->
      <div class="lg:col-span-7">
        <div class="bg-white rounded-2xl p-5 shadow-card"><h3 class="text-sm font-bold text-ink mb-3">Daftar Transaksi</h3>`;
        
  const sorted=[...filt].sort((a,b)=>new Date(b.tanggal)-new Date(a.tanggal));
  const grouped={}; sorted.forEach(k=>{const key=toLocalDateStr(k.tanggal);if(!grouped[key])grouped[key]=[];grouped[key].push(k);});
  if(!sorted.length) h+='<p class="text-sm text-ink-muted text-center py-6">Belum ada transaksi</p>';
  else Object.entries(grouped).forEach(([date,items])=>{
    h+=`<p class="text-xs font-semibold text-ink-muted mt-4 mb-2 first:mt-0">${fmtDateGroup(date)}</p>`;
    items.forEach(k=>{
      const isIn=k.tipe==='pemasukan', icon=KAT_ICON[k.kategori]||SVG_ICONS.Lainnya;
      h+=`<div class="flex items-center gap-3 py-2.5 border-b border-surface-dim last:border-b-0">
        <div class="w-10 h-10 rounded-xl ${isIn?'bg-success/10 text-success':'bg-danger/10 text-danger'} flex items-center justify-center shrink-0">${icon}</div>
        <div class="flex-1 min-w-0"><p class="text-sm font-semibold text-ink">${k.kategori}</p><p class="text-xs text-ink-muted truncate">${k.catatan||'-'}</p></div>
        <p class="text-sm font-bold ${isIn?'text-success':'text-danger'} shrink-0">${isIn?'+':'-'} ${fmtRp(k.jumlah)}</p>
        <div class="flex gap-1 shrink-0"><button onclick="openEditK('${k.id}')" class="w-7 h-7 rounded-lg bg-surface-muted flex items-center justify-center text-ink-muted active:scale-90 cursor-pointer"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
        <button onclick="reqDelK('${k.id}')" class="w-7 h-7 rounded-lg bg-surface-muted flex items-center justify-center text-ink-muted active:scale-90 cursor-pointer"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></button></div></div>`;
    });
  });
  h+='</div></div></div>';
  el.innerHTML=h;
  
  if (window.innerWidth >= 1024) {
    setTimeout(() => { chartKBar(); chartKDonut(); }, 100);
  }
}
function setKF(f){S.kFilter=f;renderKeuangan();}
function toggleKCharts(){const c=$('k-charts'),ch=$('k-chev');const h=c.classList.contains('hidden');c.classList.toggle('hidden');ch.style.transform=h?'rotate(180deg)':'';if(h)setTimeout(()=>{chartKBar();chartKDonut();},100);}

// ============ RIWAYAT ============
function buildRItems() {
  const items=[];
  S.txTabungan.forEach(tx=>items.push({type:'tabungan',tipe:tx.tipe,jml:Number(tx.jumlah),note:tx.catatan||'-',label:tx.tabungan_nama||'Tabungan',tgl:tx.tanggal,icon:tx.tipe==='setor'?SVG_ICONS.Tabungan:SVG_ICONS.Tarik,badge:tx.tipe==='setor'?'Setor':'Tarik',badgeCls:tx.tipe==='setor'?'bg-success/10 text-success':'bg-danger/10 text-danger'}));
  S.keuangan.forEach(k=>items.push({type:'keuangan',tipe:k.tipe,jml:Number(k.jumlah),note:k.catatan||'-',label:k.kategori,tgl:k.tanggal,icon:KAT_ICON[k.kategori]||SVG_ICONS.Lainnya,badge:k.tipe==='pemasukan'?'Pemasukan':'Pengeluaran',badgeCls:k.tipe==='pemasukan'?'bg-success/10 text-success':'bg-danger/10 text-danger'}));
  items.sort((a,b)=>new Date(b.tgl)-new Date(a.tgl));
  return items;
}
function renderRiwayat() {
  const el=$('page-riwayat'); S.rPage=0;
  let all=buildRItems();
  if(S.rFilter==='tabungan') all=all.filter(i=>i.type==='tabungan');
  else if(S.rFilter==='keuangan') all=all.filter(i=>i.type==='keuangan');
  if(S.rSearch){const q=S.rSearch.toLowerCase();all=all.filter(i=>(i.note&&i.note.toLowerCase().includes(q))||(i.label&&i.label.toLowerCase().includes(q)));}
  S.rItems=all;
  const filters={semua:'Semua',tabungan:'Tabungan',keuangan:'Keuangan'};
  let h=`<h2 class="text-lg font-bold text-ink mb-4">Riwayat</h2>
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
      <div class="relative flex-1 max-w-md"><svg class="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-ink-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      <input id="r-search" type="text" placeholder="Cari catatan atau kategori..." value="${S.rSearch}" class="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-surface-dim bg-white text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"></div>
      <div class="flex gap-2 shrink-0">${Object.entries(filters).map(([k,v])=>`<button onclick="setRF('${k}')" class="filter-chip px-4 py-2 rounded-full text-xs font-semibold bg-surface-dim text-ink-muted cursor-pointer ${S.rFilter===k?'active':''}">${v}</button>`).join('')}</div>
    </div>
    <div id="r-list" class="bg-white rounded-2xl shadow-card overflow-hidden">`;
  const page=all.slice(0,20);
  if(!page.length) h+='<p class="text-sm text-ink-muted text-center py-8">Tidak ada riwayat</p>';
  else h+=rItemsHtml(page);
  h+='</div>';
  if(all.length>20) h+=`<button id="r-more" onclick="loadMoreR()" class="w-full mt-3 py-3 rounded-xl bg-surface-dim text-ink-muted font-semibold text-sm active:scale-[0.98] transition-all cursor-pointer">Muat Lebih Banyak</button>`;
  el.innerHTML=h;
  // Bind search
  $('r-search')?.addEventListener('input',e=>{S.rSearch=e.target.value;clearTimeout(S._rTimer);S._rTimer=setTimeout(()=>renderRiwayat(),300);});
}
function rItemsHtml(items){
  return items.map((it,i)=>`<div class="flex items-center gap-3 px-5 py-3 ${i<items.length-1?'border-b border-surface-dim':''}">
    <div class="w-10 h-10 rounded-xl bg-surface-muted text-ink-muted flex items-center justify-center shrink-0">${it.icon}</div>
    <div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><p class="text-sm font-semibold text-ink truncate">${it.label}</p><span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${it.badgeCls} whitespace-nowrap">${it.badge}</span></div><p class="text-xs text-ink-muted truncate">${it.note} · ${fmtDate(it.tgl)}</p></div>
    <p class="text-sm font-bold ${it.tipe==='pemasukan'||it.tipe==='setor'?'text-success':'text-danger'} whitespace-nowrap shrink-0">${it.tipe==='pemasukan'||it.tipe==='setor'?'+':'-'} ${fmtRp(it.jml)}</p></div>`).join('');
}
function loadMoreR(){S.rPage++;const s=S.rPage*20,e=s+20,more=S.rItems.slice(s,e);if(more.length)$('r-list').insertAdjacentHTML('beforeend',rItemsHtml(more));if(e>=S.rItems.length){const b=$('r-more');if(b)b.remove();}}
function setRF(f){S.rFilter=f;renderRiwayat();}

// ============ MODALS (dynamically injected) ============
const modalRoot = () => $('modal-root');
function openModal(id){ const bd=$(`${id}-backdrop`),sh=$(`${id}`); if(bd)bd.classList.add('active'); if(sh)sh.classList.add('active'); document.body.style.overflow='hidden'; }
function closeModal(id){ const sh=$(`${id}`); if(sh)sh.classList.remove('active'); setTimeout(()=>{const bd=$(`${id}-backdrop`);if(bd)bd.classList.remove('active');},300); document.body.style.overflow=''; }
function closeAllModals(){ modalRoot().querySelectorAll('.modal-backdrop.active').forEach(b=>b.classList.remove('active')); modalRoot().querySelectorAll('.modal-sheet.active').forEach(m=>m.classList.remove('active')); document.body.style.overflow=''; }
function btnLoad(tId,sId,on){const t=$(tId),s=$(sId);if(on){if(t)t.style.opacity='0.6';if(s)s.classList.remove('hidden');}else{if(t)t.style.opacity='1';if(s)s.classList.add('hidden');}}

function modalHtml(id,title,bodyHtml){
  return `<div id="${id}-backdrop" class="modal-backdrop" onclick="closeModal('${id}')"></div>
  <div id="${id}" class="modal-sheet"><div class="bg-white rounded-t-3xl p-6 shadow-modal max-h-[85vh] overflow-y-auto">
    <div class="w-10 h-1 rounded-full bg-surface-dim mx-auto mb-4"></div>
    <div class="flex items-center justify-between mb-5"><h3 class="text-lg font-bold text-ink">${title}</h3>
    <button onclick="closeModal('${id}')" class="w-8 h-8 rounded-full bg-surface-muted flex items-center justify-center text-ink-muted cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button></div>
    ${bodyHtml}</div></div>`;
}

// -- Add/Edit Tabungan --
function openAddTab(){
  const body=`<form id="frm-tab" onsubmit="submitTab(event)"><input type="hidden" id="tab-eid" value="">
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Nama Tabungan</label><input id="tab-nama" type="text" placeholder="cth: Dana Darurat" required class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"></div>
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Target (Rp)</label><input id="tab-target" type="number" min="1" placeholder="10000000" required class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"></div>
    <div class="mb-5"><label class="block text-sm font-semibold text-ink mb-2">Pilih Warna</label><div class="flex flex-wrap gap-3">${PRESET_COLORS.map((c,i)=>`<div class="color-dot ${i===0?'selected':''}" style="background:${c}" data-color="${c}" onclick="selColor(this)"></div>`).join('')}</div></div>
    <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-sm shadow-fab active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"><span id="tab-btn-t">Simpan Tabungan</span><svg id="tab-btn-s" class="hidden w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></button></form>`;
  modalRoot().innerHTML=modalHtml('m-tab','Tambah Tabungan',body);
  openModal('m-tab');
}
function openEditTab(){
  const t=S.selTab; if(!t) return;
  openAddTab();
  $('m-tab').querySelector('h3').textContent='Edit Tabungan';
  $('tab-eid').value=t.id; $('tab-nama').value=t.nama_tabungan; $('tab-target').value=t.target;
  document.querySelectorAll('.color-dot').forEach(d=>d.classList.toggle('selected',d.dataset.color===t.warna));
}
function selColor(el){document.querySelectorAll('.color-dot').forEach(d=>d.classList.remove('selected'));el.classList.add('selected');}
async function submitTab(e){
  e.preventDefault();
  const id=$('tab-eid').value,nm=$('tab-nama').value.trim(),tgt=Number($('tab-target').value),col=document.querySelector('.color-dot.selected')?.dataset.color||'#247BD0';
  if(!nm||tgt<=0){toast('Isi semua data dengan benar','error');return;}
  btnLoad('tab-btn-t','tab-btn-s',true);
  const r = id ? await api('updateTabungan',{id,nama_tabungan:nm,target:tgt,warna:col}) : await api('addTabungan',{id:uid(),nama_tabungan:nm,target:tgt,warna:col,created_at:today()});
  btnLoad('tab-btn-t','tab-btn-s',false);
  if(r.success){toast(id?'Tabungan diperbarui':'Tabungan ditambahkan');closeModal('m-tab');await loadAll();if(S.page==='tabungan-detail'){S.selTab=S.tabungan.find(t=>t.id===(id||S.selTab?.id));renderDetail();}}
  else toast(r.error||'Gagal menyimpan','error');
}

// -- Setor / Tarik --
function openSetorTarik(tipe){
  const t=S.selTab; if(!t) return;
  const title=tipe==='setor'?'Setor Tabungan':'Tarik Tabungan';
  const body=`<form id="frm-tx" onsubmit="submitTx(event)"><input type="hidden" id="tx-eid" value=""><input type="hidden" id="tx-tid" value="${t.id}"><input type="hidden" id="tx-tipe" value="${tipe}">
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Jumlah (Rp)</label><input id="tx-jml" type="number" min="1" placeholder="500000" required class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"><p id="tx-err" class="text-xs text-danger hidden mt-1"></p></div>
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Catatan</label><input id="tx-note" type="text" placeholder="cth: Gaji bulan ini" class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"></div>
    <div class="mb-5"><label class="block text-sm font-semibold text-ink mb-1.5">Tanggal</label><input id="tx-tgl" type="date" required value="${today()}" class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink focus:border-primary focus:outline-none transition-colors"></div>
    <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r ${tipe==='setor'?'from-success to-success-dark':'from-danger to-danger-dark'} text-white font-bold text-sm shadow-fab active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"><span id="tx-btn-t">Simpan</span><svg id="tx-btn-s" class="hidden w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></button></form>`;
  modalRoot().innerHTML=modalHtml('m-tx',title,body);
  openModal('m-tx');
}
function openEditTx(txId){
  const tx=S.txTabungan.find(t=>t.id===txId); if(!tx) return;
  openSetorTarik(tx.tipe);
  $('m-tx').querySelector('h3').textContent='Edit Transaksi';
  $('tx-eid').value=tx.id; $('tx-jml').value=tx.jumlah; $('tx-note').value=tx.catatan||''; $('tx-tgl').value=tx.tanggal;
}
async function submitTx(e){
  e.preventDefault();
  const eid=$('tx-eid').value,tid=$('tx-tid').value,tipe=$('tx-tipe').value,jml=Number($('tx-jml').value),note=$('tx-note').value.trim(),tgl=$('tx-tgl').value;
  if(jml<=0){toast('Jumlah harus > 0','error');return;}
  if(tipe==='tarik'){const bal=tabTotal(tid);if(jml>bal){$('tx-err').textContent=`Saldo tidak cukup (${fmtRp(bal)})`;$('tx-err').classList.remove('hidden');return;}}
  btnLoad('tx-btn-t','tx-btn-s',true);
  const r = eid ? await api('updateTransaksiTabungan',{id:eid,jumlah:jml,catatan:note,tanggal:tgl,tipe}) : await api('addTransaksiTabungan',{id:uid(),tabungan_id:tid,jumlah:jml,catatan:note,tanggal:tgl,tipe});
  btnLoad('tx-btn-t','tx-btn-s',false);
  if(r.success){toast(eid?'Transaksi diperbarui':(tipe==='setor'?'Setoran berhasil':'Penarikan berhasil'));closeModal('m-tx');await loadAll();renderDetail();}
  else toast(r.error||'Gagal menyimpan','error');
}

// -- Add/Edit Keuangan --
function openAddK(){
  S.kTipe='pemasukan';
  const catOpts = cats => cats.map(c=>`<option value="${c}">${c}</option>`).join('');
  const body=`<form id="frm-k" onsubmit="submitK(event)"><input type="hidden" id="k-eid" value="">
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-2">Tipe Transaksi</label><div class="flex rounded-xl bg-surface-muted p-1 gap-1"><button type="button" id="k-btn-in" onclick="setKTipe('pemasukan')" class="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-success text-white cursor-pointer">Pemasukan</button><button type="button" id="k-btn-out" onclick="setKTipe('pengeluaran')" class="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-ink-muted cursor-pointer">Pengeluaran</button></div></div>
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Jumlah (Rp)</label><input id="k-jml" type="number" min="1" placeholder="1000000" required class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"></div>
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Kategori</label><select id="k-kat" required class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink focus:border-primary focus:outline-none transition-colors">${catOpts(KAT_IN)}</select></div>
    <div class="mb-4"><label class="block text-sm font-semibold text-ink mb-1.5">Catatan</label><input id="k-note" type="text" placeholder="cth: Gaji bulan Juni" class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink placeholder:text-ink-light focus:border-primary focus:outline-none transition-colors"></div>
    <div class="mb-5"><label class="block text-sm font-semibold text-ink mb-1.5">Tanggal</label><input id="k-tgl" type="date" required value="${today()}" class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-sm text-ink focus:border-primary focus:outline-none transition-colors"></div>
    <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-sm shadow-fab active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"><span id="k-btn-t">Simpan Transaksi</span><svg id="k-btn-s" class="hidden w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></button></form>`;
  modalRoot().innerHTML=modalHtml('m-k','Tambah Transaksi',body);
  openModal('m-k');
}
function openEditK(id){
  const k=S.keuangan.find(x=>x.id===id); if(!k) return;
  openAddK();
  $('m-k').querySelector('h3').textContent='Edit Transaksi';
  $('k-eid').value=k.id; $('k-jml').value=k.jumlah; $('k-note').value=k.catatan||''; $('k-tgl').value=k.tanggal;
  setKTipe(k.tipe);
  setTimeout(()=>{$('k-kat').value=k.kategori;},50);
}
function setKTipe(t){
  S.kTipe=t;
  const bi=$('k-btn-in'),bo=$('k-btn-out'),sel=$('k-kat');
  if(!bi||!bo) return;
  if(t==='pemasukan'){bi.className='flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-success text-white cursor-pointer';bo.className='flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-ink-muted cursor-pointer';}
  else{bi.className='flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all text-ink-muted cursor-pointer';bo.className='flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all bg-danger text-white cursor-pointer';}
  if(sel){const cats=t==='pemasukan'?KAT_IN:KAT_OUT;sel.innerHTML=cats.map(c=>`<option value="${c}">${c}</option>`).join('');}
}
async function submitK(e){
  e.preventDefault();
  const eid=$('k-eid').value,tipe=S.kTipe,jml=Number($('k-jml').value),kat=$('k-kat').value,note=$('k-note').value.trim(),tgl=$('k-tgl').value;
  if(jml<=0||!kat||!tgl){toast('Isi semua data dengan benar','error');return;}
  btnLoad('k-btn-t','k-btn-s',true);
  const r = eid ? await api('updateKeuangan',{id:eid,tipe,jumlah:jml,kategori:kat,catatan:note,tanggal:tgl}) : await api('addKeuangan',{id:uid(),tipe,jumlah:jml,kategori:kat,catatan:note,tanggal:tgl});
  btnLoad('k-btn-t','k-btn-s',false);
  if(r.success){toast(eid?'Transaksi diperbarui':'Transaksi ditambahkan');closeModal('m-k');await loadAll();renderKeuangan();}
  else toast(r.error||'Gagal menyimpan','error');
}

// -- Confirm Delete --
function showConfirm(msg,cb){
  S.delCb=cb;
  const body=`<div class="text-center mb-6"><div class="w-16 h-16 rounded-full bg-danger/10 mx-auto mb-4 flex items-center justify-center"><svg class="w-8 h-8 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg></div>
  <h3 class="text-lg font-bold text-ink mb-1">Hapus Data?</h3><p class="text-sm text-ink-muted">${msg}</p></div>
  <div class="flex gap-3"><button onclick="closeModal('m-del')" class="flex-1 py-3 rounded-xl bg-surface-muted text-ink font-semibold text-sm active:scale-[0.98] cursor-pointer">Batal</button>
  <button onclick="execDel()" class="flex-1 py-3 rounded-xl bg-danger text-white font-semibold text-sm active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"><span id="del-btn-t">Hapus</span><svg id="del-btn-s" class="hidden w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg></button></div>`;
  modalRoot().innerHTML=modalHtml('m-del','',body);
  // Remove title area for cleaner look
  $('m-del').querySelector('.flex.items-center.justify-between.mb-5').remove();
  openModal('m-del');
}
async function execDel(){if(S.delCb)await S.delCb();}
function reqDelTab(id){showConfirm('Tabungan dan semua transaksinya akan dihapus permanen.',async()=>{btnLoad('del-btn-t','del-btn-s',true);const r=await api('deleteTabungan',{id});btnLoad('del-btn-t','del-btn-s',false);if(r.success){toast('Tabungan dihapus');closeModal('m-del');await loadAll();nav('tabungan');}else toast(r.error||'Gagal','error');});}
function reqDelTx(id){showConfirm('Transaksi ini akan dihapus permanen.',async()=>{btnLoad('del-btn-t','del-btn-s',true);const r=await api('deleteTransaksiTabungan',{id});btnLoad('del-btn-t','del-btn-s',false);if(r.success){toast('Transaksi dihapus');closeModal('m-del');await loadAll();renderDetail();}else toast(r.error||'Gagal','error');});}
function reqDelK(id){showConfirm('Transaksi ini akan dihapus permanen.',async()=>{btnLoad('del-btn-t','del-btn-s',true);const r=await api('deleteKeuangan',{id});btnLoad('del-btn-t','del-btn-s',false);if(r.success){toast('Transaksi dihapus');closeModal('m-del');await loadAll();renderKeuangan();}else toast(r.error||'Gagal','error');});}

// -- Settings Modal --
function openSettings(){
  const ini=S.user?S.user.charAt(0).toUpperCase():'?';
  const body=`<div class="bg-surface-muted rounded-2xl p-4 mb-5 flex items-center gap-4"><div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl shadow-card shrink-0">${ini}</div><div><p class="font-bold text-ink">${S.user}</p><p class="text-xs text-ink-muted">Akun Aktif</p></div></div>
  <div class="grid grid-cols-2 gap-3 mb-5"><div class="bg-surface-muted rounded-2xl p-3 text-center"><p class="text-2xl font-extrabold text-primary">${S.tabungan.length}</p><p class="text-xs text-ink-muted mt-0.5">Tabungan</p></div><div class="bg-surface-muted rounded-2xl p-3 text-center"><p class="text-2xl font-extrabold text-primary">${S.txTabungan.length+S.keuangan.length}</p><p class="text-xs text-ink-muted mt-0.5">Transaksi</p></div></div>
  <div class="mb-5"><label class="block text-sm font-semibold text-ink mb-1.5">URL Apps Script</label><input id="set-url" type="url" value="${S.scriptUrl}" class="w-full px-4 py-3 rounded-xl border-2 border-surface-dim bg-surface-muted text-xs text-ink focus:border-primary focus:outline-none transition-colors mb-2">
  <button onclick="updUrl()" class="w-full py-2.5 rounded-xl bg-surface-dim text-ink font-semibold text-sm active:scale-[0.98] transition-all cursor-pointer">Perbarui URL</button></div>
  <button onclick="doLogout()" class="w-full py-3.5 rounded-xl bg-danger/10 text-danger font-bold text-sm active:scale-[0.98] transition-all cursor-pointer">Keluar dari Akun</button>`;
  modalRoot().innerHTML=modalHtml('m-set','Pengaturan',body);
  openModal('m-set');
}
function updUrl(){const u=$('set-url').value.trim();if(u&&u.startsWith('https://')){localStorage.setItem('dompetku_scriptUrl',u);S.scriptUrl=u;toast('URL diperbarui');closeModal('m-set');loadAll();}else toast('URL tidak valid','error');}

// ============ FAB HANDLER ============
function handleFab(){if(S.page==='tabungan')openAddTab();else if(S.page==='keuangan')openAddK();}

// ============ PULL TO REFRESH ============
let touchStartY = 0, pullDistance = 0;
const pTrHtml = `<div class="bg-white rounded-full shadow-card p-2 mt-4 text-primary"><svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></div>`;
document.addEventListener('touchstart', e => { if (window.scrollY === 0) touchStartY = e.touches[0].clientY; }, {passive: true});
document.addEventListener('touchmove', e => {
  if (!touchStartY || S.page === 'beranda' && !S.user) return; // only when logged in
  const y = e.touches[0].clientY;
  if (y > touchStartY && window.scrollY === 0) {
    pullDistance = Math.min((y - touchStartY) * 0.4, 80);
    if (pullDistance > 20) {
      let pTr = $('ptr-indicator');
      if (!pTr) {
        pTr = document.createElement('div'); pTr.id = 'ptr-indicator';
        pTr.className = 'fixed top-0 left-0 w-full flex justify-center z-50 pointer-events-none transition-transform';
        pTr.innerHTML = pTrHtml; document.body.appendChild(pTr);
      }
      pTr.style.transform = `translateY(${pullDistance}px)`;
    }
  }
}, {passive: true});
document.addEventListener('touchend', async () => {
  let pTr = $('ptr-indicator');
  if (pullDistance > 60 && S.user) {
    if (pTr) { pTr.style.transition = 'transform 0.3s ease'; pTr.style.transform = `translateY(40px)`; }
    await loadAll();
    if (pTr) { pTr.style.transform = `translateY(-100px)`; setTimeout(() => pTr.remove(), 300); }
  } else if (pTr) pTr.remove();
  touchStartY = 0; pullDistance = 0;
});

// ============ EVENT BINDINGS ============
document.addEventListener('DOMContentLoaded', () => {
  // Setup
  $('setup-btn').addEventListener('click', saveSetup);
  $('setup-url').addEventListener('keydown', e=>{if(e.key==='Enter')saveSetup();});
  // Login
  $('login-btn').addEventListener('click', doLogin);
  $('login-password').addEventListener('keydown', e=>{if(e.key==='Enter')doLogin();});
  $('login-username').addEventListener('keydown', e=>{if(e.key==='Enter')$('login-password').focus();});
  $('toggle-pw-btn').addEventListener('click', togglePw);
  $('goto-setup-btn').addEventListener('click', ()=>showScreen('setup'));
  // Navigation (mobile bottom + desktop sidebar)
  document.querySelectorAll('[data-nav]').forEach(btn=>{
    btn.addEventListener('click', ()=>nav(btn.dataset.nav));
  });
  // FAB
  $('fab-btn').addEventListener('click', handleFab);
  // Settings
  $('header-settings-btn').addEventListener('click', openSettings);
  $('desktop-settings-btn')?.addEventListener('click', openSettings);
  $('sidebar-settings-btn')?.addEventListener('click', openSettings);
  $('sidebar-logout-btn')?.addEventListener('click', doLogout);

  // Init
  S.scriptUrl = localStorage.getItem('dompetku_scriptUrl')||'';
  const savedUser = localStorage.getItem('dompetku_user');
  if(!S.scriptUrl) showScreen('setup');
  else if(!savedUser) showScreen('login');
  else { const u=USERS.find(x=>x.username===savedUser); if(u){S.user=u.username;showScreen('main');loadAll();}else{localStorage.removeItem('dompetku_user');showScreen('login');} }

  // PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed:', err));
  }
});
