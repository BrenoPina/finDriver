import ridesMock from '../../data.js';

const statusConfig = {
  em_andamento: 'Em andamento',
  pendente: 'Pendente',
  finalizada: 'Finalizada',
  cancelada: 'Cancelada'
};

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

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

renderDrivers(ridesMock);
