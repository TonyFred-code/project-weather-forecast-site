import img113Day from './icons/day/113.png';
import img113Night from './icons/night/113.png';
import createImg from './createImg';

const images = {
  '113Day': img113Day,
  '113Night': img113Night,
};

export default function getImg(imgCode) {
  const src = images[imgCode];
  if (src) {
    const img = createImg(src);
    return img;
  }

  return null;
}
