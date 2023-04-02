import { InviteOption, Inviteselect } from "../../../styledComponents";
import { useState } from "react";
import { roleType } from "../../../data";

const RoleSelect = ({ options, ...props }) => {
  const [selectValue, setSelectValue] = useState();
  return (
    <>
      <Inviteselect
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        onBlur={() => {
          props.getResult(selectValue);
        }}
      >
        <InviteOption value={props.role}/>
        {options &&
          options.map((option, idx) => (
            <InviteOption key={idx} value={option.id}>
              {roleType.filter((item) => item.type === option.name)[0].name}
            </InviteOption>
          ))}
      </Inviteselect>
    </>
  );
};

export default RoleSelect;
