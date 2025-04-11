"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    Cookies.set("cookie_consent", value, { expires: 365 });
    //setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 z-50">
      <Card className="p-4 flex flex-col md:flex-row items-center justify-between bg-background/80 backdrop-blur-md border border-default-200 rounded-2xl shadow-lg">
        <p className="text-sm text-default-600 mb-3 md:mb-0">
          Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="solid" onClick={() => handleConsent("accepted")}>
            Aceptar
          </Button>
          <Button size="sm" variant="ghost" onClick={() => handleConsent("rejected")}>
            Rechazar
          </Button>
        </div>
      </Card>
    </div>
  );
}
