import styled from "styled-components";

export const TaskContainer = styled.section`
   display: grid;
   grid-template-columns: 3fr .5fr .5fr;
   gap: 8px;
   align-items: center;
   
   input {
    padding: 10px;

    width: 100%;

    border-radius: 8px;
    border: none;
    box-shadow: 1px 1px 2px 0px rgba(255, 255, 255, .2);

    background-color: ${({ theme }) => theme.COLORS.gray500};
    color: ${({ theme }) => theme.COLORS.gray100};
   }

   button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    padding: 10px;
    
    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.blueDark};
    box-shadow: 1px 1px 2px 0px rgba(255, 255, 255, .2);
    color: ${({ theme }) => theme.COLORS.gray100};
    font-weight: 700;

    :hover {
        background-color: ${({ theme }) => theme.COLORS.blue};
    }
   }
`