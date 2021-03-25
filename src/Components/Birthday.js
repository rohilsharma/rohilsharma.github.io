import React, { Component } from 'react';
import Gallery from './../PhotoGallery/Gallery';

const photo_base_path = '/images/Birthday/';

var my_photos2 = []
var i;
for (i=1; i<8; i++ ) {
  my_photos2.push({
    src: photo_base_path+i+'.JPG'
  })
}
console.log(my_photos2);

const my_photos = [
  {
    src: photo_base_path + '1.JPG',
    width: 4,
    height: 3
  },
  {
    src: photo_base_path + '2.JPG',
    width: 4,
    height: 2
  },
  {
    src: photo_base_path + '7.JPG',
    width: 178,
    height: 100
  },
  {
    src: photo_base_path + '3.JPG',
    width: 9,
    height: 16
  },
  {
    src: photo_base_path + '4.JPG',
    width: 3,
    height: 4
  },
  {
    src: photo_base_path + '6.JPG',
    width: 4,
    height: 3
  },
  {
    src: photo_base_path + '5.JPG',
    width: 133,
    height: 100
  }
]

class Birthday extends Component {
  render() {
    return (
      <div>
        <p>Happy 25th Wedding Anniversary!!</p>
        <Gallery photos={my_photos} direction={"column"}/>
      </div>
    );
  }
}

export default Birthday;
