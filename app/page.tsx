"use client";
import {
  OrganizationProfile,
  OrganizationSwitcher,
  Protect,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
} from "@clerk/nextjs";
import { useEffect } from "react";

const menuItems = [
  { label: "Section", permissions: ["org:admin:generic", "org:admin:system"] },
  {
    label: "Sub Items 1",
    permissions: ["org:admin:system"],
  },
  {
    label: "Sub Items 2",
    permissions: ["org:admin:generic"],
  },
];
export default function Home() {
  return (
    <div className="h-screen">
      <SignedOut>
        <p>This content is public. Only signed out users can see this.</p>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <OrganizationSwitcher />
        <UserButton />
        <OrganizationProfile routing="virtual">
          <OrganizationProfile.Page
            label="Settings"
            url="settings"
            labelIcon="🛠️"
          >
            <p>PROTECTED?</p>
            {menuItems.map(({ label, permissions }) => {
              return (
                <Protect
                  condition={(has) =>
                    permissions.some((p) => {
                      console.log("test", p);
                      return has({ permission: p });
                    })
                  }
                >
                  {label}
                </Protect>
              );
            })}
          </OrganizationProfile.Page>
          <OrganizationProfile.Page label="general" />
          <OrganizationProfile.Page label="members" />
        </OrganizationProfile>
        {}
      </SignedIn>
    </div>
  );
}
