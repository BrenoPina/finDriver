import ridesMock from '../../data.js';
import currencyFormatter from './utils.js';

const searchInput = document.querySelector('#search__input');
const ridesContainer = document.querySelector('.driver__list');
const cardContainer = document.querySelector('.driver-card-template');

const statusElements = {
  all: document.querySelector('#sidebar__label-all'),
  finished: document.querySelector('#sidebar__label-finalizada'),
  in_progress: document.querySelector('#sidebar__label-em_andamento'),
  pending: document.querySelector('#sidebar__label-pendente'),
  canceled: document.querySelector('#sidebar__label-cancelada')
};

const statusConfig = {
  em_andamento: 'Em andamento',
  pendente: 'Pendente',
  finalizada: 'Finalizada',
  cancelada: 'Cancelada'
};

function renderRideStats(rides) {
  const stats = rides.reduce(
    (acc, ride) => {
      acc.total++;

      if (acc[ride.status] !== undefined) {
        acc[ride.status]++;
      }

      return acc;
    },
    { total: 0, finalizada: 0, em_andamento: 0, pendente: 0, cancelada: 0 }
  );

  statusElements.all.textContent = stats.total;
  statusElements.finished.textContent = stats.finalizada;
  statusElements.in_progress.textContent = stats.em_andamento;
  statusElements.pending.textContent = stats.pendente;
  statusElements.canceled.textContent = stats.cancelada;
}

function renderRides(drivers) {
  const driversContainer = document.querySelector('.driver__list');
  const template = document.getElementById('driver-card-template');

  const fragment = document.createDocumentFragment();
  driversContainer.textContent = '';

  drivers.forEach(driver => {
    const cardClone = template.content.cloneNode(true);
    cardClone.querySelector('.driver__id').textContent = driver.id;
    cardClone.querySelector('.driver__status').textContent = statusConfig[driver.status];
    cardClone.querySelector('.driver__status').classList.add(`driver__status--${driver.status}`);
    cardClone.querySelector('.driver__price').textContent = currencyFormatter.format(driver.price);
    cardClone.querySelector('.driver__driver-name').textContent = driver.driver;
    cardClone.querySelector('.driver__client-name').textContent = driver.client;
    cardClone.querySelector('.driver__origin-text').textContent = driver.origin;
    cardClone.querySelector('.driver__destiny-text').textContent = driver.destiny;
    fragment.appendChild(cardClone);
  });
  driversContainer.appendChild(fragment);
}

function filterRides(term) {
  const formattedTerm = term.toLowerCase().trim();

  if (!formattedTerm) {
    renderRides(ridesMock);
    renderRideStats(ridesMock);
    return;
  }

  const filteredList = ridesMock.filter(ride => {
    const matchDriver = ride.driver.toLowerCase().includes(formattedTerm);
    const matchClient = ride.client.toLowerCase().includes(formattedTerm);
    return matchDriver || matchClient;
  });

  renderRides(filteredList);
  renderRideStats(filteredList);
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debounceFilter = debounce(event => {
  const valorDigitado = event.target.value;
  filterRides(valorDigitado);
}, 500);

searchInput.addEventListener('input', debounceFilter);

renderRideStats(ridesMock);
renderRides(ridesMock);
