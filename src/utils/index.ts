import { isArray } from "lodash-es";

// 扁平化
export function flatData(list = []) {
  const result = [];
  list.map(item => {
    if (isArray(item.children) && item.children.length > 0) {
      result.push(...flatData(item.children));
    }
    result.push(item);
  })

  return result;
}