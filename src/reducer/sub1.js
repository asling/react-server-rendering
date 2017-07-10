
const hello = (state = 'hello world',action) => {
	if(action.type === 'actionShow'){
		return 'show:'+state;
	}else{
		return state;
	}
}

export default hello;