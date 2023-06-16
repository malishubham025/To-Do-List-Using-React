import React from 'react';
import List from './list';
function App(){
    var Tasks=[];
    var value;
    var [empty,putEmptyText]=React.useState("");
    var [state,renderList]=React.useState([]);
    
    function inputChange(event){
          value=event.target.value;
          putEmptyText(value);
         
    }
    function Add(event){
        
        renderList((p)=>{
             return(
                [...p,empty]
             )
        });
        putEmptyText("")
        event.preventDefault();
        
    }
    function list(values,id){
        
         return(
            <List id={id} name={values} onChecked={deleteitem}/>
         )
    }
    function deleteitem(id){
        console.log(id);
        renderList((p)=>{
            var list=p;
            p=p.filter((value,index)=>{
              return index!==id
                
              
            })
            return(
               p
            )
       });
    }
    return(
        <div >
            <form onSubmit={Add} autocomplete="off">
            <input onChange={inputChange}type="text"   name='task' value={empty} />

            <button  > <span>Add</span> </button>
            <div className='Lists'>{state.map(list)}</div>
            </form>
        </div>
    )
}
export default App;