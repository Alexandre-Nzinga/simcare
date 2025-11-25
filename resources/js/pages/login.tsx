import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Head } from '@inertiajs/react';
import { useState } from 'react';


export default function Login() {
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    // TODO: Wire this up to your backend auth endpoint
    // Example (fetch):
    // try { ... } catch (err) { setErrors({ email: 'Invalid credentials' }) }

    // temporary visual feedback for dev
    setTimeout(() => setProcessing(false), 600);
  };

  return (
    <>
      <Head title="Log in" />

      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFC] dark:bg-[#0a0a0a] p-6">
        <div className="w-full max-w-md bg-white dark:bg-[#0b0b0b] border border-sidebar-border/70 dark:border-sidebar-border rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-1 text-[#1b1b18] dark:text-[#EDEDEC]">Log in with KDG-account</h2>
          <p className="text-sm text-muted-foreground mb-6">Enter email and password</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoFocus
                  tabIndex={1}
                  autoComplete="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={processing}
                />
                <InputError message={errors.email} />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  tabIndex={2}
                  autoComplete="current-password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={processing}
                />
                <InputError message={errors.password} />
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox id="remember" name="remember" tabIndex={3} checked={formData.remember} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, remember: checked === true }))} disabled={processing} />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>

            <Button type="submit" className="mt-2 w-full" tabIndex={4} disabled={processing} data-test="login-button">
              {processing && <Spinner />}
              Log in
            </Button>
            <div className="mt-2">
              <a href="/oauth/kdglogin" data-test="kdglogin-button">
                <Button className="mt-2 w-full" type="button">
                  Sign in with KDG
                </Button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
