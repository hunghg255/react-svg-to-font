import React from 'react';

import { SvgtoiconClassname } from '../../public/font/svgtoicon';

export const Icon = (props: React.SVGProps<SVGSVGElement> & { iconName: SvgtoiconClassname }) => {
  // @ts-ignore
  return <i className={`${props.iconName}`} {...props} />;
};
