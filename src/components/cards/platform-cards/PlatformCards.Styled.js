import styled from "styled-components";

export const StyledPlatformCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.cardBg};
    padding: 2rem;
    position: relative;
  }

  .accent {
    min-width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .facebook {
    background-color: ${({ theme }) => theme.facebook};
  }
  .twitter {
    background-color: ${({ theme }) => theme.twitter};
  }
  .instagram {
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.instagram1},
      ${({ theme }) => theme.instagram2}
    );
  }
  .youtube {
    background-color: ${({ theme }) => theme.youtube};
  }

  .brand-img {
    width: 20px;
  }

  .container-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  .user-name {
    font-size: 0.85rem;
    font-weight: 700;
  }

  .user-name,
  .followers-title {
    color: ${({ theme }) => theme.txt1};
  }

  .followers-total {
    font-size: 3.5rem;
    font-weight: 700;
  }

  .followers-title {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .container-daily {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .arrow-img {
    width: 10px;
    height: 5px;
  }

  .daily {
    font-weight: 700;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.green};
  }
`;
