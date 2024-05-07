function apform(){
    return (
        <div>
    <h2> <center> Application form for Personal Leave </center></h2> 
<form>
  <center>
  <table>
    <tr>
      <td><label for="fname">First name:</label> </td>
      <td><input type="text" id="fname" name="fname"required/></td>
    </tr>
  <tr>
    <td><label for="lname">Last name:</label></td>
    <td><input type="text" id="lname" name="lname"required/></td>
  </tr>
  <tr>
    <td> <label for="empid">Employee ID:</label> </td>
    <td> <input type="text" id="empid" name="empid"required/>    </td> 
    </tr>
    <tr>
      <td> <label for="dep">Department:</label> </td>
      <td> <input type="text" id="dep" name="dep"required/> </td>
    </tr>
    <tr rowspan='2'>
      <td><label for="gen">Gender:</label> </td>
      <td>
 <select id="gen">
   <option value="Select">Select</option>
   <option value="Male">Male</option>
   <option value="Female">Female</option>
   <option value="Pns">Prefer Not to Say</option>
 </select>
  </td>
    </tr>
    <tr>
      <td><label for="reason">Reason for Leave:</label></td>
        <td><textarea id="reason" name="reason" rows="4" cols="50" required></textarea> </td>
    </tr>
    <tr>
      <td> <input type="submit" value="Submit"/></td>
           <td> <input type="submit" value="Cancel"/></td>
      
    </tr>

  </table>
  </center>
</form> 
</div>
    ); 
}
export default apform;
