import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   gap: 12px;
   justify-content: center;
   align-items: center;
   margin-top: 2rem;

   img {
    height: 3em;
   }

   h1 {
       color: ${({ theme }) => theme.COLORS.orange};
       font-weight: 900;
       font-size: 3rem;

       span {
       color: ${({ theme }) => theme.COLORS.purpleDark};
       }
       
   }
`