// alert("table.js")

// 新增数据函数
function addRow() {
    var table = document.getElementById("table");
    // console.log(table)
    // 获取插入的位置
    var length = table.rows.length;
    // console.log(length);
    // 插入行节点
    var newRow = table.insertRow(length);
    // console.log(newRow);
    // 插入列节点对象
    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var actionCol = newRow.insertCell(2);

    // 修改节点文本内容
    nameCol.innerHTML = "未命名";
    phoneCol.innerHTML = "无联系方式";
    actionCol.innerHTML = "<button onclick='editRow(this)'>编辑</button><button onclick='deleteRow(this)'>删除</button>";
}

// 删除数据函数
function deleteRow(button) {
    // console.log(button);
    var row = button.parentNode.parentNode; // 获取当前行
    // console.log(row);
    row.parentNode.removeChild(row); // 删除当前行
}

// 编辑数据函数

function editRow(button) {
    // console.log(button);
    var row = button.parentNode.parentNode; // 获取当前行
    var nameCol = row.cells[0]; // 获取姓名列
    var phoneCol = row.cells[1]; // 获取电话列

    var inputName = prompt("请输入姓名"); // 弹出输入框
    var inputPhone = prompt("请输入联系方式", nameCol.innerHTML); // 弹出输入框
    
    nameCol.innerHTML = inputName; // 修改姓名列内容
    phoneCol.innerHTML = inputPhone; // 修改姓名列内容
}