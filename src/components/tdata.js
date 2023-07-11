export default function Tdata({
    id = {},
    name = {},
    username = {},
    deluser = {},
    editUser,
  }) {
    return (
      <>
        <tr>
          <td> {name} </td>
          <td> {username} </td>
          <td>
            <div className="flex-space">
              <button onClick={() => editUser(id)}>EDIT</button>
              <button onClick={() => deluser({ id })}>DELETE</button>
            </div>
          </td>
        </tr>
      </>
    );
  }