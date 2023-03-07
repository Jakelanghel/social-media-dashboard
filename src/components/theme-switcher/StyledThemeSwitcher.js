import styled from "styled-components";

export const StyledThemeSwitcher = styled.div`
  width: 300px;
  padding: 1rem 0;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .mode {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.txt1};
  }

  .container-slider {
    width: 45px;
    height: 23px;
    background-color: ${({ theme }) => theme.toggle};
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.toggle1},
      ${({ theme }) => theme.toggle2}
    );
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 0 4px;
  }

  .slider {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryBg};
  }

  .light-mode {
    margin-left: auto;
  }
`;
