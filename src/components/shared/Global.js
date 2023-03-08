import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /* ================================================================================================================== */
    /* Primary  */
    /* ================================================================================================================== */

    --lime-green: hsl(163, 72%, 41%);
    --bright-red: hsl(356, 69%, 56%);
    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%);
    --youTube: hsl(348, 97%, 39%);

    /* Dark Theme  */
    --toggle-dark: linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%);

    /* Light Theme  */
    --toggle-light: hsl(230, 22%, 74%) ;

    /* ================================================================================================================== */
    /* Neutral  */
    /* ================================================================================================================== */

    /* Dark Theme  */
    --very-dark-blue: hsl(230, 17%, 14%);         //  (BG)
    --very-dark-blue: hsl(232, 19%, 15%);         //  (Top BG Pattern)
    --dark-desaturated-blue: hsl(228, 28%, 20%);  //  (Card BG)
    --desaturated-blue: hsl(228, 34%, 66%);       //  (Text)
    --white: hsl(0, 0%, 100%) ;                   //  (Text)

    /* Light Theme  */
    --white: hsl(0, 0%, 100%);                    //  (BG)
    --very-pale-blue: hsl(225, 100%, 98%);        //  (Top BG Pattern)
    --light-grayish-blue: hsl(227, 47%, 96%);     //  (Card BG)
    --dark-grayish-blue: hsl(228, 12%, 44%);      //  (Text)
    --very-dark-blue: hsl(230, 17%, 14%) ;        //  (Text)

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.primaryBg};
        color: ${({ theme }) => theme.txt2}
    }

    .up {
        color: ${({ theme }) => theme.green};
    }

    .down {
        color: ${({ theme }) => theme.red};
    }

    

    

`;
