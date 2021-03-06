const form = document.createElement('form');
form.setAttribute('id', 'checkoutForm');

const fields = [
  'Name',
  'Email',
  'Address',
  'City',
  'State',
  'Zip',
  'First Time Adopter',
  'Pickup Location'
];

for (let i = 0; i < fields.length; i++) {
  const label = document.createElement('label');
  label.textContent = fields[i];
  label.setAttribute('for', fields[i]);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', fields[i]);

  form.appendChild(label);
  form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit!';

// form.addEventListener('submit', function(event) {
//   const formData = document.getElementById('checkoutForm').elements;
//   const submitData = {};
//
//   for (let i = 0; i < formData.length-1; i++) {
//     const val = document.getElementById('checkoutForm').elements[i].value;
//     const id = document.getElementById('checkoutForm').elements[i].id;
//     console.log('Value: ' + val);
//     console.log('ID: ' + id);
//     submitData[id] = val;
//   }
//   alert('Thank you. The form information has been received.');
// });

form.appendChild(submitButton);

const checkout = document.getElementById('checkout');
checkout.appendChild(form); //have this be the last thing

$('form').on('submit', function(e) {
  e.preventDefault();
  const result = $('checkoutForm').serializeArray();
  alert('Thank you. The form information has been received.');
  console.log('Result: ', result);
});
