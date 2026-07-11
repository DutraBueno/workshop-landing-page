export function reportLovableError(error: Error, info?: Record<string, unknown>) {
  console.error("Lovable Error Boundary:", error, info);
}
