function light (sw) {
    var pic;
    if (sw == 0) {
      pic = "./tst_lamp/pic_bulboff.gif"
    } else {
      pic = "./tst_lamp/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }

  function Off (sw) {
    var pic;
    if (sw == 1) {
        pic = "./tst_lamp/pic_bulbon.gif"
    } else {
        pic = "./tst_lamp/pic_bulboff.gif"
    }
    console.log(sw)
    document.getElementById("myImage").src = pic;
}