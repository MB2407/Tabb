import * as React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './Balance.css';

function Balance() {
  const url= 'https://scenarioemployee.azurewebsites.net/api/HttpTrigger2?code=G_bxgTEjIOokO0kudpvXmSuZ77lhXL4b2wnysbA85kEBAzFuocpuxA==&id=3'
  const [leaves, setLeaves] = useState(null)

  let info = null

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setLeaves(response.data)
        console.log(response.data)

      })
  }, [url])

  if(leaves){
    info = 
    <div className="App">
      <h1>Balance Leaves</h1>
      <table class="center">
        <tr>
          <th>Type of Leave</th>
          <th>Allowance</th>
          <th>Availed</th>
          <th>Remaining</th>
        </tr>
        <tr>
          <td>Paid Leave</td>
          <td>{leaves.paidAllowance}</td>
          <td>{leaves.paidAvailed}</td>
          <td>{leaves.paidRemaining}</td>
        </tr>
        <tr>
          <td>Sick Leave</td>
          <td>{leaves.sickAllowance}</td>
          <td>{leaves.sickAvailed}</td>
          <td>{leaves.sickRemaining}</td>
        </tr>
        <tr>
          <td>Maternity Leave</td>
          <td>{leaves.maternityAllowance}</td>
          <td>{leaves.maternityAvailed}</td>
          <td>{leaves.maternityRemaining}</td>
        </tr>
        <tr>
          <td>Leaves carried over from previous year</td>
          <td>{leaves.prevAllowance}</td>
          <td>{leaves.prevAvailed}</td>
          <td>{leaves.prevRemaining}</td>
        </tr>
      </table>
    </div>
  }
  
  return(
    <div>
      {info}
    </div>
  )
}

export default Balance;