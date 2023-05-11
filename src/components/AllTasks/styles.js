import styled from "styled-components";

export const AllTasksContainer = styled.section`
   display: flex;
   flex-direction: column;

   gap: 2rem;

   .info {
    display: flex;
    justify-content: space-between;

    h2 {
        font-size: 1.2rem;
        display: flex;
        gap: 10px;

    span {
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.COLORS.gray400};
        color: ${({ theme }) => theme.COLORS.gray100};
        font-size: 1rem;

        border-radius: 50%;
    }
    }
   }
   .created {
        color: ${({ theme }) => theme.COLORS.blue};
    }
    .concluded {
        color: ${({ theme }) => theme.COLORS.orange};
    }
`