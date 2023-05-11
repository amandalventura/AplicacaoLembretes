import styled from "styled-components";

export const EmptyContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 10px;

   padding: 60px 20px;
   border-top: 1px solid ${({ theme }) => theme.COLORS.gray400};
   border-radius: 8px;

   color: ${({ theme }) => theme.COLORS.gray300};

   img{
    height: 56px;
    width: 56px;
   }

   .msg{
    font-weight: bold;
   }
`