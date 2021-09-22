import EthName from './EthName'

const Account = function ({accounts, connect, isLogedIn}) {
  // TODO!!!
  // if already logged in, it should show 
  // the EthName component with the correct address
  // if not logged in, show a connect button
  // that when its clicked, will prompt us to login
  // and store the info on the page



  if(isLogedIn){
    return (
        <button>{accounts[0]}</button>
      )

  }else{
    return(
      <button onClick={connect}>conect</button>
    )
  }
 

}

export default Account;