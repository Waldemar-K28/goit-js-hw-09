const form = document.querySelector('.feedback-form');
const storage_key = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};
function populateFormFields() {
  const savedData = localStorage.getItem(storage_key);
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    formData = parsedData;
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

populateFormFields();

form.addEventListener('input', event => {
  const fieldName = event.target.name;

  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem(storage_key, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storage_key);
  form.reset();
  formData = {
    email: '',
    message: '',
  };
});
