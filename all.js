var com = document.querySelector('.com');
var add = document.querySelector('.add');
var keyput = document.querySelector('.text');
var deleall = document.querySelector('.deleAll');
var listdata = JSON.parse(localStorage.getItem('listData')) || [];

add.addEventListener('click',addlist,false);
com.addEventListener('click',dele,false);
deleall.addEventListener('click',deleAll,false);
keyput.addEventListener('keypress',keyboardIn,false);
updateList(listdata);

//使用鍵盤(enter)控制
function keyboardIn(e){
    if(e.code === 'Enter' ||e.code === 'NumpadEnter'){
        addlist();
    }
}
// 新增項目
function addlist(){
	var txt = document.querySelector('.text').value;
	var todo = {
      content: txt
    };
    listdata.push(todo);
	updateList(listdata);
	localStorage.setItem('listData', JSON.stringify(listdata));
	console.log(listdata);
	document.querySelector('.text').value = '';
};
// html新增項目/更新
function updateList() {
    str = '';
    var len = listdata.length;
    for (var i = 0; len > i; i++) {
      str += '<li><a href="#" data-index=' + i + ' /class="dele">刪除</a> <span>'+(i+1)+'.' + listdata[i].content + '</span></li>';
    }
    com.innerHTML = str;
};
//單一刪除
function dele(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    listdata.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(listdata));
    updateList(listdata);
};

//刪除全部
function deleAll(){
	console.log(listdata.length);
	var deleteData =listdata.splice(0,listdata.length)
	localStorage.setItem('listData', JSON.stringify(listdata));
	updateList(listdata);
	console.log(listdata);
	}
	

