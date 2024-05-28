"use client";
import {
  OrganizationProfile,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
} from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const { setActive } = useClerk();

  useEffect(() => {
    setActive({ organization: "org_2gQR8NEC42hHcCuuizwi5JiDqsU" });
  }, [setActive]);

  return (
    <div className="h-screen">
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <OrganizationProfile routing="virtual">
          <OrganizationProfile.Page
            label="Settings"
            url="settings"
            labelIcon="🛠️"
          >
            CUSTOM STUFF
          </OrganizationProfile.Page>
          <OrganizationProfile.Page label="general" />
          <OrganizationProfile.Page label="members" />
        </OrganizationProfile>
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </div>
  );
}
