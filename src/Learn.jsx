import React ,{useState,useRef}from 'react';
import Todo from './Todo'
function Learn(){
  const[ todo, settodo ] = (useState(['todo1' , 'todo2']))
  console.log(todo)
function handleadd(e){
alert('sadasd')
}
  
return(
<div>
<Todo todos = {todo}/>
<input type="text" />
<button onClick={handleadd}>add</button>
  <button>clear</button>
</div>
  
)
}
export default Learn;