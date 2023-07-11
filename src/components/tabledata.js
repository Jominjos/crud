export default function Tdata ({
   id={},
   name={},
   username={},
   deluser={},
   editUser={}
}) {

    return(
       <>
        <tr>
            <td>   {name} </td>
            <td>  {username}  </td>
            <td>   
          <div className='flex-space' >
            <button className='btn btn-primary btn-sm' onClick={()=>editUser({id})}>EDIT</button>
            <button className='btn btn-danger btn-sm' onClick={()=>deluser({id})}>DELETE</button>
          </div>
            
             </td>
          </tr>
       </>
    )
    
}