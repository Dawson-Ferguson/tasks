import React, { useState } from "react";

export function useDoubleHalfState(): [
    number,
    React.Dispatch<React.SetStateAction<number>>,
] {
    return useState<number>(10);
}
