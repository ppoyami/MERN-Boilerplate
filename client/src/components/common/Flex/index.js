import styled from 'styled-components';

const Flex = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Flex.defaultProps = {
  w: '100%',
  h: '',
  isColumn: false,
  jc: 'center',
  ai: 'center',
  margin: '0px',
  padding: '0px',
  isWrap: false,
  bg: '',
};

const Container = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'no-wrap')};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
