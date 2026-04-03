function Select(name, select, length, new_class){
	for (i = 0; i < length; i++){
	  var element = document.getElementById(name+i);
	  element.classList.remove(new_class);
	}
	document.getElementById(name+select).classList.add(new_class);
}

function setting(name, select, length, new_class, key, value){
	Select(name, select, length, new_class, key, value);
	localStorage.setItem(key, value);
}

function showNext(){
  document.getElementById("next").classList.remove("expandable");
  document.getElementById("next").classList.add("expanding");
}