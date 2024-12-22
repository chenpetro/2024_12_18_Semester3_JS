// Створити функцію, яка приймає масив зображень та додає їх на сторінку в блок з id "gallery". Кожне зображення повинно бути поміщене в тег "img" з властивістю "src", яка вказує на шлях до зображення.

const images = [    'https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',   
 'https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

function addImagesToGallery(images) {
    const gallery = document.getElementById('gallery');
  
    const markup = images
      .map(src => `<img src="${src}" alt="" style="width: 20%;">`)
      .join('');
  
    gallery.innerHTML = markup;
  }
  
  addImagesToGallery(images);