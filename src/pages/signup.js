import * as React from 'react'
import ReactDom from 'react-dom'
import * as uniUX from '../components/uniux.js'
import { Link } from 'gatsby'
import * as firebaseSetup from '../components/firebasesetup.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'

const Page = () => {
  return (
    <body>
      <uniUX.Main pageType={'custom'} pageName={'Sign up'} content={
        <div className={uniUX.styles.halvedPageGrid}>
          <div className={uniUX.styles.halvedPageHalf} id='halvedPageHalf1' style={{ backgroundColor: 'white' }}>
            <br /><br />
            <h1 className={uniUX.styles.bigPageHeader} style={{ textAlign: 'left' }}>Sign up</h1>

            <input placeholder='Email (will be your Circel ID)' style={{ width: '30vw' }} type='email' id='signupPageEmail' /><br /><br />

            <input placeholder='Password' style={{ width: '30vw' }} type='password' id='signupPagePassword' /><br /><br /><br />

            <uniUX.PrimaryButton text='Sign up' clickFn={function () {
              uniUX.signUp(document.getElementById('signupPageEmail').value, document.getElementById('signupPagePassword').value).then(function (result) {
                if (result == 'success') {
                  // continue with the signup process
                  window.open(window.location.href.split('=')[1])
                  // ReactDom.render(
                  //   <span>
                  //     <br /><br />
                  //     <h1 className={uniUX.styles.bigPageHeader} style={{ textAlign: 'left' }}>Welcome to Circel</h1>
                  //     <p className={uniUX.styles.minorText}>
                  //       Thanks for signing up for your Circel account!
                  //       <br /><br />
                  //       Click 'Continue' to start the Circel account setup process, or if you'd prefer to do this later, just
                  //       click 'Skip' below. All of the settings you'll configure can be edited in Settings later.
                  //       <br /><br />
                  //       Note: for now this signup process is a work in progress, please check back soon.
                  //     </p><br /><br /><br />

                  //     <uniUX.PrimaryButton text='Continue' clickFn={function () {
                  //       ReactDom.render(
                  //         <span>
                  //           <br /><br />
                  //           <h1 className={uniUX.styles.bigPageHeader} style={{ textAlign: 'left' }}>Set up </h1>
                  //           <p className={uniUX.styles.minorText}>
                  //             Thanks for signing up for your Circel account!
                  //             <br /><br />
                  //             Click 'Continue' to start the Circel account setup process, or if you'd prefer to do this later, just
                  //             click 'Skip' below. All of the settings you'll configure can be edited in Settings later.
                  //             <br /><br />
                  //             Note: for now this signup process is a work in progress, please check back soon.
                  //           </p><br /><br /><br />

                  //           <uniUX.PrimaryButton text='Continue' clickFn={function () { }} />

                  //           <uniUX.SecondaryButton text='Skip' clickFn={function () { window.open(window.location.href.split('=')[1], '_self') }} /><br /><br />

                  //           <p className={uniUX.styles.minorText}>Clicking 'Skip' will take you back to the page you were on before.</p>
                  //         </span>, document.getElementById('halvedPageHalf1')
                  //       )
                  //     }} />

                  //     <uniUX.SecondaryButton text='Skip' clickFn={function () { window.open(window.location.href.split('=')[1], '_self') }} /><br /><br />

                  //     <p className={uniUX.styles.minorText}>Clicking 'Skip' will take you back to the page you were on before.</p>
                  //   </span>, document.getElementById('halvedPageHalf1')
                  // )
                  // document.getElementById('halvedPageSignUp2').style.display = 'none'
                } else {
                  console.log(result)
                  if (result == 'auth/email-already-in-use') {
                    ReactDom.render(<span>That email is already in use by a Circel account. Click 'Log in instead' to log in.</span>, document.getElementById('errorRenderSpace'))
                  } else if (result == 'auth/weak-password') {
                    ReactDom.render(<span>That password looks too weak - make sure it's over 6 characters long.</span>, document.getElementById('errorRenderSpace'))
                  } else {
                    ReactDom.render(<span>An error occurred (<code>{result.split('/')[1]}</code>)</span>, document.getElementById('errorRenderSpace'))
                  }
                }
              })
            }} />

            <uniUX.SecondaryButton text='Log in instead' clickFn={function () { window.open('/login?next=' + window.location.href.split('=')[1], '_self', '_self') }} /><br /><br />

            <p className={uniUX.styles.minorText}>By continuing, you confirm you have read and agree to Circel's Terms.</p>
            <br /><br />
            <span id='errorRenderSpace' className={uniUX.styles.minorText} style={{ color: 'var(--red)' }}></span>
          </div>

          <div className={uniUX.styles.halvedPageHalfSignup1} id='halvedPageSignUp2'>
            <br /><br /><br /><br /><br />
            <h1 className={uniUX.styles.bigPageHeader} style={{ fontSize: '2.5vw', color: 'white' }}>Sign up a different way</h1>

            <uniUX.SecondaryButton styles={{ width: '25vw', textAlign: 'left', color: 'white' }} clickFn={function () {
              uniUX.logInGoogle().then(function (result) {
                if (result == 'success') {
                  window.open(window.location.href.split('=')[1], '_self')
                } else {
                  console.log(result)
                  if (result == 'auth/popup-blocked') {
                    ReactDom.render(<span>You need to allow the popup to log in with Google.</span>, document.getElementById('errorRenderSpace'))
                  } else if (result == 'auth/wrong-password') {
                    ReactDom.render(<span>That password doesn't match your Circel ID - please try again.</span>, document.getElementById('errorRenderSpace'))
                  } else if (result == 'auth/user-disabled') {
                    ReactDom.render(<span>This Circel account has been disabled.</span>, document.getElementById('errorRenderSpace'))
                  } else {
                    ReactDom.render(<span>An error occurred (<code>{result.split('/')[1]}</code>)</span>, document.getElementById('errorRenderSpace'))
                  }
                }
              })
            }} text={<p>&ensp;<FontAwesomeIcon icon={brandIcons.faGoogle} />&emsp;Sign up with Google&ensp;</p>} /><br /><br />

            <uniUX.SecondaryButton styles={{ width: '25vw', textAlign: 'left', color: 'white' }} clickFn={function () {
              uniUX.logInTwitter().then(function (result) {
                if (result == 'success') {
                  window.open(window.location.href.split('=')[1], '_self')
                } else {
                  console.log(result)
                  if (result == 'auth/popup-blocked') {
                    ReactDom.render(<span>You need to allow the popup to log in with Twitter.</span>, document.getElementById('errorRenderSpace'))
                  } else if (result == 'auth/wrong-password') {
                    ReactDom.render(<span>That password doesn't match your Circel ID - please try again.</span>, document.getElementById('errorRenderSpace'))
                  } else if (result == 'auth/user-disabled') {
                    ReactDom.render(<span>This Circel account has been disabled.</span>, document.getElementById('errorRenderSpace'))
                  } else {
                    ReactDom.render(<span>An error occurred (<code>{result.split('/')[1]}</code>)</span>, document.getElementById('errorRenderSpace'))
                  }
                }
              })
            }} text={<p>&ensp;<FontAwesomeIcon icon={brandIcons.faTwitter} />&emsp;Sign up with Twitter&ensp;</p>} /><br /><br />
          </div>
        </div>
      }>
      </uniUX.Main>
    </body>
  )
}

export default Page
