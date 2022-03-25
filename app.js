let obj = [];
$(":checkbox").click(function (e) {
  let checklistItems = $(":checkbox").length;
  let checkedItemsCount = $(":checkbox:checked").length;
  $(".progress-bar.bg-success")[0].style.width = ((checkedItemsCount / checklistItems) * 100) + '%';
  let propObj = {
    id: $(this).prop('id'),
    checked: $(this).prop('checked'),
    width: $(".progress-bar.bg-success")[0].style.width
  }
  if(localStorage.getItem('checkboxlist')){
    let objListCp = JSON.parse(localStorage.getItem('checkboxlist'));
    objListCp.push(propObj);
    localStorage.setItem('checkboxlist', JSON.stringify(objListCp));
  }else{
    localStorage.setItem('checkboxlist', JSON.stringify([propObj]));
  }
})

if(localStorage.getItem('checkboxlist')){
  let objList = JSON.parse(localStorage.getItem('checkboxlist'));
  objList.forEach((obj, index, arr) => {
    $("#"+ obj.id)[0].checked = obj.checked;
  });
  $(".progress-bar.bg-success")[0].style.width = objList[objList.length - 1].width;
}