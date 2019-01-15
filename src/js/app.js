console.log('hello!');
var ivan = true;
// if(!ivan){
//     console.log('not ivan!');
// }

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://api.giphy.com/v1/gifs/trending?&api_key=8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9&limit=5');
ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData);
  createImg(ourData);
};
ourRequest.send();

function createImg(data){
  var container = document.getElementsByClassName('testObj')[0];
  var img = document.createElement('IMG');
  img.src = data.data[0].images.downsized.url;
  container.appendChild(img);
}

var myFunc = a => {
  console.log(a + ' is amazing');
};

myFunc('coding');
