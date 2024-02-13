import { IPCResponse } from "@/types/ipc";
import { invoke } from "@tauri-apps/api/tauri";

type Response = IPCResponse<null>;

export const sendLoginRequest = (enterkey: string) => {
  return invoke<Response>("login", { enterkey });
};
