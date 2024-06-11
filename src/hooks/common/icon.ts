import { useSvgIconRender } from '@/hooks';
import SvgIcon from '@/components/custom/svg-icon.vue';

export function useSvgIcon() {
  const { SvgIconVNode } = useSvgIconRender(SvgIcon);

  return {
    SvgIconVNode
  };
}
