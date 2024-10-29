import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-heading-1">404</div>
      <div className="text-text-base--large">This page could not be found.</div>
      <Link href="/" className="mt-4">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
