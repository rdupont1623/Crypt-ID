const newFormHandler = async (event) => {
  event.preventDefault();

  const location = document.querySelector('#sighting-location').value.trim();
  const report = document.querySelector('#sighting-report').value.trim();
  const description = document.querySelector('#sighting-desc').value.trim();

  if (location && report && description) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ location, report, description }),
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
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
