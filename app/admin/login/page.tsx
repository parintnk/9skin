import { signIn } from "../actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ redirect?: string; error?: string }> }) {
  const sp = await searchParams;
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-light tracking-[0.22em]" style={{ color: "var(--a-text)" }}>9SKIN</h1>
          <p className="text-xs mt-1 tracking-[0.3em]" style={{ color: "var(--a-text-muted)" }}>CONTENT ADMIN</p>
        </div>
        <form action={signIn} className="a-card p-7 flex flex-col gap-4">
          <input type="hidden" name="redirect" value={sp?.redirect ?? "/admin"} />
          <label className="a-label">
            <span className="a-label-text">Email</span>
            <input name="email" type="email" required autoFocus className="a-input" />
          </label>
          <label className="a-label">
            <span className="a-label-text">Password</span>
            <input name="password" type="password" required className="a-input" />
          </label>
          {sp?.error && <p className="text-xs" style={{ color: "var(--a-danger)" }}>{sp.error}</p>}
          <button type="submit" className="a-btn a-btn-primary justify-center mt-1">
            Sign in
          </button>
        </form>
        <p className="text-[11px] text-center mt-4" style={{ color: "var(--a-text-muted)" }}>
          Authorized personnel only
        </p>
      </div>
    </div>
  );
}
