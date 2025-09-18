import * as React from "react";

export default function Custom({ children }: { children: React.ReactNode }) {
  return <button className="primary">hello: {children}</button>;
}

export type HelloProps = {
  text?: string;
};

export function Hello({ text }: HelloProps) {
  return <div>{text || "hello world"}</div>;
}

export type FeatureProps = {
  title: string;
  desc: string;
};

export function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="flex gap-2 text-left flex-col items-start border feature rounded-sm py-2 px-2 prose prose-neutral dark:prose-invert">
      <h3 className="font-medium">{title}</h3>
      <p className="desc text-md">{desc}</p>
    </div>
  );
}
