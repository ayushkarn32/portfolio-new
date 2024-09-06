"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function RouteChangeHandler() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(pathname);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? (
    <div className="main-loader">
      <div className="loader-child _1st-child"></div>
      <div className="loader-child _2nd-child"></div>
    </div>
  ) : null;
}
