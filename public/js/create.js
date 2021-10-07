const newFormHandler = async (event) => {
  event.preventDefault();
const form = $('.new-sighting-form').serialize()
console.log(form)
  const data = new FormData(document.getElementById('sighting'))
  const report = $('#sighting-report').val().trim();
  const description = $('#sighting-description').val().trim();
  const location = $('#sighting-location').val().trim();
  const timeSeen = $('#sighting-time').val().trim();
  // const category = $('#category').find(":selected").val().trim();
  const category = data.get("category")
  console.log(category)
  if (location && report && description && timeSeen && category) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ report, description, location, timeSeen, category }),
      headers: {
        'Content-Type': 'application/json',
      },
      // body:new FormData(document.getElementById('sighting-report'))
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

    const response = await fetch(`/api/posts/${id}`, {
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
