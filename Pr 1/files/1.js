let x = prompt("");
let y = x.split('');
let size = y.length;
let c = [];
let m = 0;
let p = 0;
let b = 0;
if (size>=7){
	for(let i=0; i<size; i++){
		if(y[i]==y[i+6] && y[i+1]==y[i+5] && y[i+2]==y[i+4] && y[i]!=y[i+3] && y[i+1]!=y[i+3] && y[i+2]!=y[i+3] && y[+4]!=y[i+3] && y[i+5]!=y[i+3] && y[i+6]!=y[i+3]){
			if (p==0){
				m = i+1;
			}
			i+=6;
			b+=7;
			p += 1;
		}
		else{
			if (p!=0){
				alert({text:"Начало симметричного фрагмента",id:m, toString: function() {
  return `${this.text}: ${this.id}`
}});
				alert({text:"Длина симметричного фрагмента",id:b, toString: function() {
  return `${this.text}: ${this.id}`
}})
			}
			c+=y[i];
			p=0;
			m=0;
			b=0;
		}
	}
	if (p!=0){
				alert({text:"Начало симметричного фрагмента",id:m, toString: function() {
  return `${this.text}: ${this.id}`
}});
				alert({text:"Длина симметричного фрагмента",id:b, toString: function() {
  return `${this.text}: ${this.id}`
}})
			}
	alert({text:"Строка без симметричных фрагментов",id:c, toString: function() {
  return `${this.text}: ${this.id}`
}});
}
