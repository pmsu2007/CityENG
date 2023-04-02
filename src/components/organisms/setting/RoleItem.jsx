import { permissionType, roleType } from "../../../data";
import { RoleItemDiv, RolePermissionListDiv, RolePermissionItemDiv } from "../../../styledComponents";

const RoleItem = ({ name, permissions }) => {
  return (
    <>
      <RoleItemDiv>
        <div style={{ marginBottom: "10px" }}>
          {roleType.filter((role) => role.type === name)[0].name}
        </div>
        <RolePermissionListDiv>
          {permissions.map((permission) => {
            return (
              <RolePermissionItemDiv>
                {
                  permissionType.filter((item) => item.type === permission)[0]
                    .name
                }
              </RolePermissionItemDiv>
            );
          })}
        </RolePermissionListDiv>
      </RoleItemDiv>
    </>
  );
};

export default RoleItem;
