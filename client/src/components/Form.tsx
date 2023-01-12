/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import styled from 'styled-components';

interface IForm {
  children: ReactNode,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const StyledForm = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: center;
  }
`;

export default function Form({children, handleSubmit}: IForm) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  )
}