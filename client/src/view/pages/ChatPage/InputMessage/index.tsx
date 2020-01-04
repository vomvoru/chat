import React, { FC } from 'react';
import styled from 'styled-components';

import { useMessage } from './useMessage';

interface IProps {}

export const InputMessage: FC<IProps> = () => {
  const { changeHandler, message, send } = useMessage();

  return (
    <Wrapper>
      <input type="text" placeholder="message" value={message} onChange={changeHandler} />
      <input type="button" value="send" onClick={send} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
