import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
        font-family: 'Inter', sans-serif;      
    }

    root {
        font-size: 62.5%;
    }

    body {
        width: 100%;
        height: 100vh;
        background-color: #1a1a1a;
        color: white;

        font-family: 'Inter', sans-serif;
    }
    
    body::before {
        background-color: #0d0d0d;

        width: 100%;
        height: 10rem;
        
        position: absolute;
        z-index: -1;
        top: 0;
        content: '';
    }
    
    button, a {
        cursor: pointer;
        transition: filter .2s;
      }
}

`
