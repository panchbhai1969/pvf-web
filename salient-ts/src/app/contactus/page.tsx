import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for now
      </h2>
      {/* <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p> */}
      <form
        action="https://formspree.io/f/mrbzgogb"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        method="POST"
      >
        <TextField
          className="col-span-full"
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        {/* <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        /> */}
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Comment"
          name="comment"
          type="text"
          autoComplete="text"
          required
        />
        {/* <TextField
          className="col-span-full"
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        /> */}
        {/* <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField> */}
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Hear from us! 👂 <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
      <div className="col-span-full mt-6">
      <a href="/"><Button 
      type="submit" variant="solid" color="white" className="w-full">
            <span>
            <span aria-hidden="true">&larr;</span> Go back! 🏃
            </span>
          </Button></a>
      </div>
      
    </SlimLayout>
  )
}
