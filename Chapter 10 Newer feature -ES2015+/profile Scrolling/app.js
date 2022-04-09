// create Iterator
const data = [
    {
        name: 'Tommy',
        age: 25,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'DHA phase-4',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    }, 
    {
        name: 'Sara',
        age: 23,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Islamabad sector-h12',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Chalo',
        age: 30,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'DHA phase-Iv',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    }
];

const profiles = profileIterator(data); // passing to data to profileIterator() function
nextProfile();
// next event 
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {

    const currentProfile = profiles.update().value;

    if(currentProfile !== undefined) {
      document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Age: ${currentProfile.age}</li>
          <li class="list-group-item">Location: ${currentProfile.location}</li>
          <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
      `;
  
      document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
      // No more profiles
      window.location.reload();
    }
} // end of function


// profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

  return {
    update: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}

console.log(profiles.update().value);
console.log(profiles.update().value);
