import { getUserfromSS } from "../ConfigFiles/SmallFunctions";
import { AiOutlineDashboard } from "react-icons/ai";
import { css } from "../ConfigFiles/Consts";
import { MdMiscellaneousServices, MdOutlineFestival } from "react-icons/md";
import { GrBundle, GrServices } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu"
import { TbMessage2Heart } from "react-icons/tb";
import { MdProductionQuantityLimits } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
export const sidenavbar = () => {
  let roleId = getUserfromSS()?.roleId
  console.log(getUserfromSS(), "roleid")
  switch (roleId) {
    case 1:
      return [
        {
          name: "Dashboard",
          icon: <AiOutlineDashboard size={css.iconSize2} />,
          path: "/v1/service/dashboard/adminDashboard",
        },

        {
          name: "Product",
          icon: <MdProductionQuantityLimits size={css.iconSize2} />,
          path: "/v1/service/product/all-product",
        },

        {
          name: "Bundle",
          icon: <GrBundle size={css.iconSize2} />,
          path: "/v1/service/bundle/all-bundle",
        },
        {
          name: "Requests",
          icon: <TbMessage2Heart size={css.iconSize2} />,
          path: "/v1/service/request/all-request",
        },
        {
          name: "Organization",
          icon: <VscOrganization size={css.iconSize2} />,
          path: "/v1/service/organization/all-organizations",
        },


        {
          name: "Services",
          icon: <GrServices size={css.iconSize2} />,
          master: true,
          child: [
            {
              name: "Service master",
              icon: <MdMiscellaneousServices size={css.iconSize2} />,
              path: "/v1/service/service/all-service",
            },
          ],
        },

      ];
    case 2:
      return [
        {
          name: "Dashboard",
          icon: <AiOutlineDashboard size={css.iconSize2} />,
          path: "/v1/service/dashboard/adminDashboard",
        },
        {
          name: "Requests",
          icon: <TbMessage2Heart size={css.iconSize2} />,
          path: "/v1/service/request/all-request",
        },
        {
          name: "Organization",
          icon: <VscOrganization size={css.iconSize2} />,
          path: "/v1/service/organization/all-organizations",
        },

      ];
    default: return [];
  }
};