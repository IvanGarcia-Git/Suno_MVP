import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-B-XKf_KX.js";
import { t } from "./translations-CCbcAZo6.js";
import { Button } from "@nextui-org/react";
import "react";
import "./useMainStore-BUSgmXnG.js";
import { Link } from "@inertiajs/react";
import { P as PageHeader } from "./PageHeader-M3dsieGA.js";
import { P as PageContent } from "./PageContent-BjQSMN_k.js";
import "react-toastify";
import "./useMediaManager-B4H2TCSK.js";
import "@tackboon/react-grid-rearrange";
import "dayjs";
import { AdministratorsList } from "./AdministratorsList-C52BD0tF.js";
import "./useColorMode-CeUIIFZg.js";
import "react-pro-sidebar";
import "framer-motion";
import "zustand";
import "zustand/middleware";
import "axios";
import "numeral";
const Page = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHeader, { title: t("Administrators"), children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(
      Button,
      {
        size: "sm",
        color: "primary",
        className: "px-6",
        variant: "flat",
        as: Link,
        href: route("dashboard.user.create"),
        children: t("New user")
      }
    ) }) }),
    /* @__PURE__ */ jsx(PageContent, { children: /* @__PURE__ */ jsx(AdministratorsList, {}) }),
    /* @__PURE__ */ jsx("div", { className: "h-20" })
  ] });
};
Page.layout = (page) => /* @__PURE__ */ jsx(Layout, { ...{ children: page, pageTitle: String(t("Administrators")) } });
export {
  Page,
  Page as default
};
