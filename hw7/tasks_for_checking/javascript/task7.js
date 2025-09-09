// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень 
// (шляхи до зображень передаються у функцію)

if (confirm('Почати тестування?')) {
  function randomPicture(src1, src2, src3, src4){
    const n = 1 + Math.floor(Math.random()*4)
    let randomImgSrc
    switch (n) {
      case 1: randomImgSrc = src1
        break;
      case 2: randomImgSrc = src2
        break;
      case 3: randomImgSrc = src3
        break;
      case 4: randomImgSrc = src4
        break;
      }
      return randomImgSrc
  }
  const randomImgSrc = randomPicture('./assets/img1.webp', './assets/img2.webp', './assets/img3.webp', './assets/img4.webp')
  document.write(`
        <div style="padding:10px;text-align:center;">
          <img src="${randomImgSrc}" width="400" />
        </div>`)
}
