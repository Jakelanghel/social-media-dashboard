import styled from "styled-components";

export const StyledStatCards = styled.div`
  margin-top: 2.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.txt2};
  }

  .container-stat-elements {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  h2 {
    text-transform: capitalize;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .card {
    background-color: ${({ theme }) => theme.cardBg};
    padding: 2rem;
    border-radius: 5px;
  }

  .container-title,
  .container-stats,
  .container-percent {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container-percent {
    gap: 5px;
  }

  .container-title {
    margin-bottom: 1.5rem;
  }

  .stat-title {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: capitalize;
    color: ${({ theme }) => theme.txt1};
  }

  .stat {
    font-size: 2rem;
    font-weight: 700;
  }

  .arrow-img {
    width: 10px;
    height: 5px;
  }

  .percent {
    font-size: 0.75rem;
    font-weight: 700;
  }

  @media screen and (min-width: 800px) {
    text-align: center;
    .container-stat-elements {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .card {
      min-width: 300px;
    }

    h2 {
      margin: 2rem 0;
      margin-top: 3.5rem;
    }
  }
`;
