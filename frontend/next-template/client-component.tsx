"use client";

import { Form } from "@heroui/form";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

import useAuthenticateMutation from "@/hooks/useAuthenticateMutation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticateMutation = useAuthenticateMutation();

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function isDisabled() {
    return username === "" || password === "";
  }

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.promise(authenticateMutation.mutateAsync({ username, password }), {
      loading: "Authenticating...",
      success: "Successfully authenticated",
      error: (error: Error) => error.message,
    });
  }

  return (
    <Form
      className={
        "flex flex-col p-5 items-center gap-3 rounded-lg bg-foreground-50"
      }
      onSubmit={handleLogin}
    >
      <h1 className={"text-xl sm:text-3xl font-bold"}>Login</h1>
      <Input
        label={"Username"}
        placeholder={"Enter your username"}
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        label={"Password"}
        placeholder={"Enter your password"}
        type={"password"}
        value={password}
        onChange={handlePasswordChange}
      />
      <Button
        className={"w-full"}
        color={"primary"}
        isDisabled={isDisabled()}
        type={"submit"}
      >
        Login
      </Button>
      <div className={"flex w-full justify-end"}>
        <Link className={"text-sm"} href={"/register"}>
          Dont have an account?
        </Link>
      </div>
    </Form>
  );
}
