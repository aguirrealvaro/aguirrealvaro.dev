/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Link, Typography } from "@/components/ui";

type PostContentProps = {
  content: string;
};

const PostContent: FunctionComponent<PostContentProps> = ({ content }) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={components} />;
};

export { PostContent };

const components = {
  h3: (props: any) => <Typography.H3 className="mb-4" {...props} />,
  p: (props: any) => <Typography.Paragraph {...props} />,
  hr: (props: any) => <br {...props} />,
  //code: (props: any) => <Typography.Code {...props} />,
  a: (props: any) => <Link disabled {...props} />,
};
