import * as React from 'react'
import * as uniUI from '../components/uniui.js'
import { Link } from 'gatsby'
import * as firebaseSetup from '../components/firebasesetup.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'

const LoginPage = () => {
  return (
    <body>
    <uniUI.Main appPage={true} pageName={'Log in'} content={
      <div className={uniUI.styles.halvedPageGrid}>
        <div className={uniUI.styles.halvedPageHalf}>
        <br/><br/>
        <h1 className={uniUI.styles.bigPageHeader} style={{textAlign: 'left'}}>Log in</h1>

        <input placeholder='Circel ID' style={{width:'30vw'}} type='email' id='loginPageEmail'/><br/><br/>

        <input placeholder='Password' style={{width:'30vw'}} type='password' id='loginPagePassword'/><br/><br/><br/>

        <uniUI.PrimaryButton text='Log in' clickFn={function(){uniUI.logIn(document.getElementById('loginPageEmail').value, document.getElementById('loginPagePassword').value)}}/>

        <uniUI.SecondaryButton text='Sign up instead' clickFn={function(){window.open('/signup', '_self')}}/>
        </div>

        <div className={uniUI.styles.halvedPageHalfSignup1}>
        <br/><br/><br/><br/><br/>
        <h1 className={uniUI.styles.bigPageHeader} style={{fontSize: '2.5vw', color: 'white'}}>Sign up a different way</h1>

        <uniUI.SecondaryButton styles={{width: '25vw', textAlign: 'left', color: 'white'}} clickFn={function(){uniUI.logInGoogle()}} text={<p>&ensp;<FontAwesomeIcon icon={brandIcons.faGoogle}/>&emsp;Log in with Google&ensp;</p>}/><br/><br/>

        <uniUI.SecondaryButton styles={{width: '25vw', textAlign: 'left', color: 'white'}} clickFn={function(){uniUI.logInTwitter()}} text={<p>&ensp;<FontAwesomeIcon icon={brandIcons.faTwitter}/>&emsp;Log in with Twitter&ensp;</p>}/><br/><br/>
      </div>
      </div>
    }>
    </uniUI.Main>
    </body>
  )
}

export default LoginPage
