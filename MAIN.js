var cus_name = document.querySelector("#name").value;

//사용자 이름 설정

var todoList = [];

var addBtn = document.querySelector("#subBtn");
addBtn.addEventListener("click", addList);

function addList() {
  var todoData = document.querySelector("#subData").value;
  if (todoData != null) {
    todoList.push(todoData);
    document.querySelector("#subData").value = "";
    document.querySelector("#subData").focus();
  }
  showList();
}
//사용자가 입력한 투두 리스트 값을, 생성한 배열에 저장

function showList() {
  var list = "<div class='data_lsit'>";
  for (var i = 0; i < todoList.length; i++) {
    list +=
      "<div>" +
      todoList[i] +
      "<button class='close' id=" +
      i +
      ">삭제</button></div>";
  }

  document.querySelector("#todo-list").innerHTML = list;

  var remove = document.querySelectorAll(".close");
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id");
  todoList.splice(id, 1);
  showList();
}
