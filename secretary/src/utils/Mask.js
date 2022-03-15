import React from "react";

import MaskedInput from "react-text-mask";

// mask expression
const TextMaskCExpDate = React.forwardRef(function TextMaskCustom(props, ref) {
  const setRef = React.useCallback(
    (maskedInputRef) => {
      const value = maskedInputRef ? maskedInputRef.inputElement : null;

      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    },
    [ref]
  );

  return <MaskedInput {...props} ref={setRef} />;
});

export default TextMaskCExpDate;
