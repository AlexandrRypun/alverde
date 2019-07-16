import { helper } from '@ember/component/helper';

export function hryvnaPrice([cents]) {
  return `₴ ${cents / 100}`;
}

export default helper(hryvnaPrice);
