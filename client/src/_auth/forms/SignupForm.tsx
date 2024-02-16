import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";

const SignupForm = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })


  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/TKGraphics.png"/>

        <h2 className="h2-semibold">Create a new account</h2>
        <p className="small-regular text-gray-500">Welcome, please enter your account details.</p>

        <form /*onSubmit={form.handleSubmit()}*/ className="flex flex-col gap-5 w-full mt-4"> 
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <FormControl>
                  <Input type="text" className="input-style" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <FormControl>
                  <Input type="text" className="input-style" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <FormControl>
                  <Input type="email" className="input-style" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <FormControl>
                  <Input type="password" className="input-style" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="authentication-button">
            Sign up
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account? <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm
