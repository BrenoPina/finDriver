import ridesMock from '../../data.js';
import currencyFormatter from './utils.js';

const searchInput = document.querySelector('#search__input');
const driverContainer = document.querySelector('.driver-card-template');

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

  document.querySelector('#sidebar__label-all').textContent = stats.total;
  document.querySelector('#sidebar__label-finalizada').textContent = stats.finalizada;
  document.querySelector('#sidebar__label-em_andamento').textContent = stats.em_andamento;
  document.querySelector('#sidebar__label-pendente').textContent = stats.pendente;
  document.querySelector('#sidebar__label-cancelada').textContent = stats.cancelada;
}

function renderDrivers(drivers) {
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

  if (!formattedTerm) return ridesMock;

  return ridesMock.filter(ride => {
    const matchDriver = ride.driver.toLocaleLowerCase().includes(formattedTerm);

    const matchClient = ride.client.toLowerCase().includes(formattedTerm);

    return matchDriver || matchClient;
  });
}

searchInput.addEventListener('input', event => {
  const valorDigitado = event.target.value;
  const dadosFiltrados = filterRides(valorDigitado);
  renderDrivers(dadosFiltrados);
});

renderRideStats(ridesMock);
renderDrivers(ridesMock);
