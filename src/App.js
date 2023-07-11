import Tdata from "./components/tabledata";
import "./App.css";
import { useState } from "react";



function App() {
  const tdata = [
    {
      id: 1,
      name: "jomin",
      username: "jominjos",
    },
    {
      id: 2,
      name: "sathis",
      username: "gopi sharma",
    },
    {
      id: 3,
      name: "hemanth",
      username: "node_hemanth",
    },
    {
      id: 4,
      name: "jessin",
      username: "jessintek",
    },
  ];
  const initialUser = {
    name: "",
    username: "",
  };
  const [celldata, setCelldata] = useState(tdata);

  const [user, setUser] = useState(initialUser);
  const [editId, setEditId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editing, setEditing] = useState({ id: "", name: "", username: "" });

  //console.log(celldata);
  function addUser(event) {
    event.preventDefault();
    //console.log(user);
    let newdata = [...celldata];
    let newuser = { ...user, id: celldata.length + 1 };
    newdata.push(newuser);
    setCelldata(newdata);
    setUser(initialUser);
  }
  function resetAdd(params) {
    setUser(initialUser);
    
  }
  function updateUser(event) {
    event.preventDefault();
    let newdata = [...celldata];
    newdata.map((d, i) => {});
  }

  function delUser(id) {
    let celldataCopy = [...celldata];
    celldataCopy = celldataCopy.filter((d) => d.id !== id.id);
    setCelldata(celldataCopy);
    console.log(id);
    setEdit(false);
  }

  function editUser(id) {
    console.log("edit", id);
    setEditing({ ...id });
    setEditId(id.id);
    setEdit(true);
    // let celldataCopy = [...celldata];
    // celldataCopy = celldataCopy.filter((d) => d.id === id.id);
    // setEditing(celldataCopy);
    // console.log(celldataCopy);
    
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    //console.log(user);

    console.log(event.target.value);
  }

  function handleEditChange(event) {
    const { name, value } = event.target;
    setEditing({ ...editing, [name]: value });
    console.log(event.target.value);
  }
  function cancelEdit(params) {
    setEdit(!edit);
  }
  function onUpdate() {
    let index = celldata.findIndex((ind) => ind.id === editId);
    celldata[index].name = editing.name;
    celldata[index].username = editing.username;
   
    setEdit(false)
    setCelldata([...celldata]);
    
  }
  return (
    <>
      <h1>Welcome to CRUD</h1>
      <div className="flex margin10">
        {edit ? (
          <div className="alignitems">
            <h2 className="width-half1" id="addusers">
              EDIT USER
            </h2>
            <div>
              <form id="form1" onSubmit={updateUser}>
                <div>
                  <label htmlFor="fname">Name</label>
                  <br />
                  <input
                  className="input-group-text"
                    required
                    onChange={handleEditChange}
                    type="text"
                    id="name"
                    value={editing.name}
                    name="name"
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="lname">User Name</label>
                  <br />
                  <input
                  className="input-group-text"
                    required
                    onChange={handleEditChange}
                    type="text"
                    id="lname"
                    value={editing.username}
                    name="username"
                  />
                </div>
                <div className='sub-btn'  >
                  <button className='btn btn-primary btn-sm save-btn'   type="submit" onClick={onUpdate}>
                    Save
                  </button>
                  <button className='btn btn-danger btn-sm save-btn' type="reset" onClick={() => cancelEdit()}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (<div className='alignitems'>
      <h2 className='width-half'  id='addusers'>ADD USER</h2>
     <div>
    <form id='form2' onSubmit={addUser} >
    <div>
    <label htmlFor="fname">Name</label><br/>
      <input className="input-group-text " required onChange={handleChange} type="text" id="name" value={user.name} name="name"/><br/>
    </div>
      <div>
      <label htmlFor="lname">User Name</label><br/>
      <input className="input-group-text" required onChange={handleChange} type="text" id="lname" value={user.username} name="username"/>
      </div>
      <div className='sub-btn flex-space' >
      <button type='submit' className='btn btn-primary btn-sm save-btn' >Submit</button>
        <button type='reset' className='btn btn-danger btn-sm save-btn' onClick={resetAdd}>Reset</button>
      </div>
      


    </form>
     </div>
      
     </div>
     
     )}

        <div className="flexcol color1">
          <h2 className="width-half1">VIEW USERS</h2>
          <table id="tablu" className="table table-striped">
            <thead>
              <tr>
                <th width="30%"> ID </th>
                <th width="45%"> USER NAME </th>
                <th id="action"> ACTIONS </th>
              </tr>
            </thead>
            <tbody>
              {celldata.map((d) => (
                <Tdata
                  id={d.id}
                  editUser={() => editUser(d)}
                  deluser={delUser}
                  name={d.name}
                  username={d.username}
                  key={d.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
