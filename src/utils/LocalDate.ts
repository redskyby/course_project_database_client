// export default function localDate(date: string): string {
//     const localData = new Date(date);
//
//     return localData.toLocaleDateString();
// }

import memoize from "memoize-one";

export const localDate = memoize((date) => {
    const localData = new Date(date);
    return localData.toLocaleDateString();
});

// Чтобы использовать мемоизацию, вам нужно воспользоваться соответствующей библиотекой, например, memoize-one
