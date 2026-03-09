// Handle query from address bar (?q=...)
(function () {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q && q.trim()) {
    if (/(?:^|\s)![\w]/.test(q.trim())) {
      window.location.href = `https://search.brave.com/search?q=${encodeURIComponent(q)}`;
    } else {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
    }
  }
})();

const input     = document.getElementById('query');
const wrap      = document.getElementById('input-wrap');
const status    = document.getElementById('status');
const statusTxt = document.getElementById('status-text');

function hasBang(q) {
  return /(?:^|\s)![\w]/.test(q.trim());
}

function updateStatus() {
  const q = input.value;
  if (!q.trim()) {
    wrap.className = 'input-wrap';
    status.className = 'status';
    statusTxt.textContent = '—';
    input.style.caretColor = 'var(--brave)';
    return;
  }
  if (hasBang(q)) {
    wrap.className = 'input-wrap active';
    status.className = 'status brave visible';
    statusTxt.textContent = '→ brave search';
    input.style.caretColor = 'var(--brave)';
  } else {
    wrap.className = 'input-wrap google-active';
    status.className = 'status google visible';
    statusTxt.textContent = '→ google';
    input.style.caretColor = 'var(--google)';
  }
}

function go() {
  const q = input.value.trim();
  if (!q) return;
  if (hasBang(q)) {
    window.location.href = `https://search.brave.com/search?q=${encodeURIComponent(q)}`;
  } else {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(q)}`;
  }
}

function fill(text) {
  input.value = text;
  input.focus();
  updateStatus();
}

input.addEventListener('input', updateStatus);
input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });

// Register service worker for instant redirects
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/brave-bangs/sw.js');
}
