import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../assets/backgroundLogin.png'


export default createGlobalStyle`

* {
   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body {
    background: url('${BackgroundImage}')
}



`