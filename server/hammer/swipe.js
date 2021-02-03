const images = [
    { id: 1, src: './images/image01.jpg', title: 'foo', description: 'bar' },
    { id: 2, src: './images/image02.jpg', title: 'foo', description: 'bar' },
    { id: 3, src: './images/image03.jpg', title: 'foo', description: 'bar' },
    { id: 4, src: './images/image04.jpg', title: 'foo', description: 'bar' },
    { id: 5, src: './images/image05.jpg', title: 'foo', description: 'bar' },
    { id: 6, src: './images/image06.jpg', title: 'foo', description: 'bar' },
    { id: 7, src: './images/image07.jpg', title: 'foo', description: 'bar' },
    { id: 8, src: './images/image08.jpg', title: 'foo', description: 'bar' },
    { id: 9, src: './images/image09.jpg', title: 'foo', description: 'bar' },
    { id: 10, src: './images/image10.jpg', title: 'foo', description: 'bar' }
  ];

// hammer swipe stuff


var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright", function(ev) {
  //if (ev.type == panleft) {
  // add recipe id to favorites list, 
  // remove recipe id from swipeable list,
  // load next recipe}
    //elif (ev.type == panright) {
    // load next recipe}
    console.log(ev.type +" gesture detected");
  myElement.textContent = ev.type +" gesture detected";  
});

// { images.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)}