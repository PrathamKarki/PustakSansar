"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Eye, EyeOff, BookOpen, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Image from "next/image"
import axios from "axios";
import { toast } from 'sonner';
import { useRouter } from "next/navigation"

// Yup validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
})



interface LoginFormValues {
  email: string
  password: string
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();


  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  }

  const handleSubmit = async (values: LoginFormValues, { setSubmitting }: any) => {
    try {
    const {data} = await axios.post('http://localhost:8080/login', values)

      if (data?.message === "Invalid Password" || data?.message === "Email not found") {
        toast.error(data.message)
      } else {
        toast.success("Login successful!")
  
      }
      if(data?.isLoggedIn)  router.push('/');

    } catch (error) {
      console.error("Login error:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    
      
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md ">
        {/* Logo/Brand Section */}
        <div className="text-center ">
          <div className="flex justify-center items-center mb-4">
            <Image
              src="/logo.png"
              width={200}
              height={150}
              alt="pustakSansar logo"
              className="object-contain"
            />
          </div>
          <p className="text-gray-600 text-lg ">Your Digital Book Universe</p>
        </div>

        <Card className="shadow-xl border border-gray-200 bg-white">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600">Sign in to your account to continue reading</CardDescription>
          </CardHeader>

          <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <CardContent className="space-y-4">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Field name="email">
                        {({ field }: any) => (
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className={`pl-10 ${
                              errors.email && touched.email
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 focus:border-black"
                            }`}
                          />
                        )}
                      </Field>
                    </div>
                    <ErrorMessage name="email" component="p" className="text-sm text-red-600" />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2 mb-5">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Field name="password">
                        {({ field }: any) => (
                          <Input
                            {...field}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className={`pl-10 pr-10 ${
                              errors.password && touched.password
                                ? "border-red-500 focus:border-red-500"
                                : "border-gray-300 focus:border-black"
                            }`}
                          />
                        )}
                      </Field>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <ErrorMessage name="password" component="p" className="text-sm text-red-600" />
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </Label>
                    </div>
                    <button type="button" className="text-sm text-black hover:text-gray-700 font-medium">
                      Forgot password?
                    </button>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    {"Don't have an account? "}
                    <button type="button" className="text-black hover:text-gray-700 font-medium">
                      <a href="/register" className="text-primary hover:text-primary/80 font-medium transition-colors">Register</a>
                    </button>
                  </div>
                </CardFooter>
              </Form>
            )}
          </Formik>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>© 2024 pustakSansar. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
