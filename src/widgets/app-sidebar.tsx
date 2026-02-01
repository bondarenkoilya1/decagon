"use client";

import type { FC } from "react";
import { Boxes } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "src/i18n";
import type { NavigationSectionProps } from "src/shared";

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

type AppSidebarProps = {
  title: string;
  components?: NavigationSectionProps[];
};

export const AppSidebar: FC<AppSidebarProps> = ({ title, components }) => {
  const t = useTranslations();

  return (
    <Sidebar>
      <SidebarHeader className="mt-4 ml-2 flex flex-row items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Boxes />
      </SidebarHeader>

      <SidebarContent>
        {components?.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{t(section.title)}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{t(item.title)}</Link>
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
