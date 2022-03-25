let obj = [];
$(":checkbox").click(function (e) {
  let checklistItems = $(":checkbox").length;
  let checkedItemsCount = $(":checkbox:checked").length;
  $(".progress-bar.bg-success")[0].style.width = ((checkedItemsCount / checklistItems) * 100) + '%';
  let propObj = {
    id: $(this).prop('id'),
    checked: $(this).prop('checked'),
    width: $(this).prop('checked') ? 20 : 0
  }
  if(localStorage.getItem('checkboxlist')){
    let objListCp = JSON.parse(localStorage.getItem('checkboxlist'));
    let fd = objListCp.findIndex((obj) => obj.id == propObj.id);
    if(fd>=0){
        objListCp[fd] = propObj;
    }else{
        objListCp.push(propObj);
    }
    localStorage.setItem('checkboxlist', JSON.stringify(objListCp));
  }else{
    localStorage.setItem('checkboxlist', JSON.stringify([propObj]));
  }
})

if(localStorage.getItem('checkboxlist')){
  let objList = JSON.parse(localStorage.getItem('checkboxlist'));
  let totalWidth = 0;
  objList.forEach((obj, index, arr) => {
    $("#"+ obj.id)[0].checked = obj.checked;
    totalWidth += obj.width;
  });
  $(".progress-bar.bg-success")[0].style.width = totalWidth + '%';
// let checklistItems = $(":checkbox").length;
// let checkedItemsCount = $(":checkbox:checked").length;
// $(".progress-bar.bg-success")[0].style.width = ((checkedItemsCount / checklistItems) * 100) + '%';
}