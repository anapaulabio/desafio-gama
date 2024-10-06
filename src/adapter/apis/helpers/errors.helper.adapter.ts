export function getErrorMessage(error: unknown) {
    console.error(error)
    if (error instanceof Error) return error.message;
    return String(error);
   }