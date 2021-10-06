const newFormHandler = async (event) => {
  event.preventDefault();

  
  const report = document.querySelector('#sighting-report').value.trim();
  const description = document.querySelector('#sighting-description').value.trim();
  const location = document.querySelector('#sighting-location').value.trim();
  const timeSeen = document.querySelector('#sighting-time').value.trim();

  if (location && report && description && timeSeen) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ report, description, location, timeSeen}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/create');
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
      document.location.replace('/create');
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
