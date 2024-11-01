import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
var define_import_meta_env_default = { BASE_URL: "/build/", DEV: false, MODE: "production", PROD: true, SSR: true };
const useMainStore = create()(
  persist(
    (set, get) => ({
      colorMode: localStorage.getItem("colorMode") || define_import_meta_env_default.VITE_COLOR_MODE || "light",
      setColorMode: (colorMode) => {
        set({ colorMode });
      },
      auth: { user: null },
      setAuth: (auth) => set({ auth }),
      profileTab: "profile",
      setProfileTab: (profileTab) => set({ profileTab }),
      sidebarOpen: false,
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen })
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
export {
  useMainStore as u
};
