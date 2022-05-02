import _ from "underscore";

export const sorterObj = (obj: unknown, item: string): unknown => {
  const objs = _.sortBy(obj, item);

  return objs.reverse();
};
