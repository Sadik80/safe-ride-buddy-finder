
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

export default function AuthDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-5">
            <TabsTrigger value="signin" className="py-2">Sign In</TabsTrigger>
            <TabsTrigger value="login" className="py-2">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm onDone={() => { toast({title: "Sign In Successful"}); onOpenChange(false); }} />
          </TabsContent>
          <TabsContent value="login">
            <LoginForm onDone={() => { toast({title: "Login Successful"}); onOpenChange(false); }} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

function SignInForm({ onDone }: { onDone: () => void }) {
  const [data, setData] = useState({ studentName: "", fatherName: "", contact: "", schoolName: "" });
  const [err, setErr] = useState("");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (Object.values(data).some(v => !v.trim())) {
      setErr("Fill out all fields.");
      return;
    }
    if (!/^\+?\d{7,15}$/.test(data.contact.replace(/\D/g, ""))) {
      setErr("Enter a valid contact number.");
      return;
    }
    setErr("");
    onDone();
  }
  return (
    <form className="space-y-4" onSubmit={submit} autoComplete="off" spellCheck={false}>
      <DialogHeader>
        <DialogTitle>Student Sign In</DialogTitle>
        <DialogDescription>Register to book your ride</DialogDescription>
      </DialogHeader>
      <Input
        placeholder="Student's Name"
        value={data.studentName}
        onChange={e => setData({ ...data, studentName: e.target.value })}
      />
      <Input
        placeholder="Father's Name"
        value={data.fatherName}
        onChange={e => setData({ ...data, fatherName: e.target.value })}
      />
      <Input
        type="tel"
        placeholder="Contact Number"
        value={data.contact}
        onChange={e => setData({ ...data, contact: e.target.value })}
      />
      <Input
        placeholder="School's Name"
        value={data.schoolName}
        onChange={e => setData({ ...data, schoolName: e.target.value })}
      />
      {err && <span className="text-red-600 text-sm">{err}</span>}
      <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold">
        Sign In
      </Button>
    </form>
  );
}

function LoginForm({ onDone }: { onDone: () => void }) {
  const [data, setData] = useState({ studentName: "", contact: "" });
  const [err, setErr] = useState("");
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.studentName.trim() || !data.contact.trim()) {
      setErr("Fill out all fields.");
      return;
    }
    if (!/^\+?\d{7,15}$/.test(data.contact.replace(/\D/g, ""))) {
      setErr("Enter a valid contact number.");
      return;
    }
    setErr("");
    onDone();
  }
  return (
    <form className="space-y-4" onSubmit={submit} autoComplete="off" spellCheck={false}>
      <DialogHeader>
        <DialogTitle>Student Login</DialogTitle>
        <DialogDescription>Login to your account</DialogDescription>
      </DialogHeader>
      <Input
        placeholder="Student's Name"
        value={data.studentName}
        onChange={e => setData({ ...data, studentName: e.target.value })}
      />
      <Input
        type="tel"
        placeholder="Contact Number"
        value={data.contact}
        onChange={e => setData({ ...data, contact: e.target.value })}
      />
      {err && <span className="text-red-600 text-sm">{err}</span>}
      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold">
        Login
      </Button>
    </form>
  );
}
