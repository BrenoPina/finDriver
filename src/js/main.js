import ridesMock from '../../data.js';
import currencyFormatter from './utils.js';

const paginationContainer = document.querySelector('.pagination-container');
const searchInput = document.querySelector('#search__input');
const ridesContainer = document.querySelector('.driver__list');
const cardTemplate = document.querySelector('.driver-card-template');

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

let currentRaceList = [...ridesMock];
let currentPage = 1;
let itemsPerPage = 5;

function updateRidesUi(ridesList) {
  renderRides(ridesList);
  renderRideStats(ridesList);
}

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

function renderRides(rides) {
  const fragment = document.createDocumentFragment();
  ridesContainer.textContent = '';

  if (rides.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'driver__list-empty';
    emptyMessage.textContent = 'Nenhuma corrida ou motorista encontrado para esta busca.';
    ridesContainer.appendChild(emptyMessage);
    return;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const ridesToRender = rides.slice(startIndex, endIndex);

  ridesToRender.forEach(ride => {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector('.driver__id').textContent = ride.id;
    cardClone.querySelector('.driver__status').textContent = statusConfig[ride.status];
    cardClone.querySelector('.driver__status').classList.add(`driver__status--${ride.status}`);
    cardClone.querySelector('.driver__price').textContent = currencyFormatter.format(ride.price);
    cardClone.querySelector('.driver__driver-name').textContent = ride.driver;
    cardClone.querySelector('.driver__client-name').textContent = ride.client;
    cardClone.querySelector('.driver__origin-text').textContent = ride.origin;
    cardClone.querySelector('.driver__destiny-text').textContent = ride.destiny;
    fragment.appendChild(cardClone);
  });
  ridesContainer.appendChild(fragment);
  renderPaginationControls(rides.length);
}

function filterRides(term) {
  const formattedTerm = term.toLowerCase().trim();

  currentPage = 1;

  if (!formattedTerm) {
    currentRaceList = [...ridesMock];
    updateRidesUi(currentRaceList);
    return;
  }

  const filteredList = ridesMock.filter(ride => {
    const matchDriver = ride.driver.toLowerCase().includes(formattedTerm);
    const matchClient = ride.client.toLowerCase().includes(formattedTerm);
    return matchDriver || matchClient;
  });

  currentRaceList = filteredList;
  updateRidesUi(currentRaceList);
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
  const inputValue = event.target.value;
  filterRides(inputValue);
}, 500);

function renderPaginationControls(totalItems) {
  paginationContainer.textContent = '';

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return;

  const prevButton = document.createElement('button');
  prevButton.textContent = 'Anterior';
  prevButton.className = 'pagination__btn';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    currentPage--;
    renderRides(currentRaceList);
  });

  const pageInfo = document.createElement('span');
  pageInfo.textContent = ` Página ${currentPage} de ${totalPages} `;
  pageInfo.className = 'pagination__info';

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Próximo';
  nextButton.className = 'pagination__btn';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    currentPage++;
    renderRides(currentRaceList);
  });

  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);
}

searchInput.addEventListener('input', debounceFilter);
updateRidesUi(currentRaceList);
