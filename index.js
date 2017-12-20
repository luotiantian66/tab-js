function $(selector){
   return document.querySelector(selector)
}
function $$(selector){
   return document.querySelectorAll(selector)
}

$$('.blk').forEach(function(e){
	e.onclick = function(){
		this.parentNode.querySelectorAll('.blk').forEach(function(a){
			a.classList.remove('active')
		})
		this.classList.add('active')
		//console.log(this.innerText)
		//console.log(this.parentNode)
		console.log(((this.parentNode).parentNode).children[1])

		// ((this.parentNode).parentNode).children[1].classList.remove('active')
		for(i=0;i<4;i++){
			if(i==this.innerText-1){
				((this.parentNode).parentNode).children[1].children[i].classList.add('active')
			}else{
				((this.parentNode).parentNode).children[1].children[i].classList.remove('active')
			}
		}

	}
})