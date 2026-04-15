import { signIn } from "../actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ redirect?: string; error?: string }> }) {
  const sp = await searchParams;
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--brand-cream)" }}>
      <form action={signIn} className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4">
        <h1 className="text-xl font-medium mb-2">Admin Login</h1>
        <input type="hidden" name="redirect" value={sp?.redirect ?? "/admin"} />
        <label className="text-sm flex flex-col gap-1">
          Email
          <input name="email" type="email" required className="border rounded-md px-3 py-2" />
        </label>
        <label className="text-sm flex flex-col gap-1">
          Password
          <input name="password" type="password" required className="border rounded-md px-3 py-2" />
        </label>
        {sp?.error && <p className="text-sm text-red-600">{sp.error}</p>}
        <button type="submit" className="rounded-md px-4 py-2 text-white" style={{ backgroundColor: "var(--brand-footer)" }}>
          Sign in
        </button>
      </form>
    </div>
  );
}
