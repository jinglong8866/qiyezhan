

{
	let pagers=document.querySelectorAll(".shouye");
	console.log(pagers);
	pagers.forEach(function(ele,index){
		ele.onmouseover=function(){
			for(let i=0;i<pagers.length;i++){
				pagers[i].classList.remove('active');
				
			}
			this.classList.add('active');
			n=index
		}
	})
}
