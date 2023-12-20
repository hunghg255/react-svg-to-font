import React from 'react';

import { Ticon } from '../../public/svgcss/icon-type';

export const IconCss = ({
  iconName,
  ...props
}: React.SVGProps<SVGSVGElement> & { iconName: Ticon }) => {
  // @ts-ignore
  return <i className={`${iconName}`} {...props} />;
};
