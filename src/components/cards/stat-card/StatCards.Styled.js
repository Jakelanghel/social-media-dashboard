import styled from "styled-components";

export const StyledStatCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;

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
`;
