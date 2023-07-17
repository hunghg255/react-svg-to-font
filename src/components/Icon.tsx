import React from 'react';

export type SvgtoiconClassname =
  | 'svgtoicon-adobe'
  | 'svgtoicon-demo'
  | 'svgtoicon-git'
  | 'svgtoicon-left'
  | 'svgtoicon-react'
  | 'svgtoicon-stylelint';

export const Icon = (props: React.SVGProps<SVGSVGElement> & { iconName: SvgtoiconClassname }) => {
  // @ts-ignore
  return <i className={`${props.iconName}`} {...props} />;
};
