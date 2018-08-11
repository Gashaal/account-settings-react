import React from 'react';
import styled from 'styled-components';

import FormRow from '../FormRow';
import FormField from '../FormField';
import FormLabel from '../FormLabel';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';
import FormButton from '../FormButton';

import avatar from './avatar.jpg';

const FormWrapper = styled.div`
  padding: 60px 30px 30px;
  background: #fff;
  margin-right: -60px;
  box-shadow: 0 22px 50px rgba(14,21,47, .2), 0 8px 20px rgba(14,21,47, .2);
  position: relative;
  
  @media (min-width: 768px) {
    padding: 60px 40px 40px;
    margin-right: -120px;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  position: absolute;
  top: -32px;
`;

export default () => {
  return (
    <div>
      <FormWrapper>
        <Avatar src={avatar}/>
        <form>
          <FormRow>
            <FormField>
              <FormLabel>username</FormLabel>
              <FormInput placeholder='Enter you username'/>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <FormLabel>First name</FormLabel>
              <FormInput placeholder='Enter you first name'/>
            </FormField>

            <FormField>
              <FormLabel>Last name</FormLabel>
              <FormInput placeholder='Enter you last name'/>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <FormLabel>email</FormLabel>
              <FormInput placeholder='Enter you email'/>
            </FormField>
          </FormRow>

          <FormRow>
            <FormField>
              <FormLabel>bio</FormLabel>
              <FormTextarea placeholder='Tell us about yourself'/>
            </FormField>
          </FormRow>
        </form>
      </FormWrapper>
      <ButtonsWrapper>
        <FormButton>Cancel</FormButton>
        <FormButton>Save</FormButton>
      </ButtonsWrapper>
    </div>
  )
}