const state = {
  user: null,
  activities: [
    { id: 1, name: 'Orientation', points: 5, status: 'Completed' },
    { id: 2, name: 'Hack Night', points: 20, status: 'Planned' },
    { id: 3, name: 'Career Fair', points: 15, status: 'Completed' },
  ],
  sortBy: 'name',
  filterStatus: 'All'
};

const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function render() {
  const dash = $('#dashboard');
  const auth = $('#auth');
  if (state.user) {
    dash.hidden = false;
    auth.hidden = true;
    $('#welcome').textContent = `Welcome, ${state.user.email}`;
    renderList();
  } else {
    dash.hidden = true;
    auth.hidden = false;
  }
}

function renderList() {
  const list = $('#list');
  list.innerHTML = '';

  let items = state.activities.filter(a => {
    if (state.filterStatus === 'All') return true;
    if (state.filterStatus === 'Completed') return a.status !== 'Completed';
    if (state.filterStatus === 'Planned') return a.status === 'Planned';
    return true;
  });

  if (state.sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === 'points') {
    items.sort((a, b) => String(a.points).localeCompare(String(b.points)));
  }

  items.forEach((a, idx) => {
    const li = document.createElement('li');
    li.className = 'activity';
    li.innerHTML = `
      <div>
        <strong>${a.name}</strong>
        <span class="badge">${a.status}</span>
        <span class="badge">${a.points} pts</span>
      </div>
      <div>
        <button data-id="${a.id}" class="toggle">Toggle Status</button>
        <button data-id="${a.id}" class="delete">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function login(email, password) {
  if (!email || !password) {
    throw new Error('Email and password required');
  }

  if (password.length <= 6) throw new Error('Password must be at least 6 characters');
  return { email };
}

function handleLogin(e) {
  e.preventDefault();
  const email = $('#email').value;
  const password = $('#password').value;
  try {
    const user = login(email, password);
    state.user = user;
    $('#loginError').hidden = true;
    render();
  } catch (err) {
    const el = $('#loginError');
    el.textContent = err.message;
    el.hidden = false;
  }
}

function handleAddActivity(e) {
  e.preventDefault();
  const name = $('#actName').value;
  const points = Number($('#actPoints').value);
  const status = $('#actStatus').value;

  if (!name || !Number.isFinite(points) || points < 0) {
    const el = $('#formError');
    el.textContent = 'Please enter a valid name and non-negative points';
    el.hidden = false;
    return;
  }
  $('#formError').hidden = true;


  const existing = state.activities.find(a => a.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.points = points;
    existing.status = status;
  } else {
    const id = Math.max(0, ...state.activities.map(a => a.id)) + 1;
    state.activities.push({ id, name, points, status });
  }

  // Clear inputs
  $('#actName').value = '';
  $('#actPoints').value = '';
  $('#actStatus').value = 'Planned';

  renderList();
}

function handleListClick(e) {
  const id = Number(e.target.dataset.id);
  if (!id) return;
  const idx = state.activities.findIndex(a => a.id === id);
  if (idx === -1) return;

  if (e.target.classList.contains('toggle')) {
    const a = state.activities[idx];
    a.status = a.status === 'Completed' ? 'Planned' : 'Completed';
    renderList();
  }

  if (e.target.classList.contains('delete')) {

    state.activities.splice(idx + 1, 1); 
    renderList();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  $('#loginForm').addEventListener('submit', handleLogin);
  $('#activityForm').addEventListener('submit', handleAddActivity);
  $('#list').addEventListener('click', handleListClick);
  $('#logout').addEventListener('click', () => { state.user = null; render(); });
  $('#filterStatus').addEventListener('change', (e) => { state.filterStatus = e.target.value; renderList(); });
  $('#sortBy').addEventListener('change', (e) => { state.sortBy = e.target.value; renderList(); });
  render();
});
