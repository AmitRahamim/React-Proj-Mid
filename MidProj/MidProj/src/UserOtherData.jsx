function UserOtherDataComp(props) {
  if (props.user != null && props.user.id<11) {
    return (
      <div 
        key={props.user.id} 
        style={{
          border: "1px solid black", 
          width: "200px", 
          height: "fit-content", 
          marginBottom: "20px", 
          padding: "10px"
        }}
      >
        Street:  <input readOnly type="text" style={{border: "1px solid black"}} value={props.user.address.street} /><br /> <br />
        City:  <input readOnly type="text" style={{border: "1px solid black"}} value={props.user.address.city} /><br /> <br />
        Zip Code:  <input readOnly type="text" style={{border: "1px solid black"}} value={props.user.address.zipcode} /><br /> <br />
      </div>
    );
  }
  return null; // Return null if props.user is null
}

export default UserOtherDataComp;
