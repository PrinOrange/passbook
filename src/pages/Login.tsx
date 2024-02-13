import { PageContainer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { sendLoginRequest } from "@/ipcs/login";
import { STATUS_CODE } from "@/types/ipc-status-code";
import { useState } from "react";

export const LoginPage = () => {
  const [inputEnterkey, setInputEnterkey] = useState("");
  const { toast } = useToast();

  const handleLogin = async () => {
    sendLoginRequest(inputEnterkey).then((res) => {
      if (res.status === STATUS_CODE.OK) {
        // TODO: finish the jump logic
      } else if (res.status === STATUS_CODE.EnterKeyError) {
        toast({
          description: "Enter key error!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Unknown Error",
          description: `ErrorCode:${res.status}\nPlease try it later.`,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <PageContainer className="flex flex-col justify-center">
      <Card className="w-[380px] mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>PassBook</CardTitle>
          <CardDescription>Your personal portable password notebook</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <Input
              type="password"
              value={inputEnterkey}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
              }}
              onChange={(e) => setInputEnterkey(e.target.value)}
              placeholder="The key to enter the passbook"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>
      </Card>
    </PageContainer>
  );
};
