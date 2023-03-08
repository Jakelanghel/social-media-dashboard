import styled from "styled-components";

export const ContainerApp = styled.main`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  @media screen and (min-width: 800px) {
    max-width: 675px;
  }

  @media screen and (min-width: 1320px) {
    max-width: 1320px;
  }
`;
