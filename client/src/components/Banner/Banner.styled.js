import styled, { css, keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-130%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }

`;

export const Banner = styled.div`
  display: none;
  position: absolute;
  top: 3%;
  left: 25%;
  width: 50%;
  height: 5rem;
  border-radius: 5px;
  padding-top: 1.6rem;
  ${({ theme, isSuccess }) =>
    isSuccess
      ? css`
          background-color: ${theme.colors.SUCCESS};
        `
      : css`
          background-color: ${theme.colors.FAIL};
        `};
  ${({ show }) =>
    show &&
    css`
      display: block;
      animation-name: ${slideDown};
      animation-duration: 500ms;
      animation-fill-mode: forwards;
    `}
`;
export const Text = styled.h3`
  text-align: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
`;
