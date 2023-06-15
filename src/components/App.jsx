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
    function Add(){
        
        renderList((p)=>{
             return(
                [...p,empty]
             )
        });
        putEmptyText("")
        
        
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
        <div>
            <input onChange={inputChange}type="text"   name='task' value={empty} />

            <button onClick={Add} >Add</button>
            {state.map(list)}
        </div>
    )
}
export default App;