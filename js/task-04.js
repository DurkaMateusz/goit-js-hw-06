let counterValue = 0;
const counter = document.querySelector("#counter");
const downCounter = document.querySelector('[data-action="decrement"]');
const upCounter = document.querySelector('[data-action="increment"]');

downCounter.addEventListener('click', () => {
counterValue -=1;
updateValueCounter();
}
);

upCounter.addEventListener('click', () => {
    counterValue +=1;
    updateValueCounter();
    }
    );

const ValueCounter = document.querySelector("#value");

function updateValueCounter() {
ValueCounter.textContent = counterValue;
};