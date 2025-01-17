import { toast, TypeOptions } from "react-toastify";

export const notify = (message: string, type: TypeOptions) =>
  toast(message, { type });
