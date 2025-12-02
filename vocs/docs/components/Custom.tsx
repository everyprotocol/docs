export type FeatureProps = {
  title: string;
  desc: string;
};

export function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="flex gap-2 text-left flex-col items-start border feature rounded-sm py-2 px-2 prose prose-neutral dark:prose-invert">
      <h3 className="font-medium">{title}</h3>
      <p className="desc text-md italic">{desc}</p>
    </div>
  );
}
