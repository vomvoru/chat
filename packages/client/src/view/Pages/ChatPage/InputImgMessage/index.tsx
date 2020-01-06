import React, { FC } from 'react';
import styled from 'styled-components';

import { useMessage } from './useMessage';

interface IProps {}

export const InputImgMessage: FC<IProps> = () => {
  const { changeHandler } = useMessage();

  return (
    <Wrapper>
      <input type="file" src="" alt="" accept=".jpg, .jpeg, .png" onChange={changeHandler} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
