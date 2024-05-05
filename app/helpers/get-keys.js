import { helper } from '@ember/component/helper';

export default helper(function getKeys([obj]) {
  if (!obj) return [];
  return Object.keys(obj);
});
