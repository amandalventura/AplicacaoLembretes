import styled from "styled-components";

export const BoxTasksContainer = styled.div`
   width: 100%;

   .tasksInfo {
      margin-top: 20px;

      > p {
         font-size: 1.2rem;
         color: ${({theme}) => theme.COLORS.gray200}
      }
   }
`