import { Form, Input } from 'antd';
import styled from 'styled-components';

function NicknameEditForm() {
  return (
    <FormWrapper>
      <Input.Search addonBefore="Nickname" enterButton="Edit" />
    </FormWrapper>
  );
}

const FormWrapper = styled(Form)`
  margin-top: 10px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

export default NicknameEditForm;
