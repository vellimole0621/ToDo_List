//사용자 이름 설정

var cus_name = document.querySelector("#name").value;

//사용자가 입력한 투두 리스트 값을, 생성한 배열에 저장

var todoList = [];

var addBtn = document.querySelector("#subBtn");
addBtn.addEventListener("click", addList);

function addList() {
  var todoData = document.querySelector("#subData").value;
  if (todoData != "") {
    todoList.unshift(todoData);
    document.querySelector("#subData").value = "";
    document.querySelector("#subData").focus();
  }
  showList();
}

function showList() {
  var list = "<div id='data_list'>";
  for (var i = 0; i < todoList.length; i++) {
    list +=
      "<div class = 'todoDiv'><span id='inTodo'>" +
      "*" +
      todoList[i] +
      "</span><div class='re'><button class='re_del' id=" +
      i +
      ">삭제</button><button class='re_cor' id=" +
      i +
      ">수정</button></div></div>";
  }

  document.querySelector("#todo-list").innerHTML = list;

  var remove = document.querySelectorAll(".re_del");
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id");
  todoList.splice(id, 1);
  showList();
}
