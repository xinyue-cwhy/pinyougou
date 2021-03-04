// tab 开始
var tabtitle = document.getElementsByClassName('tabtitle')[0].children[0].children;
var content = document.getElementsByClassName('tabcontent_main');
console.log(content);
for (let i = 0; i < tabtitle.length; i++) {
  tabtitle[i].setAttribute('index', i);
  tabtitle[i].onclick = function () {
    for (let i = 0; i < tabtitle.length; i++) {
      tabtitle[i].className = '';
    }
    for (let i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    this.className = 'tabtitle_first';
    var index = this.getAttribute('index');
    content[index].style.display = 'block';
  }
}
