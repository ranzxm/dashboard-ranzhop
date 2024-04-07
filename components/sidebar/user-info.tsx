import React from "react";
import { Card, CardContent } from "../ui/card";

export default function UserInfo() {
  return (
    <section id="userinfo">
      <Card>
        <CardContent className="px-2 py-2 flex gap-3">
          <div
            id="avatar"
            className="w-12 h-12 flex flex-none items-center justify-center bg-cyan-800 rounded-full"
          >
            <p className="font-bold  text-white">FS</p>
          </div>
          <div className="grow">
            <p className="font-bold">Felix</p>
            <p className="text-sm">felix@ranzxm.com</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
