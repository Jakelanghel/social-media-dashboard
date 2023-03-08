import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;

  h1,
  h2 {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2rem;
  }

  h1 {
    font-size: 1.55rem;
  }

  h2 {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.txt1};
  }

  span {
    margin-left: 5px;
  }

  .container-title {
    border-bottom: solid 2px ${({ theme }) => theme.cardBg};
    padding-bottom: 0.5rem;
  }

  @media screen and (min-width: 800px) {
    position: relative;
    padding-bottom: 3rem;

    .container-title {
      border-bottom: none;
    }
  }
`;
