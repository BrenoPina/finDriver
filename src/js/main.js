import ridesMock from '../../data.js';

function renderDrivers(drivers) {
  const driversContainer = document.querySelector('.driver__list');
  const template = document.getElementById('driver-card-template');

  const fragment = document.createDocumentFragment();
  driversContainer.textContent = '';

  drivers.forEach(driver => {
    const cardClone = template.content.cloneNode(true);

    cardClone.querySelector('.driver__id').textContent = driver.id;
    cardClone.querySelector('.driver__status').textContent = driver.status;
    cardClone.querySelector('.driver__price').textContent = `R$ ${driver.price}`;
    cardClone.querySelector('.driver__driver-name').textContent = driver.driver;
    cardClone.querySelector('.driver__client-name').textContent = driver.client;
    cardClone.querySelector('.driver__origin-text').textContent = driver.origin;
    cardClone.querySelector('.driver__destiny-text').textContent = driver.destiny;

    fragment.appendChild(cardClone);
  });

  driversContainer.appendChild(fragment);
}

renderDrivers(ridesMock);
