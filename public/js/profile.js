const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#sighting-name').value.trim();
  const evidence = document.querySelector('#evidence').value.trim();
  const description = document.querySelector('#sighting-desc').value.trim();

  if (name && evidence && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ name, evidence, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create report');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete report');
    }
  }
};

document
  .querySelector('.new-sighting-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.report-list')
  .addEventListener('click', delButtonHandler);
