import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { Boxes } from "lucide-react";
import type { NavigationItemProps, NavigationSectionProps } from "src/shared";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "src/shared";

type SidebarProps = {
  title: string;
  components?: NavigationSectionProps[];
};

export const AppSidebar: FC<SidebarProps> = ({ title, components }) => {
  const { t } = useTranslation();

  return (
    <Sidebar>
      <SidebarHeader className="ml-2 mt-4 flex flex-row items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Boxes />
      </SidebarHeader>

      <SidebarContent>
        {components?.map((section: NavigationSectionProps) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{t(section.title)}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item: NavigationItemProps) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url}>{t(item.title)}</NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
