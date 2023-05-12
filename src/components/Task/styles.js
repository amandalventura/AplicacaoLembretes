import styled from "styled-components";

export const TaskContainer = styled.div`
  margin-top: 12px;
  padding: 1rem;

  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.gray500};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray400};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

button {
  background: transparent;
  color: ${({ theme }) => theme.COLORS.gray200};
  font-size: 1.4rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  width: 24px;
  height: 24px;

  :nth-of-type(1){
    color: ${({ theme }) => theme.COLORS.blue};
    :hover {
    color: ${({ theme }) => theme.COLORS.blueDark};
  }
  }
  :nth-of-type(2){
    :hover {
    color: ${({ theme }) => theme.COLORS.danger};
  }
  }
}

button.concluded {
  :nth-of-type(1){
    color: ${({ theme }) => theme.COLORS.purpleDark};
  }
  :hover {
    color: ${({ theme }) => theme.COLORS.purple};
  }
}

p {
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 20px;

  color: ${({ theme }) => theme.COLORS.gray100};
}

p.concluded {
  text-decoration-line: line-through;
  color: ${({ theme }) => theme.COLORS.gray300};
}
`