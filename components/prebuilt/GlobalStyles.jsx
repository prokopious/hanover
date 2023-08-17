import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}
    />
    <Global
      styles={css`
        input,
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          border-style: none;
        }
      `}
    />
    <Global
      styles={css`
        body,
        html {

          font-size: 18px;
      
         
        }
        body {
          background: url('https://images.pexels.com/photos/5908191/pexels-photo-5908191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

        }
  
      `}
    />
  </>
);

export default GlobalStyles;
