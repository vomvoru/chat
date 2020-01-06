import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {}

export const InputImgMessage: FC<IProps> = () => {
  return (
    <Wrapper>
      <input type="file" src="" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
