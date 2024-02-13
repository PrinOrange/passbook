import { STATUS_CODE } from "./ipc-status-code";

export type IPCResponse<C = null> = {
  status: STATUS_CODE;
  message?: string;
  content: C;
};
